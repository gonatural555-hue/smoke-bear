import { CTAButton, NewsletterBlock, PageSection, TrustBadge, VisualImage } from "@/components/site";

const fields = ["Nombre", "Apellido", "Email", "Teléfono", "Dirección", "Ciudad", "Provincia", "Código postal"];

export default function CheckoutPage() {
  return (
    <>
      <PageSection>
        <div className="mb-10 rounded-[3px] border border-gold-aged/20 bg-black-smoke p-8 shadow-ember md:p-14">
          <p className="nav-text text-xs text-copper">Carrito / Checkout / Confirmación</p>
          <h1 className="display-title mt-4 text-5xl text-cream md:text-7xl">Finalizar pedido</h1>
          <p className="mt-4 max-w-xl text-muted-text">Estás a un paso de disfrutar una experiencia The Bear Smoke.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_430px]">
          <form className="space-y-6">
            <CheckoutPanel number="1" title="Datos personales">
              <div className="grid gap-4 md:grid-cols-2">
                {fields.slice(0, 4).map((field) => (
                  <TextField key={field} label={field} placeholder={`Ej: ${field === "Email" ? "martin@email.com" : field}`} />
                ))}
              </div>
            </CheckoutPanel>

            <CheckoutPanel number="2" title="Entrega">
              <div className="grid gap-4 md:grid-cols-2">
                {["Envío a domicilio", "Retiro en punto"].map((item, index) => (
                  <label key={item} className={`vintage-border rounded-[3px] p-5 ${index === 0 ? "border-copper bg-cream" : "bg-paper"}`}>
                    <span className="nav-text text-sm text-charcoal">{item}</span>
                    <p className="mt-2 text-sm text-walnut/70">{index === 0 ? "Recibí tu pedido en la dirección elegida." : "Retirá tu pedido en nuestro punto de entrega."}</p>
                  </label>
                ))}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {fields.slice(4).map((field) => (
                  <TextField key={field} label={field} placeholder={`Ej: ${field}`} />
                ))}
              </div>
              <p className="mt-4 rounded-[3px] bg-cream px-4 py-3 text-sm text-walnut/70">
                Envíos en La Plata y alrededores. Consultá cobertura.
              </p>
            </CheckoutPanel>

            <CheckoutPanel number="3" title="Fecha de entrega">
              <div className="grid gap-4 md:grid-cols-2">
                <TextField label="Fecha de entrega" placeholder="Seleccioná una fecha" />
                <TextField label="Horario preferido" placeholder="Seleccioná un horario" />
              </div>
              <label className="mt-4 block">
                <span className="mb-2 block text-sm font-bold text-charcoal">Notas para el pedido</span>
                <textarea className="min-h-28 w-full rounded-[3px] border border-walnut/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none" placeholder="Indicaciones especiales, referencias, etc." />
              </label>
            </CheckoutPanel>

            <CheckoutPanel number="4" title="Método de pago">
              <div className="grid gap-4 md:grid-cols-4">
                {["Tarjeta", "Transferencia", "Mercado Pago", "Efectivo"].map((method, index) => (
                  <label key={method} className={`vintage-border rounded-[3px] p-4 text-center nav-text text-xs ${index === 0 ? "border-copper bg-cream text-charcoal" : "bg-paper text-walnut/70"}`}>
                    {method}
                  </label>
                ))}
              </div>
              <p className="mt-4 text-xs text-walnut/60">Tu información está protegida. Usamos conexión segura SSL.</p>
            </CheckoutPanel>
          </form>

          <aside className="vintage-border sticky top-28 h-fit rounded-[3px] bg-paper p-7 text-charcoal shadow-card">
            <h2 className="display-title text-3xl">Resumen del pedido</h2>
            <div className="mt-6 space-y-5">
              {[
                ["Bondiola Smoke", "$24.900", "1 kg"],
                ["Ribs Smoke", "$29.900", "800 g"],
                ["Smoke Box Familiar", "$89.900", "Ideal para 4 a 6 personas"],
              ].map(([name, price, meta], index) => (
                <div key={name} className="grid grid-cols-[74px_1fr_auto] gap-4 border-b border-walnut/10 pb-4">
                  <VisualImage src={index === 2 ? "/references/smoke-box-hero.png" : "/references/pdp.png"} className="min-h-20" />
                  <div>
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-walnut/65">{meta}</p>
                    <p className="text-xs text-walnut/50">Cant: 1</p>
                  </div>
                  <strong>{price}</strong>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <Line label="Subtotal" value="$144.700" />
              <Line label="Envío" value="$4.900" />
              <Line label="Descuentos" value="-$10.000" />
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-walnut/15 pt-6">
              <span className="nav-text text-sm">Total</span>
              <strong className="font-nav text-3xl">$139.600</strong>
            </div>
            <CTAButton href="#" size="lg" className="mt-7 w-full bg-black-smoke hover:bg-copper-dark">
              Confirmar pedido
            </CTAButton>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {["Producción artesanal", "Pago seguro", "Entrega refrigerada", "Hecho en Argentina"].map((item) => (
                <div key={item} className="rounded-[3px] border border-walnut/15 p-3 text-center text-xs font-bold text-walnut/70">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-12 rounded-[3px] bg-cover bg-center p-8" style={{ backgroundImage: "linear-gradient(90deg, rgba(9,8,7,.92), rgba(9,8,7,.48)), url('/references/smoke-box-hero.png')" }}>
          <h2 className="display-title text-4xl text-cream">No cocinás durante horas. Solo abrís, calentás y compartís.</h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <TrustBadge title="Entrega programada" text="Elegí día y horario para recibir." />
          <TrustBadge title="Atención personalizada" text="Te acompañamos antes y después." />
          <TrustBadge title="Calidad garantizada" text="Los mejores cortes ahumados llegan a tiempo." />
        </div>
      </PageSection>
      <NewsletterBlock light />
    </>
  );
}

function CheckoutPanel({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="vintage-border rounded-[3px] bg-paper p-6 text-charcoal shadow-card">
      <h2 className="nav-text mb-5 text-sm text-copper">
        {number}. {title}
      </h2>
      {children}
    </section>
  );
}

function TextField({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-charcoal">{label}</span>
      <input className="min-h-12 w-full rounded-[3px] border border-walnut/15 bg-cream px-4 text-sm text-charcoal outline-none" placeholder={placeholder} />
    </label>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-walnut/70">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
