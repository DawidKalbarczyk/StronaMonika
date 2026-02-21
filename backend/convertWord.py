from docx import Document
from odf.opendocument import load
from odf.text import P
import json
import os

def czytaj_plik(sciezka):
    ext = os.path.splitext(sciezka)[1].lower()
    akapity = []

    if ext == ".docx":
        doc = Document(sciezka)
        for akapit in doc.paragraphs:
            print(repr(akapit.text))
            tekst = " ".join(akapit.text.split())
            if akapit.text.strip():
                akapity.append(tekst)

    elif ext == ".odt":
        doc = load(sciezka)
        for akapit in doc.text.getElementsByType(P):
            tekst = " ".join(
                node.data for node in akapit.childNodes if node.nodeType == 3
            )
            tekst = " ".join(tekst.split())  # normalizacja spacji
            if tekst.strip():
                akapity.append(tekst)

    return akapity

def czytaj_word():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    word_dir = os.path.join(script_dir, "word")

    pliki = [f for f in os.listdir(word_dir) if f.endswith((".docx", ".odt"))]
    if not pliki:
        print("Nie znaleziono plików .docx ani .odt w folderze backend/word")
        return

    wyniki = {}
    separator = "Wskazania"

    for plik in pliki:
        akapity = czytaj_plik(os.path.join(word_dir, plik))
        if not akapity:
            continue

        # Część 1: akapity pisane CAPS LOCK (przed separatorem)
        czesc_1 = [a for a in akapity if a.upper() == a]

        # Szukanie separatora
        indeks = None
        for i, akapit in enumerate(akapity):
            if separator in akapit:
                indeks = i
                break

        if indeks is None:
            print(f"Nie znaleziono '{separator}' w pliku: {plik}")
            czesc_2 = [a for a in akapity if not a.isupper()]
            czesc_3 = []
        else:
            # Część 2: tekst przed "Wskazania" (bez caps)
            czesc_2 = [a for a in akapity[:indeks] if not a.isupper()]
            # Część 3: tekst od "Wskazania" włącznie
            czesc_3 = akapity[indeks:]

        wyniki[plik] = {
            "part1": czesc_1,
            "part2": czesc_2,
            "part3": czesc_3
        }

        print(f"Odczytano: {plik}")

    output_path = os.path.join(script_dir, "data", "descriptions.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(wyniki, f, ensure_ascii=False, indent=4)

    print("Zapisano do data/wynik.json")

czytaj_word()