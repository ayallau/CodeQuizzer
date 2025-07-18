from fastapi import FastAPI, HTTPException
from database import init_db, close_db
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from models.user import User, UserCreate, UserResponse
from pydantic import BaseModel
from models.topic import Topic
from typing import List



@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    print("Database initialized")
    yield
    print("Database closed")
    close_db()

    
app = FastAPI(lifespan=lifespan)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Angular dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# get root
@app.get("/")
async def root():
    return {"message": "Welcome to CodeQuizzer Server!"}




# signup
@app.post("/signup", response_model=dict)
async def signup(user_data: UserCreate):
    # Check if user already exists
    existing_user = await User.find_one({"$or": [{"email": user_data.email}, {"username": user_data.username}]})
    print('Signup failed:', existing_user); # TODO: remove this

    if existing_user:
        raise HTTPException(status_code=400, detail="User with this email or username already exists")
    
    # Create new user
    user = User(
        username=user_data.username,
        email=user_data.email,
        password_hash=User.hash_password(user_data.password)
    )
    print("Saving user:", user.dict())
    await user.insert()
    
    return {
        "user": {
            "id": str(user.id),
            "username": user.username,
            "email": user.email,
            "created_at": user.created_at
        },
        "message": "User created successfully"
    }




class LoginRequest(BaseModel):
    username: str
    password: str


# login
@app.post("/login", response_model=dict)
async def login(login_data: LoginRequest):
    # Find user by username or email
    user = await User.find_one({"$or": [{"username": login_data.username}, {"email": login_data.username}]})
    if not user or not user.verify_password(login_data.password):
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    
    return {
        "user": {
            "id": str(user.id),
            "username": user.username,
            "email": user.email,
            "created_at": user.created_at
        },
        "message": "Login successful"
    }





# reset password
@app.post("/reset-password")
async def reset_password(email: str):
    # Find user by email
    user = await User.find_one({"email": email})
    if not user:
        # Don't reveal if email exists or not for security
        return {"message": "If the email exists, a reset link has been sent"}
    
    # TODO: Implement actual password reset logic (send email, etc.)
    return {"message": "If the email exists, a reset link has been sent"}





# get user profile
@app.get("/profile/{user_id}", response_model=UserResponse)
async def get_profile(user_id: str):
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "id": str(user.id),
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at
    }

# ping db
@app.get("/ping-db")
async def ping_db():
    count = await User.find_all().count()
    return {"users_in_db": count}



# get topics
@app.get("/api/topics", response_model=List[dict])
async def get_topics():
    topics = await Topic.find_all().to_list()
    return [
        {
            "_id": str(topic.id),
            "title": topic.title,
            "description": topic.description,
            "color": topic.color,
            "icon": topic.icon
        }
        for topic in topics
    ]
    