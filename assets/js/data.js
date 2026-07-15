/* =========================================================
   TuneSpec — Camada de dados (MVP)
   Dados mockados: marcas, veículos, upgrades, profissionais
   e comunidade. Em produção, isto vem da API.
   ========================================================= */

const TS = {};

/* ---------- Marcas ---------- */
TS.brands = [
  { id: "volkswagen", name: "Volkswagen", country: "Alemanha", mono: "VW" },
  { id: "honda",      name: "Honda",      country: "Japão",    mono: "H"  },
  { id: "audi",       name: "Audi",       country: "Alemanha", mono: "A"  },
  { id: "bmw",        name: "BMW",        country: "Alemanha", mono: "B"  },
  { id: "toyota",     name: "Toyota",     country: "Japão",    mono: "T"  },
  { id: "chevrolet",  name: "Chevrolet",  country: "EUA",      mono: "C"  },
  { id: "fiat",       name: "Fiat",       country: "Itália",   mono: "F"  },
  { id: "hyundai",    name: "Hyundai",    country: "Coreia",   mono: "HY" },
  { id: "mitsubishi", name: "Mitsubishi", country: "Japão",    mono: "M"  },
  { id: "mercedes",   name: "Mercedes",   country: "Alemanha", mono: "MB" },
];

/* ---------- Veículos ----------
   v(id, nome, ano, motor, potência, torque, 0-100, vel. máx,
     câmbio, tração, peso, consumo, fipe, indução, hue) */
function v(id, name, year, engine, power, torque, accel, top, gearbox, traction, weight, consumption, fipe, induction, hue) {
  return { id, name, year, engine, power, torque, accel, top, gearbox, traction, weight, consumption, fipe, induction, hue };
}

