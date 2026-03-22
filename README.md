# SentiMed

An AI-powered health case management application.

## Tech Stack

| Layer    | Technology                              |
| -------- | --------------------------------------- |
| Frontend | React 19, TypeScript, Vite, React Router, Axios |
| Backend  | Python, FastAPI, SQLAlchemy, Pydantic, Uvicorn |
| Database | PostgreSQL 16                           |
| Infra    | Docker, Docker Compose                  |

## Project Structure

```
app/
├── frontend/       # React + TypeScript SPA
├── backend/        # FastAPI application
│   └── app/
│       ├── main.py
│       ├── config.py
│       ├── db.py
│       ├── routes/     # API route handlers
│       ├── models/     # SQLAlchemy models
│       ├── schemas/    # Pydantic schemas
│       ├── services/   # Business logic
│       └── utils/
├── infra/          # Infrastructure as code
├── docs/           # Project documentation
├── data/           # Data files and scripts
├── scripts/        # Utility scripts
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js 18+
- Python 3.11+

### 1. Start the database

```bash
docker-compose up -d
```

This starts a PostgreSQL 16 instance on port `5432`.

### 2. Start the backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

Backend runs at `http://localhost:8000`.
API docs available at `http://localhost:8000/docs`.

### 3. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.

## API Endpoints

| Method | Path              | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/health`     | Health check       |
| POST   | `/api/cases/`     | Create a new case  |
| GET    | `/api/cases/{id}` | Get a case by ID   |

## Environment Variables

Copy `backend/.env.example` to `backend/.env` and update as needed:

```env
APP_NAME=AI Health API
APP_ENV=development
APP_HOST=0.0.0.0
APP_PORT=8000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ai_health
UPLOAD_DIR=uploads
```

## Contributing

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for commit conventions and branch naming.

## 🖥️ SentiMed — Home Interface

![SentiMed Home](docs/assets/homepage.png)