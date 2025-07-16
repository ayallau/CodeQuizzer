from beanie import Document
from pydantic import Field
from typing import Optional
import uuid

class Topic(Document):
    title: str
    description: str
    color: str
    icon: str

    class Settings:
        name = "Topics" 