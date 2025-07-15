# CodeQuizzer

A full-stack quiz application built with Angular (Frontend) and FastAPI + MongoDB (Backend).

## Project Structure

```
CodeQuizzer/
├── frontend/          # Angular application
├── backend/           # FastAPI + MongoDB server
└── README.md
```

## Quick Start

### Prerequisites
- Node.js (for Angular)
- Python 3.8+ (for FastAPI)
- MongoDB

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Create `.env` file:
```env
MONGO_URI=mongodb://localhost:27017
DB_NAME=codequizzer
```

4. Start MongoDB (make sure it's running on localhost:27017)

5. Run the backend server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

The frontend will be available at `http://localhost:4200`

## API Documentation

Visit `http://localhost:8000/docs` for interactive API documentation.

## Features

- User authentication (signup, login, logout)
- User profile management
- Simple session-based authentication
- MongoDB database integration
- Responsive Angular UI

## Development

- Backend: FastAPI with MongoDB (Beanie ODM)
- Frontend: Angular 16 with TypeScript
- Authentication: Simple session-based (localStorage)
- Database: MongoDB
