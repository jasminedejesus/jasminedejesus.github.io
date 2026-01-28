from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend (Next.js) to call this API from the browser
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Experiment(BaseModel):
    name: str
    parameters: dict
    result: dict


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/experiments")
def save_experiment(exp: Experiment):
    # later: store in Postgres
    return {"message": "received", "experiment": exp}

