import pandas as pd
import os

from datetime import datetime


now = datetime.now().strftime("%d.%m.%Y, %H:%M:%S")

os.makedirs('data', exist_ok=True)

with open('data/czas.txt', 'w', encoding='utf-8') as f:
    f.write(now.replace(",", ""))

script_dir = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(script_dir, "data", "cennik.xlsx")
sheet = pd.read_excel(path)

sheet = sheet.sort_values(by="CENA", ascending=True)

output_path = os.path.join(script_dir,"data", "cennik.json")
sheet.to_json(
    output_path,
    orient="records",
    force_ascii=False,
    indent=2
)