TS.models = {
  mitsubishi: [
    v("lancer-gt", "Lancer GT", "2012–2017", "2.0 16V MIVEC", "160 cv", "20,1 kgfm", "8,8 s", "205 km/h", "CVT 6 marchas (paddle shift)", "Dianteira", "1.395 kg", "10,9 km/l", "R$ 72.400", "aspirado", 355),
    v("lancer-mt", "Lancer MT", "2012–2015", "2.0 16V MIVEC", "160 cv", "20,1 kgfm", "8,3 s", "210 km/h", "Manual 5 marchas", "Dianteira", "1.370 kg", "11,4 km/l", "R$ 66.900", "aspirado", 355),
    v("lancer-evolution-x", "Lancer Evolution X", "2008–2015", "2.0 16V Turbo (4B11T)", "295 cv", "37,3 kgfm", "5,4 s", "242 km/h", "TC-SST 6 marchas", "Integral (S-AWC)", "1.600 kg", "8,2 km/l", "R$ 289.000", "turbo", 0),
    v("asx", "ASX", "2011–2021", "2.0 16V MIVEC", "160 cv", "20,1 kgfm", "9,6 s", "198 km/h", "CVT 6 marchas", "Dianteira / AWD", "1.450 kg", "10,2 km/l", "R$ 79.500", "aspirado", 20),
    v("outlander", "Outlander", "2013–2021", "3.0 V6 MIVEC", "240 cv", "31,0 kgfm", "8,9 s", "205 km/h", "Automático 6 marchas", "Integral (AWC)", "1.640 kg", "8,6 km/l", "R$ 132.000", "aspirado", 210),
    v("pajero-full", "Pajero Full", "2007–2021", "3.2 Diesel Turbo", "200 cv", "45,0 kgfm", "11,1 s", "180 km/h", "Automático 5 marchas", "4x4 (Super Select)", "2.325 kg", "9,0 km/l", "R$ 189.000", "turbo", 150),
  ],
  volkswagen: [
    v("golf-gti", "Golf GTI", "2014–2019", "2.0 TSI", "230 cv", "35,7 kgfm", "6,4 s", "248 km/h", "DSG 6 marchas", "Dianteira", "1.380 kg", "11,0 km/l", "R$ 139.000", "turbo", 355),
    v("jetta-gli", "Jetta GLI", "2019–2024", "2.0 TSI", "231 cv", "35,7 kgfm", "6,6 s", "250 km/h", "DSG 6 marchas", "Dianteira", "1.475 kg", "10,8 km/l", "R$ 189.000", "turbo", 0),
    v("polo-gts", "Polo GTS", "2020–2024", "1.4 TSI", "150 cv", "25,5 kgfm", "8,4 s", "203 km/h", "Automático 6 marchas", "Dianteira", "1.244 kg", "11,6 km/l", "R$ 119.000", "turbo", 20),
    v("virtus-exclusive", "Virtus Exclusive", "2023–2025", "1.4 TSI (250 TSI)", "150 cv", "25,5 kgfm", "8,7 s", "202 km/h", "Automático 6 marchas", "Dianteira", "1.280 kg", "11,3 km/l", "R$ 131.000", "turbo", 210),
    v("nivus-highline", "Nivus Highline", "2021–2025", "1.0 TSI (200 TSI)", "128 cv", "20,4 kgfm", "10,0 s", "187 km/h", "Automático 6 marchas", "Dianteira", "1.199 kg", "12,4 km/l", "R$ 129.000", "turbo", 150),
  ],
  honda: [
    v("civic-si-g9", "Civic Si (9ª ger.)", "2012–2015", "2.4 i-VTEC", "206 cv", "23,5 kgfm", "7,2 s", "220 km/h", "Manual 6 marchas", "Dianteira", "1.335 kg", "10,5 km/l", "R$ 112.000", "aspirado", 355),
    v("civic-type-r", "Civic Type R (FK8)", "2017–2021", "2.0 VTEC Turbo", "310 cv", "40,8 kgfm", "5,7 s", "272 km/h", "Manual 6 marchas", "Dianteira", "1.393 kg", "9,4 km/l", "R$ 389.000", "turbo", 0),
    v("civic-touring-g10", "Civic Touring (G10)", "2017–2021", "1.5 VTEC Turbo", "173 cv", "22,4 kgfm", "8,4 s", "210 km/h", "CVT", "Dianteira", "1.320 kg", "11,7 km/l", "R$ 129.000", "turbo", 210),
    v("city-touring", "City Touring", "2022–2025", "1.5 i-VTEC", "126 cv", "15,8 kgfm", "10,3 s", "195 km/h", "CVT", "Dianteira", "1.149 kg", "12,9 km/l", "R$ 121.000", "aspirado", 20),
    v("hr-v-touring", "HR-V Touring", "2023–2025", "1.5 Turbo", "177 cv", "24,5 kgfm", "8,5 s", "200 km/h", "CVT", "Dianteira", "1.410 kg", "11,1 km/l", "R$ 165.000", "turbo", 150),
  ],
  audi: [
    v("a3-sedan", "A3 Sedan", "2014–2020", "1.4 TFSI", "150 cv", "25,5 kgfm", "8,2 s", "224 km/h", "S tronic 7 marchas", "Dianteira", "1.260 kg", "11,8 km/l", "R$ 109.000", "turbo", 210),
    v("s3-sedan", "S3 Sedan", "2015–2020", "2.0 TFSI", "310 cv", "40,8 kgfm", "4,7 s", "250 km/h", "S tronic 7 marchas", "Integral (quattro)", "1.480 kg", "9,8 km/l", "R$ 235.000", "turbo", 355),
    v("rs3-sedan", "RS3 Sedan", "2018–2024", "2.5 TFSI (5 cil.)", "400 cv", "51,0 kgfm", "3,8 s", "280 km/h", "S tronic 7 marchas", "Integral (quattro)", "1.590 kg", "8,7 km/l", "R$ 459.000", "turbo", 0),
    v("q3", "Q3", "2020–2025", "1.4 TFSI", "150 cv", "25,5 kgfm", "9,3 s", "207 km/h", "S tronic 6 marchas", "Dianteira", "1.485 kg", "10,7 km/l", "R$ 219.000", "turbo", 20),
    v("tt-coupe", "TT Coupé", "2015–2022", "2.0 TFSI", "230 cv", "37,7 kgfm", "5,9 s", "250 km/h", "S tronic 6 marchas", "Dianteira", "1.335 kg", "10,4 km/l", "R$ 259.000", "turbo", 150),
  ],
  bmw: [
    v("320i", "320i (G20)", "2019–2025", "2.0 TwinPower Turbo", "184 cv", "30,6 kgfm", "7,2 s", "235 km/h", "Automático 8 marchas", "Traseira", "1.545 kg", "10,9 km/l", "R$ 239.000", "turbo", 210),
    v("m240i", "M240i", "2022–2025", "3.0 TwinPower Turbo (6 cil.)", "387 cv", "51,0 kgfm", "4,3 s", "250 km/h", "Automático 8 marchas", "Integral (xDrive)", "1.690 kg", "9,1 km/l", "R$ 429.000", "turbo", 355),
    v("m3-competition", "M3 Competition", "2021–2025", "3.0 Biturbo (S58)", "510 cv", "66,3 kgfm", "3,9 s", "290 km/h", "Automático 8 marchas", "Traseira", "1.730 kg", "7,8 km/l", "R$ 719.000", "turbo", 0),
    v("118i", "118i", "2020–2025", "1.5 TwinPower Turbo", "140 cv", "22,4 kgfm", "8,7 s", "213 km/h", "DCT 7 marchas", "Dianteira", "1.395 kg", "11,5 km/l", "R$ 189.000", "turbo", 20),
    v("x1-sdrive20i", "X1 sDrive20i", "2023–2025", "2.0 TwinPower Turbo", "204 cv", "30,6 kgfm", "7,4 s", "233 km/h", "DCT 7 marchas", "Dianteira", "1.575 kg", "10,2 km/l", "R$ 299.000", "turbo", 150),
  ],
  toyota: [
    v("corolla-altis", "Corolla Altis Hybrid", "2020–2025", "1.8 Híbrido", "122 cv", "16,6 kgfm", "10,8 s", "180 km/h", "CVT", "Dianteira", "1.415 kg", "17,5 km/l", "R$ 159.000", "aspirado", 210),
    v("corolla-gr-s", "Corolla GR-S", "2021–2025", "2.0 Dynamic Force", "177 cv", "21,4 kgfm", "9,2 s", "205 km/h", "CVT 10 marchas", "Dianteira", "1.390 kg", "12,1 km/l", "R$ 169.000", "aspirado", 355),
    v("gr-supra", "GR Supra", "2020–2024", "3.0 Turbo (B58)", "387 cv", "51,0 kgfm", "4,1 s", "250 km/h", "Automático 8 marchas", "Traseira", "1.495 kg", "9,3 km/l", "R$ 549.000", "turbo", 0),
    v("yaris-sedan", "Yaris Sedan XLS", "2019–2024", "1.5 16V", "110 cv", "14,9 kgfm", "11,0 s", "175 km/h", "CVT", "Dianteira", "1.115 kg", "12,8 km/l", "R$ 96.000", "aspirado", 20),
    v("hilux-srx", "Hilux SRX", "2021–2025", "2.8 Diesel Turbo", "204 cv", "50,9 kgfm", "10,3 s", "180 km/h", "Automático 6 marchas", "4x4", "2.110 kg", "9,8 km/l", "R$ 319.000", "turbo", 150),
  ],
  chevrolet: [
    v("onix-rs", "Onix RS", "2021–2025", "1.0 Turbo", "116 cv", "16,8 kgfm", "9,9 s", "185 km/h", "Automático 6 marchas", "Dianteira", "1.105 kg", "13,1 km/l", "R$ 99.000", "turbo", 355),
    v("cruze-sport6", "Cruze Sport6 RS", "2020–2023", "1.4 Turbo", "153 cv", "24,5 kgfm", "8,6 s", "205 km/h", "Automático 6 marchas", "Dianteira", "1.340 kg", "11,2 km/l", "R$ 119.000", "turbo", 20),
    v("camaro-ss", "Camaro SS", "2016–2022", "6.2 V8 (LT1)", "461 cv", "63,6 kgfm", "4,3 s", "290 km/h", "Automático 10 marchas", "Traseira", "1.671 kg", "6,9 km/l", "R$ 419.000", "aspirado", 0),
    v("tracker-rs", "Tracker RS", "2023–2025", "1.2 Turbo", "133 cv", "21,4 kgfm", "9,7 s", "195 km/h", "Automático 6 marchas", "Dianteira", "1.295 kg", "12,0 km/l", "R$ 149.000", "turbo", 210),
    v("s10-high-country", "S10 High Country", "2021–2025", "2.8 Diesel Turbo", "200 cv", "51,0 kgfm", "10,7 s", "180 km/h", "Automático 6 marchas", "4x4", "2.130 kg", "9,4 km/l", "R$ 289.000", "turbo", 150),
  ],
  fiat: [
    v("pulse-abarth", "Pulse Abarth", "2023–2025", "1.3 Turbo 270", "185 cv", "27,5 kgfm", "7,6 s", "215 km/h", "Automático 6 marchas", "Dianteira", "1.335 kg", "11,0 km/l", "R$ 159.000", "turbo", 0),
    v("fastback-abarth", "Fastback Abarth", "2023–2025", "1.3 Turbo 270", "185 cv", "27,5 kgfm", "7,5 s", "220 km/h", "Automático 6 marchas", "Dianteira", "1.362 kg", "10,8 km/l", "R$ 167.000", "turbo", 355),
    v("toro-volcano", "Toro Volcano Diesel", "2022–2025", "2.0 Turbo Diesel", "170 cv", "38,0 kgfm", "10,5 s", "185 km/h", "Automático 9 marchas", "4x4", "1.877 kg", "10,9 km/l", "R$ 189.000", "turbo", 150),
    v("argo-trekking", "Argo Trekking", "2021–2025", "1.3 Firefly", "107 cv", "13,7 kgfm", "11,5 s", "180 km/h", "Manual 5 marchas", "Dianteira", "1.132 kg", "13,2 km/l", "R$ 84.000", "aspirado", 20),
    v("marea-turbo", "Marea Turbo", "1999–2003", "2.0 20V Turbo (5 cil.)", "182 cv", "27,0 kgfm", "7,9 s", "225 km/h", "Manual 5 marchas", "Dianteira", "1.360 kg", "8,9 km/l", "R$ 39.000", "turbo", 210),
  ],
  hyundai: [
    v("hb20-turbo", "HB20 Platinum Plus 1.0T", "2023–2025", "1.0 TGDI Turbo", "120 cv", "17,5 kgfm", "9,8 s", "188 km/h", "Automático 6 marchas", "Dianteira", "1.096 kg", "13,0 km/l", "R$ 109.000", "turbo", 210),
    v("creta-n-line", "Creta N Line", "2023–2025", "1.0 TGDI Turbo", "120 cv", "17,5 kgfm", "10,6 s", "182 km/h", "Automático 6 marchas", "Dianteira", "1.280 kg", "12,2 km/l", "R$ 149.000", "turbo", 355),
    v("veloster", "Veloster 1.6 Turbo", "2013–2015", "1.6 T-GDI", "186 cv", "27,0 kgfm", "7,7 s", "214 km/h", "DCT 6 marchas", "Dianteira", "1.313 kg", "10,7 km/l", "R$ 79.000", "turbo", 0),
    v("elantra", "Elantra 2.0", "2016–2021", "2.0 16V", "167 cv", "20,6 kgfm", "9,1 s", "205 km/h", "Automático 6 marchas", "Dianteira", "1.300 kg", "11,3 km/l", "R$ 99.000", "aspirado", 20),
    v("i30-2-0", "i30 2.0", "2013–2017", "2.0 16V", "150 cv", "18,4 kgfm", "9,8 s", "195 km/h", "Automático 6 marchas", "Dianteira", "1.253 kg", "10,9 km/l", "R$ 69.000", "aspirado", 150),
  ],
  mercedes: [
    v("c180", "C 180", "2015–2021", "1.6 Turbo", "156 cv", "25,5 kgfm", "8,5 s", "225 km/h", "Automático 9 marchas", "Traseira", "1.465 kg", "10,8 km/l", "R$ 179.000", "turbo", 210),
    v("a200", "A 200", "2019–2024", "1.3 Turbo", "163 cv", "25,5 kgfm", "8,1 s", "225 km/h", "DCT 7 marchas", "Dianteira", "1.375 kg", "11,4 km/l", "R$ 219.000", "turbo", 20),
    v("a45-amg", "A 45 S AMG", "2020–2024", "2.0 Turbo (M139)", "421 cv", "51,0 kgfm", "3,9 s", "270 km/h", "DCT 8 marchas", "Integral (4MATIC+)", "1.560 kg", "8,9 km/l", "R$ 559.000", "turbo", 0),
    v("cla250", "CLA 250", "2020–2024", "2.0 Turbo", "224 cv", "35,7 kgfm", "6,3 s", "250 km/h", "DCT 7 marchas", "Dianteira", "1.480 kg", "10,3 km/l", "R$ 329.000", "turbo", 355),
    v("c63-amg", "C 63 S AMG", "2016–2021", "4.0 V8 Biturbo", "510 cv", "71,4 kgfm", "4,0 s", "290 km/h", "Automático 9 marchas", "Traseira", "1.745 kg", "7,2 km/l", "R$ 549.000", "turbo", 150),
  ],
};

