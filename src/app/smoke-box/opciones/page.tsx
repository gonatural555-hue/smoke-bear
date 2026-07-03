import {
  Hero,
  NewsletterBlock,
  PageSection,
  SectionTitle,
  SmokeBoxGrid,
  Steps,
  Testimonials,
  TrustBadge,
  VisualImage,
} from "@/components/site";

export default function SmokeBoxOpcionesPage() {
  return (
    <>
      <Hero
        eyebrow="Elegí tu experiencia"
        title="Nuestras Smoke Box"
        subtitle="Tres opciones, el mismo fuego lento que nos define."
        image="/references/smoke-box-opciones.png"
        align="center"
      />

      <PageSection tone="paper">
        <SmokeBoxGrid />
        <p className="mt-6 text-center text-sm text-walnut/70">
          Envíos en La Plata y alrededores · Consultá por otras zonas.
        </p>
      </PageSection>

      <PageSection>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Hacela única"
              title="Personalizá tu Smoke Box"
              subtitle="Sumá cortes premium, elegí condimentos, agregá una tarjeta y prepará un regalo con impronta artesanal."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Más carnes", "Más sabor", "Mensaje especial", "Packaging regalo"].map((item) => (
                <TrustBadge key={item} title={item} text="Ajustá la experiencia según la ocasión." />
              ))}
            </div>
          </div>
          <VisualImage src="/references/smoke-box-opciones.png" className="min-h-[420px]" label="Caja personalizada" />
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Cómo funciona" title="Simple, premium y listo para compartir" />
        <div className="mt-12">
          <Steps light />
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle eyebrow="Beneficios que hacen la diferencia" title="Carne de verdad, fuego de verdad" />
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {["Carne seleccionada", "Ahumado lento", "Calidad garantizada", "Envasado al vacío", "Experiencia premium"].map((item) => (
            <TrustBadge key={item} title={item} text="Pensado para servir fácil y lucirse en la mesa." />
          ))}
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Lo que dicen nuestros clientes" title="Juntadas con humo real" />
        <div className="mt-10">
          <Testimonials light />
        </div>
      </PageSection>

      <NewsletterBlock />
    </>
  );
}
