import {
  CTAButton,
  NewsletterBlock,
  PageSection,
  ProductGrid,
  SectionTitle,
  TrustBadge,
  VisualImage,
} from "@/components/site";

const menu = ["Inicio", "Mis pedidos", "Mis Smoke Box", "Suscripciones", "Favoritos", "Direcciones", "Datos personales", "Medios de pago"];

export default function MiCuentaPage() {
  return (
    <>
      <PageSection>
        <div className="mb-10 flex flex-col gap-6 rounded-[3px] bg-cover bg-center p-8 shadow-ember md:p-12" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,8,7,.92), rgba(9,8,7,.45)), url('/references/mi-cuenta.png')" }}>
          <div className="flex flex-wrap items-center gap-6">
            <div className="h-28 w-28 rounded-full border-2 border-copper bg-paper" />
            <div>
              <p className="nav-text text-xs text-copper">Cliente desde 2025 · Nivel Smoke Lover</p>
              <h1 className="display-title mt-3 text-4xl text-cream md:text-6xl">Hola, Martín</h1>
              <p className="mt-2 text-muted-text">Qué bueno verte nuevamente.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="vintage-border h-fit rounded-[3px] bg-black-smoke/72 p-4">
            {menu.map((item, index) => (
              <a key={item} href={item === "Mis pedidos" ? "/mi-cuenta/pedidos" : "#"} className={`mb-2 block rounded-[3px] px-4 py-3 text-sm ${index === 0 ? "bg-petrol text-cream" : "text-muted-text hover:bg-charcoal"}`}>
                {item}
              </a>
            ))}
            <button className="mt-8 w-full border-t border-gold-aged/20 pt-5 text-left text-sm text-muted-text">Cerrar sesión</button>
          </aside>

          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ["12", "Pedidos realizados", "Ver todos"],
                ["5", "Smoke Box compradas", "Ver mis box"],
                ["18", "Favoritos", "Ver favoritos"],
                ["1.250", "Puntos acumulados", "Ver beneficios"],
              ].map(([value, label, action]) => (
                <div key={label} className="vintage-border rounded-[3px] bg-paper p-6 text-charcoal">
                  <p className="font-nav text-4xl font-bold">{value}</p>
                  <p className="mt-2 text-sm text-walnut/75">{label}</p>
                  <p className="nav-text mt-5 text-xs text-copper">{action} →</p>
                </div>
              ))}
            </div>

            <div className="vintage-border grid overflow-hidden rounded-[3px] bg-paper text-charcoal lg:grid-cols-[0.8fr_1.2fr]">
              <VisualImage src="/references/pdp.png" className="min-h-64 rounded-none border-0" />
              <div className="p-7">
                <p className="nav-text text-xs text-copper">Último pedido</p>
                <h2 className="display-title mt-3 text-3xl">Pedido #TB2847</h2>
                <p className="mt-3 text-sm text-walnut/75">17 de Julio, 2024 · Smoke Box Clásica · $59.900</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <CTAButton href="/mi-cuenta/pedidos" variant="petrol">Ver pedido</CTAButton>
                  <CTAButton href="/checkout" variant="secondary" className="!text-charcoal hover:!text-cream">Volver a comprar</CTAButton>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionTitle align="left" eyebrow="Tus favoritos" title="Listos para repetir" />
                <div className="mt-6">
                  <ProductGrid limit={3} />
                </div>
              </div>
              <div className="vintage-border rounded-[3px] bg-petrol-dark p-8">
                <h2 className="display-title text-3xl text-cream">Tu suscripción Smoke Club</h2>
                <ul className="mt-5 space-y-3 text-sm text-cream-soft/85">
                  <li>✦ 10% off en todos tus pedidos</li>
                  <li>✦ Acceso anticipado a lanzamientos</li>
                  <li>✦ Envío gratuito en Smoke Box</li>
                  <li>✦ Recetas y contenido exclusivo</li>
                </ul>
                <CTAButton href="#" className="mt-7" variant="secondary">
                  Administrar suscripción
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <TrustBadge title="Acceso anticipado" text="Enterate primero de lanzamientos." />
              <TrustBadge title="Descuentos exclusivos" text="Beneficios especiales para miembros." />
              <TrustBadge title="Recetas privadas" text="Técnicas y tips de The Bear Smoke." />
            </div>

            <SectionTitle align="left" eyebrow="Recomendado para vos" title="Sumá algo al próximo pedido" />
            <ProductGrid limit={3} />

            <div className="vintage-border rounded-[3px] bg-cover bg-center p-8" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,8,7,.92), rgba(9,8,7,.48)), url('/references/smoke-box-hero.png')" }}>
              <h2 className="display-title text-3xl text-cream">No hace falta empezar de cero.</h2>
              <p className="mt-3 text-muted-text">Repetí tu último pedido con un solo clic.</p>
              <CTAButton href="/checkout" className="mt-6">Repetir pedido</CTAButton>
            </div>
          </div>
        </div>
      </PageSection>
      <NewsletterBlock light />
    </>
  );
}
