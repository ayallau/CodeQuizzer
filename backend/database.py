import os
from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from typing import cast
import asyncio

from models.user import User  # Load all your models here
from models.topic import Topic
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = cast(str, os.getenv("DB_NAME"))

if not MONGO_URI or not DB_NAME:
    raise ValueError("MONGO_URI and DB_NAME must be set")

client = AsyncIOMotorClient(MONGO_URI)

async def check_db_connection():
    try:
        await client.admin.command('ping')
        db_list = await client.list_database_names()
        if DB_NAME in db_list:
            return True
        else:
            return False
    except Exception:
        return False

async def init_db():
    await init_beanie(database=client[DB_NAME], document_models=[User, Topic])

def close_db():
    client.close()

# Synchronous check during module load (optional, but useful if you want to verify connection)
if __name__ == "__main__":
    if not asyncio.run(check_db_connection()):
        raise Exception("Failed to connect to MongoDB")