/* ---------- Profissionais ---------- */
TS.professionals = [
  { id: "multi-remapped",  name: "Multi Remapped",    city: "São Paulo · SP",      rating: 4.9, reviews: 312, tags: ["Remap", "Stage 1–3", "Dyno"],          instagram: "@multiremapped",    whatsapp: "(11) 98765-4321", site: "multiremapped.com.br" },
  { id: "marino",          name: "Marino Performance", city: "Curitiba · PR",       rating: 4.8, reviews: 204, tags: ["Preparação", "Turbo", "Injeção"],      instagram: "@marinoperformance", whatsapp: "(41) 99876-5432", site: "marinoperformance.com" },
  { id: "preparadora-x",   name: "Preparadora X",      city: "Belo Horizonte · MG", rating: 4.7, reviews: 168, tags: ["Motor forjado", "Track day"],           instagram: "@preparadorax",      whatsapp: "(31) 98123-4567", site: "preparadorax.com.br" },
  { id: "boost-garage",    name: "Boost Garage",       city: "Campinas · SP",       rating: 4.8, reviews: 145, tags: ["Kit turbo", "Intercooler", "Downpipe"], instagram: "@boostgarage",       whatsapp: "(19) 99654-3210", site: "boostgarage.com.br" },
  { id: "dyno-house",      name: "Dyno House",         city: "Rio de Janeiro · RJ", rating: 4.6, reviews: 129, tags: ["Dinamômetro", "Acerto fino"],           instagram: "@dynohouse",         whatsapp: "(21) 97321-6548", site: "dynohouse.com.br" },
  { id: "apex-motorsport", name: "Apex Motorsport",    city: "Porto Alegre · RS",   rating: 4.9, reviews: 98,  tags: ["Suspensão", "Freios", "Alinhamento"],   instagram: "@apexmotorsport",    whatsapp: "(51) 98987-1234", site: "apexmotorsport.com.br" },
];

