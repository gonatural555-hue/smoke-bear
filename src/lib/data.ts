export type Product = {
  name: string;
  slug: string;
  price: string;
  category: string;
  description: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    name: "Bondiola Smoke",
    slug: "bondiola-smoke",
    price: "$15.900",
    category: "Ahumados",
    description: "Bondiola de cerdo ahumada lentamente con rub de la casa.",
    image: "/references/productos/bondiola-smoke.png",
    tag: "Más vendido",
  },
  {
    name: "Ribs Smoke",
    slug: "ribs-smoke",
    price: "$17.900",
    category: "Ribs",
    description: "Costillitas de cerdo ahumadas a baja temperatura.",
    image: "/references/productos/ribs-smoke.png",
  },
  {
    name: "Roast Smoke",
    slug: "roast-smoke",
    price: "$18.900",
    category: "Roast",
    description: "Roast beef ahumado, jugoso y listo para servir.",
    image: "/references/productos/roast-smoke.png",
    tag: "Nuevo",
  },
  {
    name: "Alitas Smoke",
    slug: "alitas-smoke",
    price: "$11.900",
    category: "Pollo",
    description: "Alitas de pollo ahumadas y glaseadas.",
    image: "/references/productos/alitas-smoke.png",
  },
  {
    name: "Chorizo Smoke",
    slug: "chorizo-smoke",
    price: "$9.900",
    category: "Embutidos",
    description: "Chorizo ahumado con toque justo de especias.",
    image: "/references/productos/chorizo-smoke.png",
  },
  {
    name: "Pastrón",
    slug: "pastron",
    price: "$19.900",
    category: "Cortes",
    description: "Pastrón ahumado, curado y especiado al estilo Texas.",
    image: "/references/catalogo.png",
    tag: "Edición limitada",
  },
];

export const smokeBoxes = [
  {
    name: "Smoke Box Clásica",
    price: "$59.900",
    serves: "4 a 6 personas",
    image: "/references/smoke-box-opciones.png",
    items: ["2 cortes de carne ahumada", "1 condimento + 1 salsa BBQ", "Viruta de madera", "Instrucciones de regeneración"],
  },
  {
    name: "Smoke Box Familiar",
    price: "$89.900",
    serves: "8 a 10 personas",
    image: "/references/smoke-box-hero.png",
    items: ["3 cortes de carne ahumada", "2 condimentos + 2 salsas BBQ", "Viruta de madera", "Tarjeta personalizada"],
    featured: true,
  },
  {
    name: "Smoke Box Premium",
    price: "$129.900",
    serves: "10 a 12 personas",
    image: "/references/smoke-box-opciones.png",
    items: ["4 cortes premium", "3 condimentos + 3 salsas BBQ", "Packaging premium", "Regalo listo para entregar"],
  },
];

export const blogPosts = [
  {
    title: "Guía completa para ahumar como un profesional",
    category: "Técnicas",
    excerpt: "Tiempos, maderas, temperatura y paciencia para dominar el fuego lento.",
    image: "/references/blog.png",
    href: "/blog/guia-ahumado",
  },
  {
    title: "Bondiola ahumada al estilo Texas",
    category: "Recetas",
    excerpt: "Jugosa, tierna y llena de sabor. El clásico que nunca falla.",
    image: "/references/productos/bondiola-smoke.png",
    href: "/blog/guia-ahumado",
  },
  {
    title: "Qué madera usar según cada corte",
    category: "Técnicas",
    excerpt: "Roble, quebracho, nogal o pecán: cuándo usar cada una.",
    image: "/references/blog.png",
    href: "/blog/guia-ahumado",
  },
  {
    title: "Maridajes que elevan la experiencia",
    category: "Maridajes",
    excerpt: "Vinos, cervezas y panes para acompañar ahumados premium.",
    image: "/references/home.png",
    href: "/blog/guia-ahumado",
  },
];

export const testimonials = [
  {
    name: "Martín González",
    location: "Barrio Smoke",
    quote: "La bondiola es increíble, súper tierna y con sabor ahumado espectacular.",
  },
  {
    name: "Florencia L.",
    location: "City Bell",
    quote: "La Smoke Box llegó impecable. Abrís, calentás y parece hecho en casa.",
  },
  {
    name: "Agustín P.",
    location: "Buenos Aires",
    quote: "Pedimos para un cumple y fue un plan distinto, abundante y premium.",
  },
];

export const orders = [
  {
    id: "#S1202847",
    date: "17 de Julio, 2024",
    status: "Entregado",
    items: "Smoke Box Clásica",
    total: "$59.900",
  },
  {
    id: "#S1202781",
    date: "2 de Julio, 2024",
    status: "En preparación",
    items: "Smoke Box Familiar",
    total: "$89.900",
  },
  {
    id: "#S1202710",
    date: "18 de Junio, 2024",
    status: "Enviado",
    items: "Ribs Smoke + Rub Original",
    total: "$49.900",
  },
  {
    id: "#S1202655",
    date: "2 de Junio, 2024",
    status: "Cancelado",
    items: "Smoke Box Premium",
    total: "$39.900",
  },
];
