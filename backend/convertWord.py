from docx import Document
from odf.opendocument import load
from odf.text import P
from odf import teletype
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
            tekst = teletype.extractText(akapit)
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

    for plik in pliki:
        akapity = czytaj_plik(os.path.join(word_dir, plik))
        if not akapity:
            continue

        # Część 1: akapity pisane CAPS LOCK
        czesc_1 = [a for a in akapity if a.upper() == a and a.strip()]

        # Szukanie separatorów
        indeks_przebieg = None
        indeks_wskazania = None
        indeks_bezwzgledne = None
        indeks_wskazowki = None

        for i, akapit in enumerate(akapity):
            if "Przebieg" in akapit and indeks_przebieg is None:
                indeks_przebieg = i
            if "Wskazania" in akapit and indeks_wskazania is None:
                indeks_wskazania = i
            if "Bezwzględne" in akapit and indeks_bezwzgledne is None:
                indeks_bezwzgledne = i
            if "Wskazówki po zabiegu" in akapit and indeks_wskazowki is None:
                indeks_wskazowki = i

        # Część 2: tekst DO "Przebieg" (bez caps)
        if indeks_przebieg is not None:
            czesc_2 = [a for a in akapity[:indeks_przebieg] if not a.isupper()]
        else:
            czesc_2 = [a for a in akapity if not a.isupper()]

        # Część 3: od "Przebieg" DO "Wskazania"
        if indeks_przebieg is not None and indeks_wskazania is not None:
            czesc_3 = akapity[indeks_przebieg:indeks_wskazania]
        elif indeks_przebieg is not None:
            czesc_3 = akapity[indeks_przebieg:]
        else:
            czesc_3 = []

        # Część 4: od "Wskazania" DO "Bezwzględne"
        if indeks_wskazania is not None and indeks_bezwzgledne is not None:
            czesc_4 = akapity[indeks_wskazania:indeks_bezwzgledne]
        elif indeks_wskazania is not None:
            czesc_4 = akapity[indeks_wskazania:]
        else:
            czesc_4 = []

        # Część 5: od "Bezwzględne" DO "Wskazówki po zabiegu"
        if indeks_bezwzgledne is not None and indeks_wskazowki is not None:
            czesc_5 = akapity[indeks_bezwzgledne:indeks_wskazowki]
        elif indeks_bezwzgledne is not None:
            czesc_5 = akapity[indeks_bezwzgledne:]
        else:
            czesc_5 = []

        # Część 6: od "Wskazówki po zabiegu" do końca
        if indeks_wskazowki is not None:
            czesc_6 = akapity[indeks_wskazowki:]
        else:
            czesc_6 = []

        wyniki[plik] = {
            "part1": czesc_1,
            "part2": czesc_2,
            "part3": czesc_3,
            "part4": czesc_4,
            "part5": czesc_5,
            "part6": czesc_6
        }

        print(f"Odczytano: {plik}")
        print(f"  Part1 (CAPS): {len(czesc_1)} akapitów")
        print(f"  Part2 (do Przebieg): {len(czesc_2)} akapitów")
        print(f"  Part3 (Przebieg): {len(czesc_3)} akapitów")
        print(f"  Part4 (Wskazania): {len(czesc_4)} akapitów")
        print(f"  Part5 (Bezwzględne): {len(czesc_5)} akapitów")
        print(f"  Part6 (Wskazówki): {len(czesc_6)} akapitów")

    output_path = os.path.join(script_dir, "data", "descriptions.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(wyniki, f, ensure_ascii=False, indent=4)

    print(f"\nZapisano do {output_path}")

czytaj_word()