/* ---------- Upgrades de performance ----------
   Gerados por veículo: descrições se adaptam a motor
   aspirado ou turbo de fábrica. */
TS.getPerformanceStages = function (vehicle) {
  const turbo = vehicle.induction === "turbo";
  const nm = vehicle.name;

  const stages = [
    {
      id: "stage-1",
      title: "Stage 1",
      level: "Iniciante",
      levelIdx: 1,
      price: "R$ 2.000 ~ R$ 4.000",
      time: "1 a 2 dias",
      gain: turbo ? "+15% a +25% de potência" : "+8% a +12% de potência",
      description: "Primeiro nível de preparação para uso diário.",
      objective: "Melhorar resposta do motor mantendo confiabilidade e garantia de uso urbano.",
      parts: [
        { icon: "filter",  name: "Filtro de ar K&N",        desc: "Filtro esportivo lavável de alto fluxo, encaixe direto na caixa original.", price: "R$ 450" },
        { icon: "intake",  name: "Intake dimensionado",     desc: "Kit de admissão em alumínio com duto de ar frio, projetado para o " + nm + ".", price: "R$ 1.200" },
        { icon: "ecu",     name: "Remap Stage 1",           desc: "Reprogramação da ECU original com acerto em dinamômetro e datalog.", price: "R$ 1.800" },
      ],
      pros: ["multi-remapped", "marino", "dyno-house"],
    },
    {
      id: "stage-2",
      title: "Stage 2",
      level: "Intermediário",
      levelIdx: 2,
      price: "R$ 6.000 ~ R$ 12.000",
      time: "3 a 5 dias",
      gain: turbo ? "+30% a +45% de potência" : "+15% a +20% de potência",
      description: "Preparação intermediária com foco em fluxo de escape e admissão.",
      objective: "Ganho expressivo de potência com mudanças físicas no motor, mantendo dirigibilidade diária.",
      parts: turbo
        ? [
            { icon: "exhaust", name: "Downpipe + escape completo", desc: "Downpipe de alto fluxo com escape esportivo em inox 3\".", price: "R$ 3.800" },
            { icon: "turbo",   name: "Intercooler maior",          desc: "Intercooler frontal de maior volume com tubulação em alumínio.", price: "R$ 2.900" },
            { icon: "ecu",     name: "Remap Stage 2",              desc: "Acerto dedicado para o novo conjunto de fluxo, com datalog em rua e dyno.", price: "R$ 2.200" },
            { icon: "clutch",  name: "Embreagem reforçada",        desc: "Kit de embreagem organic HD para suportar o novo torque.", price: "R$ 2.400" },
          ]
        : [
            { icon: "exhaust", name: "Escape esportivo completo", desc: "Sistema completo em inox com coletor 4-2-1 dimensionado.", price: "R$ 3.500" },
            { icon: "intake",  name: "TBI de maior diâmetro",     desc: "Corpo de borboleta maior para ganho de fluxo em altas rotações.", price: "R$ 1.900" },
            { icon: "ecu",     name: "Remap Stage 2",             desc: "Acerto dedicado para o novo conjunto de fluxo, com datalog em rua e dyno.", price: "R$ 2.200" },
            { icon: "cam",     name: "Comando de válvulas leve",  desc: "Comando esportivo de perfil moderado, mantendo lenta estável.", price: "R$ 2.600" },
          ],
      pros: ["multi-remapped", "boost-garage", "marino", "dyno-house"],
    },
    {
      id: "stage-3",
      title: "Stage 3",
      level: "Avançado",
      levelIdx: 3,
      price: "R$ 15.000 ~ R$ 30.000",
      time: "1 a 3 semanas",
      gain: turbo ? "+60% a +100% de potência" : "+25% a +40% de potência",
      description: "Preparação avançada com foco em máxima performance confiável.",
      objective: "Extrair o máximo do conjunto com internos reforçados e gerenciamento dedicado.",
      parts: turbo
        ? [
            { icon: "turbo",    name: "Turbina híbrida / maior", desc: "Turbina de maior vazão com billet wheel, mantendo resposta em baixa.", price: "R$ 8.500" },
            { icon: "piston",   name: "Internos forjados",       desc: "Pistões e bielas forjadas para suportar alta pressão de turbo.", price: "R$ 9.800" },
            { icon: "injector", name: "Bicos + bomba de alta",   desc: "Injetores de maior vazão e bomba de combustível reforçada.", price: "R$ 3.200" },
            { icon: "ecu",      name: "ECU standalone FT550",    desc: "Gerenciamento programável completo com acerto em dinamômetro.", price: "R$ 6.900" },
          ]
        : [
            { icon: "cam",      name: "Comando bravo + preparação de cabeçote", desc: "Fluxo de cabeçote, válvulas e comando de alto perfil.", price: "R$ 8.900" },
            { icon: "piston",   name: "Internos forjados",       desc: "Pistões forjados de alta compressão e bielas reforçadas.", price: "R$ 9.200" },
            { icon: "intake",   name: "Coletor + TBI individual", desc: "Admissão dimensionada para regime de alta rotação.", price: "R$ 4.800" },
            { icon: "ecu",      name: "ECU standalone FT550",    desc: "Gerenciamento programável completo com acerto em dinamômetro.", price: "R$ 6.900" },
          ],
      pros: ["marino", "preparadora-x", "boost-garage", "dyno-house"],
    },
    {
      id: "projeto-turbo",
      title: "Projeto Turbo",
      level: "Avançado",
      levelIdx: 3,
      price: "R$ 18.000 ~ R$ 35.000",
      time: "2 a 4 semanas",
      gain: turbo ? "Conjunto turbo dedicado de alta potência" : "+80% a +150% de potência",
      description: turbo
        ? "Projeto turbo completo, substituindo o conjunto original por um sistema dimensionado."
        : "Conversão completa do motor aspirado para turbo, com projeto dimensionado.",
      objective: "Alta potência com confiabilidade: kit completo, internos e gerenciamento acertados juntos.",
      parts: [
        { icon: "turbo",    name: "Kit turbo completo",   desc: "Turbina, coletor, wastegate e tubulação dimensionados para o " + nm + ".", price: "R$ 12.500" },
        { icon: "turbo",    name: "Intercooler frontal",  desc: "Intercooler de alta eficiência com piping em alumínio.", price: "R$ 2.900" },
        { icon: "piston",   name: "Internos forjados",    desc: "Pistões de baixa compressão e bielas forjadas para uso com turbo.", price: "R$ 9.800" },
        { icon: "ecu",      name: "FuelTech FT550 + chicote", desc: "Injeção programável com chicote dedicado e acerto em dyno.", price: "R$ 7.800" },
      ],
      pros: ["boost-garage", "marino", "preparadora-x"],
    },
    {
      id: "projeto-aspirado",
      title: "Projeto Aspirado",
      level: "Avançado",
      levelIdx: 3,
      price: "R$ 12.000 ~ R$ 25.000",
      time: "2 a 4 semanas",
      gain: "+30% a +50% de potência em alta rotação",
      description: "Preparação aspirada de alta rotação: resposta imediata e som característico.",
      objective: "Máxima potência sem turbo: taxa alta, fluxo otimizado e regime de giro elevado.",
      parts: [
        { icon: "cam",      name: "Cabeçote preparado",      desc: "Fluxo de cabeçote, sedes e válvulas oversized com mola dupla.", price: "R$ 7.500" },
        { icon: "piston",   name: "Pistões de alta compressão", desc: "Pistões forjados com taxa elevada para resposta agressiva.", price: "R$ 6.800" },
        { icon: "intake",   name: "Admissão individual (ITB)", desc: "Corpos de borboleta individuais com filtro cônico.", price: "R$ 5.900" },
        { icon: "exhaust",  name: "Escape dimensionado",     desc: "Coletor e escape calculados para o regime de giro do projeto.", price: "R$ 3.600" },
      ],
      pros: ["preparadora-x", "marino", "dyno-house"],
    },
  ];
  return stages;
};

