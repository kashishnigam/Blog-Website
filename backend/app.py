from fastapi import FastAPI
from .quotes import get_random_quote
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (you can restrict this if needed)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/quote")
def fetch_quote():
    print("Quote endpoint was accessed!") 
    return {"quote": get_random_quote()}


#uvicorn backend.app:app --reload
