from fastapi import FastAPI
# FastAPI is a Python class that provides all the functionality for the API.
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

# the @ function is called a decorator
# The @app.get("/") as a whole is called 'Path operation decorator'


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "Query": q}


class Item(BaseModel):
    name: str
    price: float
    is_offer: Optional[bool] = None


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}
