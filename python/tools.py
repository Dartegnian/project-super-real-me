# tools.py
import pandas as pd
import psycopg2

def read_excel(path: str) -> pd.DataFrame:
    """Load an Excel file into a DataFrame."""
    return pd.read_excel(path)

def validate_schema(df: pd.DataFrame, schema: dict) -> list[str]:
    """Ensure required columns/types exist."""
    errors = []
    for col, expected in schema.items():
        if col not in df.columns:
            errors.append(f"Missing column: {col}")
        elif not pd.api.types.is_dtype_equal(df[col].dtype, expected):
            errors.append(f"Column {col} is {df[col].dtype}, expected {expected}")
    return errors

def check_against_db(rows: list[dict], conn_info: dict) -> list[str]:
    """Cross‑check each row against Postgres."""
    conn = psycopg2.connect(**conn_info)
    cur = conn.cursor()
    errs = []
    for i, row in enumerate(rows, start=1):
        cur.execute(
            "SELECT 1 FROM mytable WHERE id = %s AND status = %s",
            (row["id"], row["status"])
        )
        if cur.fetchone() is None:
            errs.append(f"Row {i}: no match for id={row['id']}")
    conn.close()
    return errs

