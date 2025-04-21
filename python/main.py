# main.py
from fastapi import FastAPI, UploadFile
from agent import agent

app = FastAPI()

@app.post("/validate")
async def validate(file: UploadFile):
    tmp = f"/tmp/{file.filename}"
    with open(tmp, "wb") as f:
        f.write(await file.read())

    # Your instructions for the agent
    prompt = (
        "Step 1: read the Excel at {path}.\n"
        "Step 2: ensure columns A(int), B(date), C(str).\n"
        "Step 3: check each row in Postgres.\n"
        "Report errors or 'All good!' if none."
    ).format(path=tmp)

    # This kicks off the plan → action → observation loop
    result = agent.run(prompt)
    return {"report": result}

