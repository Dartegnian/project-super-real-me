# agent.py
import boto3
from langchain.chat_models import Bedrock
from langchain import Tool, initialize_agent
from tools import read_excel, validate_schema, check_against_db

# Create a Bedrock LLM wrapper
bedrock = Bedrock(
    region_name="us-east-1",
    model_id="amazon.titan-text",
    client=boto3.client("bedrock-runtime")
)

# Register your tools
tools = [
    Tool(
        name="read_excel",
        func=read_excel,
        description="Load an Excel file into a DataFrame",
    ),
    Tool(
        name="validate_schema",
        func=validate_schema,
        description="Ensure the Excel has the right columns/types",
    ),
    Tool(
        name="check_against_db",
        func=check_against_db,
        description="Cross-check rows against Postgres",
    ),
]

# Build the agent
agent = initialize_agent(
    tools=tools,
    llm=bedrock,
    agent="zero-shot-react-description",
    verbose=True,
)

