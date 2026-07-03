import {
  BlogGrid,
  CTAButton,
  Hero,
  NewsletterBlock,
  PageSection,
  SectionTitle,
  VisualImage,
} from "@/components/site";

export default function GuiaAhumadoPage() {
  return (
    <>
      <Hero
        eyebrow="Técnicas · Fuego lento"
        title="Guía completa para ahumar como un profesional"
        subtitle="Una introducción editorial a tiempos, maderas y temperatura para lograr cortes tiernos y sabor profundo."
        image="/references/blog-articulo.png"
      />

      <PageSection tone="paper">
        <div className="grid gap-10 lg:grid-cols-[180px_1fr_320px]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-3">
              {["Compartir", "Guardar", "Imprimir"].map((item) => (
                <button key={item} className="vintage-border w-full rounded-[3px] bg-paper px-4 py-3 nav-text text-xs text-charcoal">
                  {item}
                </button>
              ))}
            </div>
          </aside>

          <article className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wider prose-headings:text-charcoal prose-p:text-walnut/80">
            <p className="lead text-xl leading-8 text-walnut/80">
              Ahumar no es apurar una cocción. Es construir capas de sabor con fuego bajo, madera justa y paciencia.
            </p>
            <h2>El fuego como ingrediente</h2>
            <p>
              En The Bear Smoke trabajamos con temperaturas estables y humo limpio. La idea no es tapar el sabor de la carne, sino acompañarlo con notas de madera, especias y una textura tierna.
            </p>
            <blockquote className="border-l-4 border-copper bg-cream p-6 text-2xl font-bold text-charcoal">
              El secreto no está en más humo, sino en mejor humo durante el tiempo correcto.
            </blockquote>
            <h2>Maderas recomendadas</h2>
            <p>
              Para cortes de cerdo usamos maderas nobles con intensidad media. Para piezas más grandes, una mezcla con quebracho aporta carácter sin volverse invasiva.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {["Roble", "Nogal", "Quebracho"].map((wood) => (
                <div key={wood} className="vintage-border rounded-[3px] bg-paper p-5">
                  <h3>{wood}</h3>
                  <p>Perfil cálido, ideal para carnes ahumadas de cocción lenta.</p>
                </div>
              ))}
            </div>
            <h2>Paso a paso básico</h2>
            <ol>
              <li>Prepará el corte con sal, pimienta, ajo y rub seco.</li>
              <li>Mantené fuego bajo y estable, evitando humo blanco denso.</li>
              <li>Controlá temperatura interna y dejá descansar antes de cortar.</li>
              <li>Regenerá suavemente antes de servir si el producto está envasado.</li>
            </ol>
            <VisualImage src="/references/blog.png" className="my-10 min-h-[360px]" />
            <h2>Cómo llevarlo a la mesa</h2>
            <p>
              Serví con pan artesanal, chimichurri suave, pickles, papas rústicas o una copa de Malbec. El objetivo es que el ahumado sea el centro, no un ingrediente más.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="vintage-border rounded-[3px] bg-charcoal p-6 text-cream">
              <h2 className="display-title text-2xl">Probá nuestros ahumados</h2>
              <p className="mt-3 text-sm leading-6 text-muted-text">
                Recibí cortes listos para regenerar y compartir sin cocinar durante horas.
              </p>
              <CTAButton href="/productos" className="mt-6">
                Comprar ahora
              </CTAButton>
            </div>
            <VisualImage src="/references/pdp.png" className="min-h-80" />
          </aside>
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle eyebrow="También puede interesarte" title="Más historias del fuego" />
        <div className="mt-12">
          <BlogGrid />
        </div>
      </PageSection>

      <NewsletterBlock />
    </>
  );
}
