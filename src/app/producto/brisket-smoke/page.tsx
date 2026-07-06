import {
  Badge,
  CTAButton,
  FeatureGrid,
  NewsletterBlock,
  PageSection,
  ProductGrid,
  SectionTitle,
  Testimonials,
  VisualImage,
} from "@/components/site";
import { brand } from "@/lib/brand";
import { products } from "@/lib/data";

const brisketImage =
  products.find((product) => product.slug === "brisket-smoke")?.image ?? "/references/productos/brisket-smoke.png";

export default function BrisketSmokePage() {
  return (
    <>
      <PageSection className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-[92px_1fr]">
            <div className="hidden space-y-3 md:block">
              {Array.from({ length: 5 }).map((_, index) => (
                <VisualImage key={index} src={brisketImage} className="min-h-20" />
              ))}
            </div>
            <VisualImage src={brisketImage} className="min-h-[560px]" label="Zoom · Vista 360°" />
          </div>

          <aside className="vintage-border h-fit rounded-[3px] bg-black-smoke/72 p-8">
            <p className="nav-text text-xs text-copper">Inicio / Productos / Brisket</p>
            <h1 className="display-title mt-5 text-5xl leading-none text-cream md:text-7xl">Brisket</h1>
            <p className="mt-4 text-base leading-7 text-muted-text">
              La mejor carne vacuna, ahumada lentamente durante 10 horas. Sabor profundo y textura que se deshace.
            </p>
            <p className="mt-4 text-copper">★★★★★ <span className="text-sm text-muted-text">4.9 · 128 reseñas</span></p>
            <p className="mt-5 font-nav text-4xl font-bold text-cream">$24.900</p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Artesanal", "10 h de ahumado", "Argentina", "Al vacío"].map((item) => (
                <div key={item} className="vintage-border rounded-[3px] p-3 text-center text-xs text-muted-text">
                  <span className="nav-text text-cream">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="nav-text mb-3 text-xs text-muted-text">Peso</h2>
              <div className="flex flex-wrap gap-3">
                {["500 g", "1 kg", "2 kg"].map((item, index) => (
                  <button key={item} className={`rounded-[3px] border px-5 py-3 text-sm ${index === 0 ? "border-copper bg-copper text-cream" : "border-gold-aged/30 text-muted-text"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-y border-gold-aged/20 py-5">
              <span className="nav-text text-xs text-muted-text">Cantidad</span>
              <div className="flex items-center rounded-[3px] border border-gold-aged/30">
                <button className="px-4 py-2">−</button>
                <span className="border-x border-gold-aged/30 px-5 py-2">1</span>
                <button className="px-4 py-2">+</button>
              </div>
            </div>

            <CTAButton href={brand.whatsapp} size="lg" className="mt-6 w-full">
              Pedir por WhatsApp
            </CTAButton>
            <CTAButton href="/smoke-box" variant="secondary" size="lg" className="mt-3 w-full">
              Comprar Smoke Box
            </CTAButton>
            <p className="mt-5 text-sm text-muted-text">Envíos a todo Buenos Aires · Listo en 15 minutos</p>
          </aside>
        </div>
      </PageSection>

      <PageSection>
        <FeatureGrid />
      </PageSection>

      <PageSection tone="paper">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              tone="paper"
              align="left"
              eyebrow="Nuestro proceso"
              title="Sabor profundo, ternura intensa."
              subtitle="Seleccionamos el mejor brisket vacuno y lo ahumamos lentamente con maderas nobles y especias naturales."
            />
            <VisualImage src={brisketImage} className="mt-8 min-h-72" />
          </div>
          <div className="vintage-border rounded-[3px] bg-cream/60 p-7">
            <h2 className="nav-text mb-5 text-sm text-copper">Especificaciones</h2>
            {[
              ["Peso", "500 g / 1 kg / 2 kg"],
              ["Cocción", "10 horas de ahumado lento"],
              ["Ingredientes", "Carne vacuna, sal, pimienta, ajo y especias naturales"],
              ["Conservación", "Envasado al vacío. Conservar refrigerado entre 0° y 5°C"],
              ["Preparación", "Listo para calentar y servir en 15 minutos"],
              ["Origen", "Buenos Aires, Argentina"],
            ].map(([key, value]) => (
              <div key={key} className="grid gap-2 border-b border-walnut/10 py-4 text-sm sm:grid-cols-[180px_1fr]">
                <strong className="nav-text text-walnut">{key}</strong>
                <span className="text-walnut/75">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle align="left" eyebrow="Cómo prepararlo" title="Abrís, calentás, cortás y servís" />
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {["Sacá del frío", "Calentá", "Cortá", "Serví y disfrutá"].map((item) => (
                <div key={item} className="vintage-border rounded-[3px] p-5 text-center">
                  <h3 className="nav-text text-sm text-cream">{item}</h3>
                  <p className="mt-3 text-xs leading-5 text-muted-text">Un paso simple para mantener jugosidad y aroma ahumado.</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle align="left" eyebrow="Maridajes que potencian" title="Vino, pan y chimichurri" />
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              {["Malbec", "IPA", "Pan artesanal", "Chimichurri"].map((item) => (
                <div key={item} className="vintage-border rounded-[3px] bg-black-smoke/50 p-5 text-center">
                  <Badge>{item}</Badge>
                  <p className="mt-4 text-xs leading-5 text-muted-text">Acompañamiento ideal para elevar el sabor.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle eyebrow="También te puede gustar" title="Otros ahumados" />
        <div className="mt-10">
          <ProductGrid limit={3} />
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Lo que dicen nuestros clientes" title="4.9 de valoración" />
        <div className="mt-10">
          <Testimonials light />
        </div>
      </PageSection>

      <div className="sticky bottom-0 z-40 border-t border-gold-aged/25 bg-black-smoke/95 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-site flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="nav-text text-sm text-cream">Brisket</h2>
            <p className="text-xs text-muted-text">500 g</p>
          </div>
          <div className="flex items-center gap-5">
            <strong className="font-nav text-xl text-cream">$24.900</strong>
            <CTAButton href={brand.whatsapp}>Pedir por WhatsApp</CTAButton>
          </div>
        </div>
      </div>

      <NewsletterBlock />
    </>
  );
}