/* ---------- Upgrades estéticos ---------- */
TS.getAestheticCategories = function (vehicle) {
  const nm = vehicle.name;
  const compat = "Específico para " + nm;
  return [
    {
      id: "farois", name: "Faróis", icon: "headlight",
      desc: "Iluminação e assinatura frontal",
      products: [
        { icon: "headlight", name: "Farol Full LED com DRL", desc: "Conjunto óptico com assinatura em LED e projetor bi-LED.", price: "R$ 2.800", compat },
        { icon: "headlight", name: "Kit lâmpadas Ultra LED 6000K", desc: "Conversão LED com reator embutido e facho ajustado.", price: "R$ 420", compat: "Universal com adaptação" },
      ],
    },
    {
      id: "lanternas", name: "Lanternas", icon: "taillight",
      desc: "Assinatura traseira",
      products: [
        { icon: "taillight", name: "Lanterna LED fumê", desc: "Conjunto traseiro escurecido com barra de LED sequencial.", price: "R$ 1.900", compat },
        { icon: "taillight", name: "Aplique fumê traseiro", desc: "Película automotiva de alta transparência homologada.", price: "R$ 350", compat: "Universal" },
      ],
    },
    {
      id: "rodas", name: "Rodas", icon: "wheel",
      desc: "Rodas e acabamento",
      products: [
        { icon: "wheel", name: "Roda forjada aro 18 (jogo)", desc: "Roda forjada leve, furação e offset corretos para o " + nm + ".", price: "R$ 8.900", compat },
        { icon: "wheel", name: "Roda flow forming aro 17 (jogo)", desc: "Ótimo custo-benefício entre peso e resistência.", price: "R$ 4.600", compat },
      ],
    },
    {
      id: "aerofolio", name: "Aerofólio", icon: "wing",
      desc: "Aerodinâmica traseira",
      products: [
        { icon: "wing", name: "Aerofólio em ABS com pintura", desc: "Perfil discreto com fixação nos pontos originais.", price: "R$ 1.100", compat },
        { icon: "wing", name: "Ducktail em fibra", desc: "Acabamento em fibra de carbono com verniz UV.", price: "R$ 1.700", compat },
      ],
    },
    {
      id: "bodykit", name: "Bodykit", icon: "bodykit",
      desc: "Para-choques, saias e difusores",
      products: [
        { icon: "bodykit", name: "Kit saias laterais + difusor", desc: "Conjunto em ABS texturizado pronto para pintura.", price: "R$ 2.400", compat },
        { icon: "bodykit", name: "Lip dianteiro", desc: "Spoiler frontal em poliuretano flexível.", price: "R$ 890", compat },
      ],
    },
    {
      id: "suspensao", name: "Suspensão", icon: "coilover",
      desc: "Altura e comportamento",
      products: [
        { icon: "coilover", name: "Kit rosca com regulagem", desc: "Suspensão coilover com ajuste de altura e carga.", price: "R$ 5.200", compat },
        { icon: "coilover", name: "Molas esportivas (jogo)", desc: "Redução de 30–40 mm mantendo conforto aceitável.", price: "R$ 1.600", compat },
      ],
    },
    {
      id: "interior", name: "Interior", icon: "seat",
      desc: "Acabamento interno",
      products: [
        { icon: "seat", name: "Bancos esportivos (par)", desc: "Bancos semi-concha reclináveis com trilhos específicos.", price: "R$ 4.800", compat },
        { icon: "gauge", name: "Manômetros digitais", desc: "Kit boost, AFR e temperatura com visual OEM+.", price: "R$ 1.350", compat: "Universal" },
      ],
    },
  ];
};

