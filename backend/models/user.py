from beanie import Document
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional
from passlib.context import CryptContext

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(Document):
    username: str
    email: EmailStr
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "users"

    @staticmethod
    def hash_password(password: str) -> str:
        return pwd_context.hash(password)
    
    def verify_password(self, password: str) -> bool:
        return pwd_context.verify(password, self.password_hash)

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None

class UserResponse(BaseModel):
    id: str
    username: str
    email: str
    created_at: datetime
