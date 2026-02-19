import pandas as pd
import os
import pytz
import json
from datetime import datetime

polish_tz = pytz.timezone('Europe/Warsaw')
now = datetime.now(polish_tz).strftime("%d.%m.%Y, %H:%M:%S")

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


gallery_path = os.path.join(script_dir, "gallery")
extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']

images = [
    f for f in os.listdir(gallery_path)
    if os.path.splitext(f)[1].lower() in extensions
]

output_gallery = os.path.join(script_dir, "data", "gallery.json")
with open(output_gallery, 'w', encoding='utf-8') as f:
    json.dump(images, f, indent=2, ensure_ascii=False)
