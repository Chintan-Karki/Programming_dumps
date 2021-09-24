from fastapi import FastAPI
# FastAPI is a Python class that provides all the functionality for the API.

app = FastAPI()

# the @ function is called a decorator
# The @app.get("/") as a whole is called 'Path operation decorator'


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}
