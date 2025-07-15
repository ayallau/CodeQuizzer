from fastapi import APIRouter, HTTPException
from typing import List
from models.user import User, UserCreate, UserUpdate, UserResponse

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.post("", response_model=UserResponse)
async def create_user(user_data: UserCreate):
    # Check if user already exists
    existing_user = await User.find_one({"$or": [{"email": user_data.email}, {"username": user_data.username}]})
    if existing_user:
        raise HTTPException(status_code=400, detail="User with this email or username already exists")
    
    user = User(
        username=user_data.username,
        email=user_data.email,
        password_hash=User.hash_password(user_data.password)
    )
    await user.insert()
    return {
        "id": str(user.id),
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at
    }

@router.get("", response_model=List[UserResponse])
async def get_users():
    users = await User.find_all().to_list()
    return [
        {
            "id": str(user.id),
            "username": user.username,
            "email": user.email,
            "created_at": user.created_at
        }
        for user in users
    ]

@router.get("/{user_id}", response_model=UserResponse)
async def get_user(user_id: str):
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "id": str(user.id),
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at
    }

@router.put("/{user_id}", response_model=UserResponse)
async def update_user(user_id: str, user_update: UserUpdate):
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    update_data = user_update.model_dump(exclude_unset=True)
    
    # Hash password if it's being updated
    if "password" in update_data:
        update_data["password_hash"] = User.hash_password(update_data.pop("password"))
    
    for key, value in update_data.items():
        setattr(user, key, value)

    await user.save()
    return {
        "id": str(user.id),
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at
    }

@router.delete("/{user_id}")
async def delete_user(user_id: str):
    user = await User.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    await user.delete()
    return {"message": "User deleted"}
