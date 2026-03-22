from fastapi import APIRouter
from uuid import uuid4

router = APIRouter(
    prefix="/cases",
    tags=["Cases"]
)

# Temporary in-memory store (Day 1 only)
fake_db = {}


@router.post("/")
def create_case(payload: dict):
    case_id = str(uuid4())

    fake_db[case_id] = {
        "id": case_id,
        "data": payload
    }

    return {
        "message": "Case created",
        "case_id": case_id
    }


@router.get("/{case_id}")
def get_case(case_id: str):
    case = fake_db.get(case_id)

    if not case:
        return {"error": "Case not found"}

    return case