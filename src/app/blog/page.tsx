import {
  BlogGrid,
  CTAButton,
  Hero,
  InstagramStrip,
  NewsletterBlock,
  PageSection,
  SectionTitle,
  VisualImage,
} from "@/components/site";

const categories = ["Todos", "Recetas", "Técnicas", "Consejos", "Cortes", "Maridajes", "Historias"];

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="The Bear Blog"
        title="Historias alrededor del fuego"
        subtitle="Recetas, técnicas y consejos para sacar el máximo provecho a tus ahumados."
        image="/references/banner.png"
      />

      <PageSection tone="paper" className="pb-0">
        <div className="grid gap-3 md:grid-cols-7">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`vintage-border rounded-[3px] px-4 py-5 text-center nav-text text-xs ${index === 0 ? "bg-petrol text-cream" : "bg-paper text-charcoal"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </PageSection>

      <PageSection tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="nav-text text-xs text-copper">Artículo destacado</p>
            <h2 className="display-title mt-4 text-4xl leading-tight text-charcoal">
              Guía completa para ahumar como un profesional
            </h2>
            <p className="mt-5 text-base leading-7 text-walnut/75">
              Todo lo que necesitás saber sobre tiempos, maderas, temperatura y paciencia.
            </p>
            <CTAButton href="/blog/guia-ahumado" variant="petrol" className="mt-7">
              Leer más
            </CTAButton>
          </div>
          <VisualImage src="/references/blog.png" className="min-h-[360px]" />
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Últimos artículos" title="Recetas, técnicas y maridajes" />
        <div className="mt-12">
          <BlogGrid />
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="#" variant="secondary" className="!text-charcoal hover:!text-cream">
            Ver todos los artículos
          </CTAButton>
        </div>
      </PageSection>

      <NewsletterBlock />
      <InstagramStrip />
    </>
  );
}
