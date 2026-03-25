import pandas as pd
import os
import pytz
import json
from datetime import datetime
from PIL import Image

polish_tz = pytz.timezone('Europe/Warsaw')
now = datetime.now(polish_tz).strftime("%d.%m.%Y, %H:%M:%S")

os.makedirs('data', exist_ok=True)

with open('data/czas.txt', 'w', encoding='utf-8') as f:
    f.write(now.replace(",", ""))

script_dir = os.path.dirname(os.path.abspath(__file__))
path = os.path.join(script_dir, "data", "cennik.xlsx")
sheet = pd.read_excel(path)

sheet = sheet.sort_values(by="ZABIEG", ascending=True)

groups = {}
for _, row in sheet.iterrows():
    zabieg = str(row['ZABIEG']).strip()
    if zabieg not in groups:
        groups[zabieg] = []
    groups[zabieg].append({
        'CZASZABIEGU': row['CZASZABIEGU'],
        'OPIS': row['OPIS'],
        'CENA': row['CENA']
    })

for zabieg in groups:
    def sort_key(x):
        cena = str(x['CENA'])
        if '+' in cena:
            return float('inf')
        try:
            return float(cena.replace(' ', '').split('-')[0].strip())
        except ValueError:
            return float('inf')
    groups[zabieg].sort(key=sort_key)

result = [{'ZABIEG': k, 'items': v} for k, v in groups.items()]

output_path = os.path.join(script_dir,"data", "cennik.json")
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)


gallery_path = os.path.join(script_dir, "gallery")
os.makedirs(gallery_path, exist_ok=True)
extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']

images = [
    f for f in os.listdir(gallery_path)
    if os.path.splitext(f)[1].lower() in extensions
]

output_gallery = os.path.join(script_dir, "data", "gallery.json")
with open(output_gallery, 'w', encoding='utf-8') as f:
    json.dump(images, f, indent=2, ensure_ascii=False)


compressed_path = os.path.join(script_dir, "gallery_compressed")
os.makedirs(compressed_path, exist_ok=True)

for filename in images:
    img = Image.open(os.path.join(gallery_path, filename))
    img.thumbnail((1920, 1080))
    if img.mode in ("RGBA", "P", "LA"):
        img = img.convert("RGB")
    img.save(os.path.join(compressed_path, filename), "JPEG", quality=70, optimize=True)

output_gallery = os.path.join(script_dir, "data", "gallery.json")
with open(output_gallery, 'w', encoding='utf-8') as f:
    json.dump(images, f, indent=2, ensure_ascii=False)
