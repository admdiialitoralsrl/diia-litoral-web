// Líneas de producto de Diia Litoral SRL.
// Para agregar o quitar productos, editar las listas de "grupos".

export interface Grupo {
  titulo?: string;
  items: string[];
}

export interface Linea {
  slug: string;
  nombre: string;
  imagen: string;
  resumen: string;
  descripcion: string;
  industrias: string[];
  grupos: Grupo[];
  nota?: string;
}

export const lineas: Linea[] = [
  {
    slug: "acidulantes-y-reguladores-de-acidez",
    nombre: "Acidulantes y reguladores de acidez",
    imagen: "/images/acidulantes.jpg",
    resumen: "Regulan el pH, aportan sabor ácido y ayudan a conservar el producto.",
    descripcion:
      "Los acidulantes regulan el pH del producto e inhiben el crecimiento de microorganismos, por lo que además de aportar sabor ayudan a mantener su calidad durante más tiempo.",
    industrias: ["Alimenticia", "Farmacéutica"],
    grupos: [
      {
        items: [
          "Ácido acético",
          "Ácido cítrico",
          "Ácido fosfórico 80% y 85%",
          "Ácido láctico 85%",
          "Ácido málico",
          "Ácido sórbico",
          "Ácido tartárico",
          "Citrato de sodio",
          "Lactato de sodio 60%",
        ],
      },
    ],
  },
  {
    slug: "colorante-caramelo-natural",
    nombre: "Colorante caramelo natural",
    imagen: "/images/slide-producto-colorante_0.jpg",
    resumen: "Color tostado soluble en agua, en concentración simple y doble.",
    descripcion:
      "Colorante alimentario soluble en agua, obtenido por caramelización: el tratamiento térmico controlado de carbohidratos. Lo ofrecemos en concentración simple, de menor intensidad y mayor viscosidad, y en concentración doble, de mayor poder colorante.",
    industrias: ["Alimenticia"],
    grupos: [
      {
        titulo: "Concentración simple",
        items: [
          "S-110 · Café instantáneo, bebidas alcohólicas, aperitivos, licores y amargos, esencias, panificados, galletitas, conos de helado, untables de cacao, azúcar fantasía, alimento balanceado",
          "S-195 · Bebidas sin alcohol, aperitivos y amargos, panificados, galletitas, conos de helado, esencias, lácteos, helados, dulces y mermeladas, salsas no proteicas, mostaza, alimento balanceado",
          "S-250 · Panificados, conos de helado, salsas a base de soja, aderezos, sopas, esencias, lácteos, dulces y mermeladas",
          "S-370 · Esencias, panificados, conos de helado, salsas a base de soja, aderezos, sopas, lácteos, dulces y mermeladas",
        ],
      },
      {
        titulo: "Concentración doble",
        items: [
          "D-420 · Bebidas alcohólicas, aperitivos, licores y amargos, esencias, untables de cacao, azúcar fantasía, alimento balanceado",
          "D-460 · Bebidas alcohólicas, aperitivos, licores y amargos, esencias, untables de cacao, azúcar fantasía, alimento balanceado",
          "D-474 · Bebidas con y sin alcohol, café instantáneo, esencias, lácteos, helados, dulces y mermeladas, salsas no proteicas, mostaza, azúcar fantasía, untables de cacao, alimento balanceado",
          "D-484 · Bebidas alcohólicas, aperitivos, licores y amargos, esencias, café instantáneo, untables de cacao, azúcar fantasía, alimento balanceado",
        ],
      },
    ],
  },
  {
    slug: "endulzantes-nutritivos",
    nombre: "Endulzantes",
    imagen: "/images/endulzantes.jpg",
    resumen: "Endulzantes nutritivos e intensivos para cada formulación.",
    descripcion:
      "Los endulzantes nutritivos aportan dulzor junto con calorías y nutrientes. Los intensivos endulzan con muy poca cantidad y casi sin aporte calórico, ideales para productos reducidos en azúcar.",
    industrias: ["Alimenticia", "Farmacéutica"],
    grupos: [
      {
        titulo: "Endulzantes nutritivos",
        items: [
          "Azúcar común",
          "Fructosa cristalina",
          "Jarabe de maíz de alta fructosa (JMAF 55)",
          "Jarabe mezcla de maíz",
          "Jarabe de glucosa",
          "Jarabe de alta maltosa",
          "Maltitol",
          "Miel de abejas",
        ],
      },
      {
        titulo: "Endulzantes intensivos",
        items: [
          "Acesulfame K",
          "Aspartamo",
          "Ciclamato de sodio",
          "Neohesperidina",
          "Sacarina sódica",
          "Stevia",
          "Sucralosa",
        ],
      },
    ],
  },
  {
    slug: "agentes-de-volumen-y-textura",
    nombre: "Agentes de volumen y textura",
    imagen: "/images/agentesdevolumen.jpg",
    resumen: "Dan cuerpo, volumen y la textura buscada a cada producto.",
    descripcion:
      "Ingredientes que modifican y mejoran la consistencia, el volumen y la textura de los alimentos, desde panificados hasta postres y lácteos.",
    industrias: ["Alimenticia"],
    grupos: [
      { titulo: "Almidones", items: ["Almidón de maíz", "Almidones modificados", "Almidón de mandioca"] },
      {
        titulo: "Azúcares y jarabes",
        items: [
          "Azúcar común",
          "Dextrosa monohidrato",
          "Fructosa cristalina",
          "Jarabe de azúcar invertido",
          "Jarabe de glucosa",
          "Jarabe de alta maltosa",
          "Jarabe de maíz de alta fructosa (JMAF 55)",
          "Jarabe mezcla de maíz",
          "Maltitol",
          "Sorbitol líquido 70%",
        ],
      },
      { titulo: "Sales", items: ["Cloruro de potasio", "Cloruro de sodio", "Optisal (sal reducida en sodio)"] },
      {
        titulo: "Fibras, proteínas y lácteos",
        items: [
          "Fibras insolubles",
          "Harinas de soja y soja texturizada",
          "Polidextrosa",
          "Maltodextrina de maíz",
          "Leche en polvo",
          "Suero de leche",
        ],
      },
    ],
  },
  {
    slug: "antiapelmazantes",
    nombre: "Antiapelmazantes",
    imagen: "/images/antiapelmasantes.jpg",
    resumen: "Mantienen polvos y granulados sueltos y fáciles de dosificar.",
    descripcion:
      "Aditivos que evitan que los ingredientes en polvo se aglomeren, manteniendo una textura fluida que facilita su manejo, dosificación y distribución.",
    industrias: ["Alimenticia", "Farmacéutica"],
    grupos: [{ items: ["Dióxido de silicio", "Fosfato tricálcico"] }],
  },
  {
    slug: "antioxidantes-sinteticos",
    nombre: "Antioxidantes",
    imagen: "/images/antioxidantes.jpg",
    resumen: "Frenan la oxidación y protegen color, sabor y vida útil.",
    descripcion:
      "Compuestos que se agregan a alimentos, cosméticos y productos farmacéuticos para evitar o retrasar la oxidación, que deteriora el color, el sabor y los nutrientes. Prolongan la vida útil y conservan la calidad del producto.",
    industrias: ["Alimenticia", "Farmacéutica", "Cosmética"],
    grupos: [
      {
        items: [
          "Ácido ascórbico",
          "Ácido cítrico",
          "BHA (butilhidroxianisol)",
          "BHT (butilhidroxitolueno)",
          "Metabisulfito de sodio",
          "TBHQ (terbutilhidroquinona)",
        ],
      },
    ],
  },
  {
    slug: "colorantes",
    nombre: "Colorantes",
    imagen: "/images/colorantes.jpg",
    resumen: "Colorantes naturales y sintéticos en una amplia gama de tonos.",
    descripcion:
      "Colorantes de origen natural y sintético para un amplio abanico de productos alimenticios, con una gama de tonos elaborados bajo altos estándares de calidad.",
    industrias: ["Alimenticia", "Cosmética"],
    grupos: [
      { titulo: "Sintéticos · Amarillos y anaranjados", items: ["Amarillo ocaso", "Amarillo quinolina", "Amarillo tartrazina"] },
      { titulo: "Sintéticos · Azules", items: ["Azul brillante FCF", "Azul indigotina"] },
      {
        titulo: "Sintéticos · Rojos",
        items: [
          "Rojo 33 (uso cosmético exclusivo)",
          "Rojo allura AC",
          "Rojo amaranto",
          "Rojo carmoisina",
          "Rojo eritrosina",
          "Rojo punzó 4R",
        ],
      },
      { titulo: "Sintéticos · Verdes", items: ["Verde indeleble"] },
      { titulo: "Naturales · Amarillos y naranjas", items: ["Amarillo annatto", "Amarillo de cúrcuma", "Ácido carmínico"] },
      { titulo: "Naturales · Rojos", items: ["Carmín de cochinilla"] },
      { titulo: "Naturales · Marrones", items: ["Colorante caramelo", "Extracto de malta"] },
      { titulo: "Naturales · Blanco y negro", items: ["Carbón vegetal", "Dióxido de titanio"] },
    ],
  },
  {
    slug: "emulsionantes",
    nombre: "Emulsionantes",
    imagen: "/images/emulsionantes.jpg",
    resumen: "Unen fases que no se mezclan y estabilizan la formulación.",
    descripcion:
      "Esenciales en la industria alimentaria y cosmética: permiten combinar líquidos que no se mezclan, como agua y aceite, y mejoran la estabilidad, la textura y la calidad del producto.",
    industrias: ["Alimenticia", "Cosmética"],
    grupos: [{ items: ["DATEM", "Lecitina de soja", "Monoestearato de glicerilo 90%", "PGPR", "SSL"] }],
  },
  {
    slug: "gelificantes-y-espesantes",
    nombre: "Gelificantes y espesantes",
    imagen: "/images/gelificantes.jpg",
    resumen: "Controlan la textura y la viscosidad del producto final.",
    descripcion:
      "Modifican la textura y la viscosidad. Los gelificantes dan consistencia de gel; los espesantes absorben parte del líquido y le dan al producto más cuerpo.",
    industrias: ["Alimenticia", "Farmacéutica", "Cosmética"],
    grupos: [
      {
        items: ["Almidones modificados", "CMC (carboximetilcelulosa)", "Gelatina comestible", "Goma xántica", "Goma guar", "Pectinas cítricas"],
      },
    ],
  },
  {
    slug: "humectantes",
    nombre: "Humectantes",
    imagen: "/images/humectantes.jpg",
    resumen: "Retienen la humedad y alargan la frescura del producto.",
    descripcion:
      "Ingredientes que retienen la humedad, mejoran las cualidades sensoriales y alargan la vida útil, sobre todo en panificados y otros alimentos.",
    industrias: ["Alimenticia", "Cosmética", "Farmacéutica"],
    grupos: [
      {
        items: [
          "Glicerina vegetal",
          "Humectante EB 78® para panificados",
          "Jarabe de alta maltosa",
          "Jarabe de glucosa",
          "Jarabe de maíz de alta fructosa (JMAF 55)",
          "Jarabe mezcla de maíz",
          "Propilenglicol",
          "Sorbitol líquido 70%",
        ],
      },
    ],
  },
  {
    slug: "conservantes",
    nombre: "Conservantes",
    imagen: "/images/conservantes.jpg",
    resumen: "Frenan el deterioro causado por microorganismos.",
    descripcion:
      "Aditivos que retrasan o reducen el deterioro de los alimentos causado por hongos, levaduras y bacterias, para que el producto llegue en buen estado al consumidor.",
    industrias: ["Alimenticia", "Farmacéutica", "Cosmética"],
    grupos: [
      {
        items: [
          "Ácido acético",
          "Ácido ascórbico",
          "Ácido cítrico",
          "Ácido fosfórico",
          "Ácido láctico",
          "Ácido sórbico",
          "Ácido tartárico",
          "Alcohol isopropílico",
          "Benzoato de sodio",
          "Citrato de sodio",
          "Cloruro de calcio 35% en solución",
          "Cloruro de calcio en perlas",
          "Cloruro de potasio",
          "Cloruro de sodio",
          "Fosfato disódico",
          "Gluconato de sodio",
          "Metabisulfito de sodio",
          "Propionato de calcio",
          "Sorbato de potasio",
          "Tripolifosfato de sodio",
        ],
      },
    ],
  },
];

export const waLink = (numero: string, texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
