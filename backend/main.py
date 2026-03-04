from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.notes import router as notes_router

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["htttp://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(notes_router, prefix="/api/notes")

@app.get("/", tags=["root"])
async def root():
    return {"message": "Server is running!"}