/* ---------- Comunidade (posts seed por veículo) ---------- */
TS.getSeedPosts = function (vehicle) {
  const nm = vehicle.name;
  return [
    {
      id: "p1",
      author: "rafael.tuner", avatar: "RT", flair: "Stage 2",
      time: "há 3 horas",
      title: "Vale a pena colocar TBI de Outlander no " + nm + "?",
      body: "Estou no Stage 1 há 6 meses e pensando no próximo passo. O TBI do Outlander tem diâmetro maior e o pessoal fala muito bem do ganho em cima. Alguém aqui já fez? Sentiu diferença real ou é mais dyno queen?",
      photos: 0, likes: 48, saved: false, liked: false,
      comments: [
        { author: "gustavo_mivec", avatar: "GM", time: "há 2 horas", body: "Fiz no meu ano passado. Com remap junto vale muito a pena — sozinho o ganho é pequeno. Faz os dois de uma vez.", likes: 21 },
        { author: "ana.speed", avatar: "AS", time: "há 1 hora", body: "Concordo com o Gustavo. E procura uma oficina que faça o acerto em dyno, senão você deixa potência na mesa.", likes: 9 },
      ],
    },
    {
      id: "p2",
      author: "diego_garage", avatar: "DG", flair: "Projeto Turbo",
      time: "há 8 horas",
      title: "Meu Stage 2 ficou pronto 🔧",
      body: "Depois de 3 semanas de espera, finalmente peguei o carro na oficina. Downpipe, intercooler e remap. O carro virou outro — resposta imediata e o som ficou perfeito sem ser incômodo. Dyno marcou bem acima do esperado. Recomendo demais a Marino Performance.",
      photos: 3, likes: 132, saved: false, liked: false,
      comments: [
        { author: "pedro.jdm", avatar: "PJ", time: "há 6 horas", body: "Ficou monstro! Quanto tempo de acerto no dyno?", likes: 7 },
        { author: "diego_garage", avatar: "DG", time: "há 5 horas", body: "Um dia inteiro. Fizeram datalog na rua depois pra validar. Valeu cada centavo.", likes: 12 },
        { author: "lu.mecanica", avatar: "LM", time: "há 2 horas", body: "Posta o gráfico do dyno! 👀", likes: 4 },
      ],
    },
    {
      id: "p3",
      author: "marina.wheels", avatar: "MW", flair: "Estética",
      time: "ontem",
      title: "Qual roda vocês escolheriam?",
      body: "Entre uma forjada aro 18 e uma flow forming aro 17, pro uso diário com eventual track day. A diferença de preço é grande, mas o peso também. O que pesa mais na decisão de vocês?",
      photos: 2, likes: 76, saved: false, liked: false,
      comments: [
        { author: "caio.trackday", avatar: "CT", time: "há 20 horas", body: "Pra uso misto eu iria de flow forming 17 sem pensar. Pneu mais barato, mais conforto e aguenta bem.", likes: 18 },
      ],
    },
    {
      id: "p4",
      author: "thiago.builds", avatar: "TB", flair: "Projeto finalizado",
      time: "há 2 dias",
      title: "Meu projeto ficou finalizado — 1 ano de trabalho",
      body: "Um ano atrás comecei com o carro 100% original. Hoje: suspensão a rosca, rodas forjadas, Stage 2 completo e interior revisado. Fiz um post detalhado com todas as peças, custos reais e as oficinas que usei. Se ajudar alguém da comunidade, já valeu.",
      photos: 6, likes: 287, saved: false, liked: false,
      comments: [
        { author: "rafael.tuner", avatar: "RT", time: "há 2 dias", body: "Esse é o tipo de post que faz essa comunidade valer a pena. Salvo!", likes: 31 },
        { author: "ana.speed", avatar: "AS", time: "há 1 dia", body: "Parabéns! Quanto ficou o custo total do projeto?", likes: 8 },
      ],
    },
    {
      id: "p5",
      author: "felipe.daily", avatar: "FD", flair: "Dúvida",
      time: "há 3 dias",
      title: "Meu carro está consumindo muito, alguém já passou por isso?",
      body: "Depois do remap o consumo urbano caiu quase 2 km/l. Uso gasolina aditivada e o pé não mudou tanto assim. É normal no início ou vale voltar na oficina pra revisar o acerto?",
      photos: 0, likes: 34, saved: false, liked: false,
      comments: [
        { author: "gustavo_mivec", avatar: "GM", time: "há 3 dias", body: "Verifica se não ficou rodando rico. Um datalog rápido mostra. Acerto bom não deveria piorar consumo em uso leve.", likes: 22 },
        { author: "dyno.house.oficial", avatar: "DH", time: "há 2 dias", body: "Vale revisar sim. Traz pra um datalog que a gente confere a malha fechada. 🙌", likes: 15 },
      ],
    },
  ];
};

/* ---------- Helpers ---------- */
/* Foto real do veículo: assets/img/vehicles/<marca>-<modelo>.jpg
   (quando o arquivo não existe, a UI cai na silhueta SVG).
   window.TS_IMG_DATA permite embutir imagens como data URI (preview). */
TS.imgFor = function (brandId, model) {
  const key = brandId + "-" + model.id;
  if (window.TS_IMG_DATA && window.TS_IMG_DATA[key]) return window.TS_IMG_DATA[key];
  return "assets/img/vehicles/" + key + ".jpg";
};

TS.getBrand = (id) => TS.brands.find((b) => b.id === id);
TS.getVehicle = (brandId, modelId) => (TS.models[brandId] || []).find((m) => m.id === modelId);
TS.getPro = (id) => TS.professionals.find((p) => p.id === id);

window.TS = TS;
