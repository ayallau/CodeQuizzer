# CodeQuizzer Backend

FastAPI backend with MongoDB for CodeQuizzer application.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create `.env` file:
```env
SECRET_KEY=your-super-secret-key-change-this-in-production
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=codequizzer
```

3. Start MongoDB (make sure MongoDB is running on localhost:27017)

4. Run the server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints

### Authentication
- `POST /signup` - Register new user
- `POST /login` - Login user
- `POST /reset-password` - Reset password
- `GET /profile/{user_id}` - Get user profile

### Users
- `GET /api/users`