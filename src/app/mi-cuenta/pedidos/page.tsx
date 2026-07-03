import {
  CTAButton,
  NewsletterBlock,
  PageSection,
  ProductGrid,
  SectionTitle,
  VisualImage,
} from "@/components/site";
import { orders } from "@/lib/data";

export default function MisPedidosPage() {
  return (
    <>
      <PageSection>
        <div className="mb-10 rounded-[3px] bg-cover bg-center p-8 shadow-ember md:p-14" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,8,7,.94), rgba(9,8,7,.42)), url('/references/mis-pedidos.png')" }}>
          <p className="nav-text text-xs text-copper">Inicio / Mi cuenta / Mis pedidos</p>
          <h1 className="display-title mt-4 text-5xl text-cream md:text-7xl">Mis pedidos</h1>
          <p className="mt-4 max-w-xl text-muted-text">Consultá el estado de todas tus compras y repetí tus pedidos favoritos cuando quieras.</p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            ["12", "Pedidos realizados"],
            ["8", "Pedidos entregados"],
            ["3", "Pedidos en preparación"],
            ["12 may. 2024", "Próximo envío estimado"],
          ].map(([value, label]) => (
            <div key={label} className="vintage-border rounded-[3px] bg-paper p-6 text-charcoal">
              <p className="font-nav text-3xl font-bold">{value}</p>
              <p className="mt-2 text-sm text-walnut/75">{label}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-3 rounded-[3px] border border-gold-aged/20 bg-black-smoke/55 p-4">
          {["Todos", "En preparación", "Enviado", "Entregado", "Cancelado"].map((filter, index) => (
            <button key={filter} className={`rounded-[3px] px-4 py-2 text-sm ${index === 0 ? "bg-petrol text-cream" : "bg-charcoal text-muted-text"}`}>
              {filter}
            </button>
          ))}
          <input className="ml-auto min-h-10 min-w-64 rounded-[3px] border border-gold-aged/25 bg-cream px-4 text-sm text-charcoal" placeholder="Buscar pedido o producto..." />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_390px]">
          <div>
            <SectionTitle align="left" eyebrow="Historial de pedidos" title="Tus compras" />
            <div className="mt-8 space-y-5">
              {orders.map((order, index) => (
                <article key={order.id} className="vintage-border grid gap-5 rounded-[3px] bg-paper p-5 text-charcoal shadow-card sm:grid-cols-[150px_1fr_auto]">
                  <VisualImage src={index % 2 === 0 ? "/references/pdp.png" : "/references/smoke-box-hero.png"} className="min-h-32" />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="display-title text-2xl">Pedido {order.id}</h2>
                      <span className="rounded bg-cream px-3 py-1 text-xs font-bold text-petrol">{order.status}</span>
                    </div>
                    <p className="mt-2 text-sm text-walnut/75">{order.date} · {order.items}</p>
                    <p className="mt-2 text-sm text-walnut/75">Envío a: Martín López, La Plata</p>
                  </div>
                  <div className="flex flex-col justify-between gap-3 text-right">
                    <strong className="font-nav text-xl">{order.total}</strong>
                    <CTAButton href="#" variant="secondary" size="sm" className="!text-charcoal hover:!text-cream">Ver detalle</CTAButton>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <CTAButton href="#" variant="secondary">Cargar más pedidos</CTAButton>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="vintage-border rounded-[3px] bg-black-smoke p-7">
              <p className="nav-text text-xs text-copper">Seguimiento del envío</p>
              <h2 className="display-title mt-3 text-3xl text-cream">Pedido #TB2781</h2>
              <p className="mt-2 text-sm text-muted-text">Smoke Box Familiar · En preparación</p>
              <div className="mt-6 space-y-5">
                {["Pedido confirmado", "Preparación", "Despachado", "En camino", "Entregado"].map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className={`mt-1 h-4 w-4 rounded-full ${index < 2 ? "bg-copper" : "border border-gold-aged/50"}`} />
                    <div>
                      <h3 className="nav-text text-sm text-cream">{step}</h3>
                      <p className="text-xs text-muted-text">{index === 1 ? "Estamos preparando tu pedido con mucho cuidado." : "Actualización del estado."}</p>
                    </div>
                  </div>
                ))}
              </div>
              <CTAButton href="#" className="mt-7 w-full" variant="secondary">Ver detalle completo</CTAButton>
            </div>

            <div className="vintage-border rounded-[3px] bg-cover bg-center p-7" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,8,7,.92), rgba(9,8,7,.52)), url('/references/smoke-box-hero.png')" }}>
              <h2 className="display-title text-3xl text-cream">¿Te gustó tu último pedido?</h2>
              <p className="mt-3 text-sm text-muted-text">Repetilo con un solo clic.</p>
              <CTAButton href="/checkout" className="mt-6">Volver a comprar</CTAButton>
            </div>

            <div className="vintage-border rounded-[3px] bg-paper p-7 text-charcoal">
              <h2 className="display-title text-2xl">¿Tuviste un problema?</h2>
              <p className="mt-3 text-sm text-walnut/75">Nuestro equipo está para ayudarte.</p>
              <CTAButton href="#" variant="petrol" className="mt-6">Contactar soporte</CTAButton>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <SectionTitle align="left" eyebrow="Productos más comprados" title="Tus clásicos" />
          <div className="mt-8">
            <ProductGrid limit={3} />
          </div>
        </div>
      </PageSection>
      <NewsletterBlock />
    </>
  );
}
