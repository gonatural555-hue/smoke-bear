import {
  CTAButton,
  EditorialBand,
  Hero,
  NewsletterBlock,
  PageSection,
  ProductGrid,
  SectionTitle,
  SmokeBoxGrid,
  VisualImage,
} from "@/components/site";

const filterGroups: Array<[string, string[]]> = [
  ["Categorías", ["Todos", "Ahumados", "Boxes", "Chorizos", "Alitas", "Ribs", "Bondiola", "Roast", "Condimentos"]],
  ["Disponibilidad", ["En stock", "Próximamente"]],
  ["Ideal para", ["Juntadas", "Regalos", "Eventos", "Familia"]],
  ["Tiempo de preparación", ["Menos de 20 min", "20 - 40 min", "Más de 40 min"]],
];

export default function ProductosPage() {
  return (
    <>
      <Hero
        eyebrow="Inicio / Productos"
        title="Nuestra selección"
        subtitle="Carnes ahumadas artesanalmente, listas para compartir con sabor profundo y presentación premium."
        image="/references/banner.png"
      />

      <PageSection>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="vintage-border h-fit rounded-[3px] bg-black-smoke/65 p-6">
            {filterGroups.map(([title, items]) => (
              <div key={title} className="border-b border-gold-aged/15 py-5 first:pt-0 last:border-0 last:pb-0">
                <h2 className="nav-text mb-4 text-xs text-cream">{title}</h2>
                <div className="space-y-3 text-sm text-muted-text">
                  {items.map((item, index) => (
                    <label key={item} className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-sm border ${index === 0 ? "border-petrol bg-petrol" : "border-gold-aged/40"}`} />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <CTAButton href="/checkout" variant="petrol" className="mt-6 w-full">
              Envíos a La Plata
            </CTAButton>
          </aside>

          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 border-b border-gold-aged/20 pb-5 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-text">Mostrando 1-12 de 32 productos</p>
              <div className="flex items-center gap-3">
                <span className="nav-text text-xs text-muted-text">Ordenar por</span>
                <button className="rounded-[3px] border border-gold-aged/30 bg-black-smoke px-4 py-2 text-sm text-cream">
                  Más vendidos
                </button>
              </div>
            </div>
            <ProductGrid />
            <div className="mt-10 text-center">
              <CTAButton href="#" variant="secondary">
                Cargar más productos
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <EditorialBand
            title="No vendemos solamente carne. Vendemos horas alrededor del fuego."
            text="Cada corte está pensado para que la juntada tenga ritual, aroma y conversación."
            image="/references/home.png"
            cta="Conocé nuestra historia"
            href="/blog/guia-ahumado"
          />
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Para compartir" title="Smoke Box para juntadas" />
        <div className="mt-12">
          <SmokeBoxGrid />
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle eyebrow="Condimentos que hacen la diferencia" title="Rub, sales y salsas" />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {["Rub Original", "Rub Spicy", "Sal Ahumada", "Salsa BBQ", "Mostaza Ahumada"].map((item) => (
            <div key={item} className="vintage-border rounded-[3px] bg-charcoal-soft p-4 text-center">
              <VisualImage src="/references/blog.png" className="min-h-28" />
              <h3 className="nav-text mt-4 text-sm text-cream">{item}</h3>
              <p className="mt-1 text-sm text-muted-text">$6.500</p>
            </div>
          ))}
        </div>
      </PageSection>

      <NewsletterBlock />
    </>
  );
}
