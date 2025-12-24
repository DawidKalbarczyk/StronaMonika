import pandas as pd
import os

path = os.path.join(os.path.abspath(__file__),"..", "data", "cennik.xlsx")
sheet = pd.read_excel(path)

"""
print(sheet)
columns = []
for kolumna in sheet.columns:
    columns.append(kolumna)

names = []
descriptions = []
prices = []
for record in sheet.to_records():
    names.append(record[1])
    descriptions.append(record[2])
    prices.append(float(record[3].astype(float)))
print(names)
print(descriptions)
print(prices)
"""

sheet.to_json(
    os.path.join(os.path.abspath(__file__),"..", "..", "frontend", "public", "data", "cennik.json"),
    orient="records",
    force_ascii=False,
    indent=2
)