import asyncio
import os
from dotenv import load_dotenv
from database import init_db, close_db
from models.topic import Topic

load_dotenv()

# Sample topics data
SAMPLE_TOPICS = [
    {
        "title": "JavaScript",
        "description": "Learn JavaScript programming language fundamentals and advanced concepts",
        "color": "#F7DF1E",
        "icon": "js"
    },
    {
        "title": "Python",
        "description": "Master Python programming with practical examples and best practices",
        "color": "#3776AB",
        "icon": "python"
    },
    {
        "title": "React",
        "description": "Build modern web applications with React framework",
        "color": "#61DAFB",
        "icon": "react"
    },
    {
        "title": "Node.js",
        "description": "Server-side JavaScript development with Node.js",
        "color": "#339933",
        "icon": "nodejs"
    },
    {
        "title": "SQL",
        "description": "Database management and SQL query optimization",
        "color": "#336791",
        "icon": "database"
    },
    {
        "title": "Git",
        "description": "Version control and collaboration with Git",
        "color": "#F05032",
        "icon": "git"
    }
]

async def seed_topics():
    """Seed the database with sample topics"""
    try:
        # Initialize database connection
        await init_db()
        print("Database initialized successfully")
        
        # Check if topics already exist
        existing_topics = await Topic.find_all().to_list()
        if existing_topics:
            print(f"Found {len(existing_topics)} existing topics. Skipping seed.")
            return
        
        # Create sample topics
        created_topics = []
        for topic_data in SAMPLE_TOPICS:
            topic = Topic(**topic_data)
            await topic.insert()
            created_topics.append(topic)
            print(f"Created topic: {topic.title}")
        
        print(f"Successfully created {len(created_topics)} topics")
        
    except Exception as e:
        print(f"Error seeding topics: {e}")
    finally:
        close_db()

if __name__ == "__main__":
    asyncio.run(seed_topics()) 