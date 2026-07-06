import {
  CTAButton,
  EditorialBand,
  FeatureGrid,
  Hero,
  InstagramStrip,
  NewsletterBlock,
  PageSection,
  ProductGrid,
  SectionTitle,
  Steps,
  Testimonials,
  VisualImage,
} from "@/components/site";
import { brand } from "@/lib/brand";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Fuego lento · Sabor real · Hecho en Argentina"
        title="Ahumados argentinos con alma de Texas BBQ"
        subtitle="Carnes ahumadas lentamente, listas para compartir en juntadas, asados y momentos especiales."
        image="/references/BANNER-HOME.png"
      >
        <CTAButton href="/productos">Ver productos</CTAButton>
        <CTAButton href="/smoke-box" variant="secondary">
          Armar mi Smoke Box
        </CTAButton>
      </Hero>

      <PageSection tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              align="left"
              tone="paper"
              eyebrow="Nuestra filosofía"
              title="Fuego lento. Sabor real. Hecho en Argentina."
              subtitle={`En ${brand.name} combinamos la tradición del Texas BBQ con nuestra parrilla argentina. Seleccionamos cortes de calidad, los ahumamos con maderas nobles durante horas y los preparamos para que vos solo tengas que disfrutar.`}
            />
            <CTAButton href="/blog/guia-ahumado" variant="petrol" className="mt-6">
              Conocé nuestra historia
            </CTAButton>
          </div>
          <VisualImage src="/references/pdp.png" className="min-h-[360px]" label="Bondiola ahumada a cuchillo" />
        </div>
      </PageSection>

      <PageSection>
        <SectionTitle eyebrow="Seleccionados por nuestros clientes" title="Los más pedidos" />
        <div className="mt-12">
          <ProductGrid limit={3} />
        </div>
      </PageSection>

      <PageSection className="bg-petrol-dark">
        <EditorialBand
          title="Smoke Box para juntadas"
          text="Todo lo necesario para abrir, calentar y servir: carnes ahumadas, condimentos, instrucciones y packaging premium."
          image="/references/banner-01.png"
          cta="Crear mi box"
          href="/smoke-box"
        />
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Cómo funciona" title="Del humo a tu mesa" />
        <div className="mt-12">
          <Steps light />
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Recetas para compartir"
              title="Del ahumador a la mesa"
              subtitle="Historias, recetas y técnicas para sacarle el máximo provecho a nuestros cortes."
            />
            <CTAButton href="/blog" className="mt-6" variant="secondary">
              Ver nuestras recetas
            </CTAButton>
          </div>
          <FeatureGrid />
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Lo que dicen nuestros clientes" title="Experiencias reales" />
        <div className="mt-10">
          <Testimonials light />
        </div>
      </PageSection>

      <NewsletterBlock />
      <InstagramStrip />
    </>
  );
}
