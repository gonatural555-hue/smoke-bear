import {
  CTAButton,
  Hero,
  NewsletterBlock,
  PageSection,
  SectionTitle,
  Steps,
  TrustBadge,
  VisualImage,
} from "@/components/site";
import { brand } from "@/lib/brand";

export default function SmokeBoxPage() {
  return (
    <>
      <Hero
        eyebrow="Experiencias para regalar o compartir"
        title="Smoke Box para compartir"
        subtitle="La experiencia Texas BBQ adaptada a la tradición argentina. Envasado al vacío, listo en 15 minutos."
        image="/references/banner-01.png"
      >
        <CTAButton href="/smoke-box/opciones">Crear mi Smoke Box</CTAButton>
        <CTAButton href="/smoke-box/opciones" variant="secondary">
          Ver opciones
        </CTAButton>
      </Hero>

      <PageSection tone="paper">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <VisualImage src="/references/smoke-box-hero.png" className="min-h-[430px]" />
          <div>
            <SectionTitle
              tone="paper"
              align="left"
              eyebrow="Qué incluye"
              title="Todo lo necesario para disfrutar sin preocupaciones."
              subtitle="Cortes ahumados seleccionados, condimentos, instrucciones de regeneración, envasado al vacío y packaging premium."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Carnes ahumadas", "Condimentos y salsa BBQ", "Tarjeta personalizada", "Opción de regalo"].map((item) => (
                <div key={item} className="vintage-border rounded-[3px] bg-cream/60 p-4 text-sm font-bold text-walnut">
                  ✦ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Ideal para" title="Juntadas, cumpleaños, regalos y eventos" />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            ["Juntadas", "Compartí un momento único con amigos y familia."],
            ["Cumpleaños", "Un regalo diferente para quien disfruta comer bien."],
            ["Regalos", "Sorprendé con una experiencia gourmet."],
            ["Eventos", `Llevá el sabor de ${brand.name} a reuniones.`],
          ].map(([title, text]) => (
            <div key={title} className="vintage-border rounded-[3px] bg-paper p-8 text-center text-charcoal">
              <h3 className="display-title text-2xl">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-walnut/75">{text}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid gap-6 md:grid-cols-4">
          <TrustBadge title="Ahumado lento" text="Más de 12 horas de fuego bajo." />
          <TrustBadge title="Hecho en Argentina" text="Cortes locales y técnica cuidada." />
          <TrustBadge title="Envasado al vacío" text="Sabor protegido hasta servir." />
          <TrustBadge title="Producción artesanal" text="Cada box se arma con detalle." />
        </div>
      </PageSection>

      <PageSection>
        <div className="vintage-border min-h-[460px] rounded-[3px] bg-cover bg-center p-8 shadow-ember md:p-14" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,8,7,.9), rgba(9,8,7,.48)), url('/references/smoke-box-hero.png')" }}>
          <div className="max-w-2xl">
            <h2 className="display-title text-4xl leading-tight text-cream md:text-6xl">
              No regalás una caja. Regalás una experiencia.
            </h2>
            <p className="mt-5 text-base leading-8 text-cream-soft/80">
              Una mesa compartida, aromas de humo, cortes tiernos y el ritual de servir algo especial.
            </p>
            <CTAButton href="/checkout" className="mt-8">
              Comprar como regalo
            </CTAButton>
          </div>
        </div>
      </PageSection>

      <PageSection tone="paper">
        <SectionTitle tone="paper" eyebrow="Cómo funciona" title="Elegís, personalizás y compartís" />
        <div className="mt-12">
          <Steps light />
        </div>
      </PageSection>

      <NewsletterBlock />
    </>
  );
}
