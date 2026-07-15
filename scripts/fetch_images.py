#!/usr/bin/env python3
"""Busca fotos de veículos no Wikimedia Commons e baixa thumbs 960px (repo) e 500px (artifact).

O servidor de thumbs só aceita os buckets de largura listados em https://w.wiki/GHai
(250/500/960/1280...): um pedido de 900px volta como 960px.
"""
import json, os, re, ssl, sys, time, urllib.parse, urllib.request

CA = "/root/.ccr/ca-bundle.crt"
CTX = ssl.create_default_context(cafile=CA)
UA = "TuneSpecMVP/1.0 (educational demo; contact: caioxyz1701@gmail.com)"

OUT_960 = "/home/user/TuneSpec/assets/img/vehicles"
OUT_500 = os.environ.get("TS_IMG500", os.path.join(os.environ.get("TMPDIR", "/tmp"), "tunespec-img500"))
os.makedirs(OUT_960, exist_ok=True)
os.makedirs(OUT_500, exist_ok=True)

# vehicleKey -> consulta no Commons
QUERIES = {
    "mitsubishi-lancer-gt": "Mitsubishi Lancer sedan 2012",
    "mitsubishi-lancer-mt": "Mitsubishi Lancer ES sedan 2010",
    "mitsubishi-lancer-evolution-x": "Mitsubishi Lancer Evolution X 2008",
    "mitsubishi-asx": "Mitsubishi Outlander Sport",
    "mitsubishi-outlander": "Mitsubishi Outlander 2016",
    "mitsubishi-pajero-full": "Mitsubishi Pajero V80",
    "volkswagen-golf-gti": "Volkswagen Golf GTI Mk7",
    "volkswagen-jetta-gli": "Volkswagen Jetta A7 sedan",
    "volkswagen-polo-gts": "Volkswagen Polo VI 2020",
    "volkswagen-virtus-exclusive": "Volkswagen Virtus",
    "volkswagen-nivus-highline": "Volkswagen Nivus",
    "honda-civic-si-g9": "Honda Civic Si sedan 2012",
    "honda-civic-type-r": "Honda Civic Type R FK8",
    "honda-civic-touring-g10": "Honda Civic sedan 2017",
    "honda-city-touring": "Honda City (7th generation) sedan Jambi",
    "honda-hr-v-touring": "Honda HR-V 2022",
    "audi-a3-sedan": "Audi A3 sedan 8V",
    "audi-s3-sedan": "Audi S3 sedan 8V",
    "audi-rs3-sedan": "Audi RS3 sedan",
    "audi-q3": "Audi Q3 F3",
    "audi-tt-coupe": "Audi TT 2015 coupe",
    "bmw-320i": "BMW 3 Series G20",
    "bmw-m240i": "BMW M240i G42",
    "bmw-m3-competition": "BMW M3 G80",
    "bmw-118i": "BMW 1 Series F40",
    "bmw-x1-sdrive20i": "BMW X1 U11",
    "toyota-corolla-altis": "Toyota Corolla E210 sedan",
    "toyota-corolla-gr-s": "Toyota Corolla GR Sport sedan",
    "toyota-gr-supra": "Toyota Supra J29",
    "toyota-yaris-sedan": "Toyota Yaris Sedan 1.5 XLS front",
    "toyota-hilux-srx": "Toyota Hilux 2021",
    "chevrolet-onix-rs": "Chevrolet Onix 2020",
    "chevrolet-cruze-sport6": "Chevrolet Cruze hatchback 2017",
    "chevrolet-camaro-ss": "Chevrolet Camaro SS 2017",
    "chevrolet-tracker-rs": "Chevrolet Tracker 2021",
    "chevrolet-s10-high-country": "Chevrolet S10 Brasil",
    "fiat-pulse-abarth": "Fiat Pulse",
    "fiat-fastback-abarth": "Fiat Fastback 2023",
    "fiat-toro-volcano": "Fiat Toro",
    "fiat-argo-trekking": "Fiat Argo 2020 Trekking Uruguay",
    "fiat-marea-turbo": "Fiat Marea front",
    "hyundai-hb20-turbo": "Hyundai HB20 2020",
    "hyundai-creta-n-line": "Hyundai Creta 2021",
    "hyundai-veloster": "Hyundai Veloster 2013",
    "hyundai-elantra": "Hyundai Elantra AD sedan 01",
    "hyundai-i30-2-0": "Hyundai i30 GD hatchback",
    "mercedes-c180": "Mercedes-Benz C-Klasse W205 front",
    "mercedes-a200": "Mercedes-Benz A-Class W177",
    "mercedes-a45-amg": "Mercedes-AMG A 45 W177",
    "mercedes-cla250": "Mercedes-Benz CLA C118",
    "mercedes-c63-amg": "Mercedes-AMG C 63 W205",
}

BAD_WORDS = ("interior", "engine", "motor", "dashboard", "cockpit", "seat", "trunk",
             "wheel", "badge", "logo", "emblem", "rear view", "heckansicht", "innenraum",
             "police", "polizei", "policia", "polícia", "rally", "racing", "crash",
             "wreck", "taxi", "ambulance", "cutaway")

def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=30) as r:
        return json.loads(r.read().decode())

def pick(query):
    data = api({
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": "filetype:bitmap " + query, "gsrnamespace": "6", "gsrlimit": "15",
        "prop": "imageinfo", "iiprop": "url|size|extmetadata|mime",
        "iiurlwidth": "900",
    })
    pages = (data.get("query") or {}).get("pages") or {}
    cands = []
    for p in pages.values():
        ii = (p.get("imageinfo") or [{}])[0]
        w, h = ii.get("width", 0), ii.get("height", 0)
        title = p.get("title", "").lower()
        if not ii.get("thumburl") or ii.get("mime") not in ("image/jpeg",):
            continue
        if w < 900 or h < 500 or w <= h:
            continue
        if any(b in title for b in BAD_WORDS):
            continue
        ratio = w / h
        score = p.get("index", 99)
        if not (1.2 <= ratio <= 2.0):
            score += 5
        cands.append((score, p, ii))
    cands.sort(key=lambda c: c[0])
    return cands[0] if cands else None

def download(url, path):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=CTX, timeout=60) as r, open(path, "wb") as f:
        f.write(r.read())

def main(only=None):
    credits = {}
    cpath = os.path.join(OUT_960, "..", "credits.json")
    if os.path.exists(cpath):
        credits = json.load(open(cpath))
    for key, query in QUERIES.items():
        if only and key not in only:
            continue
        try:
            got = pick(query)
            if not got:
                print("MISS", key, "|", query); continue
            _, p, ii = got
            t960 = ii["thumburl"]
            t500 = re.sub(r"/\d+px-", "/500px-", t960)
            download(t960, os.path.join(OUT_960, key + ".jpg"))
            time.sleep(1)
            download(t500, os.path.join(OUT_500, key + ".jpg"))
            time.sleep(1)
            md = ii.get("extmetadata") or {}
            def gv(k): return (md.get(k) or {}).get("value", "")
            credits[key] = {
                "file": p.get("title"),
                "url": ii.get("descriptionshorturl") or ii.get("descriptionurl", ""),
                "artist": gv("Artist"), "license": gv("LicenseShortName"),
            }
            print("OK  ", key, "<-", p.get("title"))
        except Exception as e:
            print("ERR ", key, "|", e)
    json.dump(credits, open(cpath, "w"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    main(set(sys.argv[1:]) or None)
