from fastapi import FastAPI
from app.config import APP_NAME
from app.routes import health, cases

app = FastAPI(title=APP_NAME, version="0.1.0")

# API prefix applied globally
API_PREFIX = "/api"

app.include_router(health.router, prefix=API_PREFIX)
app.include_router(cases.router, prefix=API_PREFIX)