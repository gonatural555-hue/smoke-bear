import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { blogPosts, products, smokeBoxes, testimonials, type Product } from "@/lib/data";
import { MobileMenu } from "@/components/mobile-menu";

type Tone = "dark" | "paper";

export function Header() {
  const links = [
    ["Inicio", "/"],
    ["Productos", "/productos"],
    ["Smoke Box", "/smoke-box"],
    ["Blog", "/blog"],
    ["Nosotros", "#nosotros"],
    ["Contacto", "#contacto"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gold-aged/20 bg-black-smoke/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <SiteLogo className="h-16 w-16" framed={false} />
          <span className="hidden text-xs uppercase tracking-[0.32em] text-muted-text group-hover:text-cream xl:block">
            The Bear Smoke
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="nav-text text-[11px] text-cream-soft/80 transition hover:text-copper"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton href="/checkout" size="sm">
            Hacer pedido
          </CTAButton>
          <CTAButton href="/mi-cuenta" variant="secondary" size="sm" className="hidden sm:inline-flex">
            Mi cuenta
          </CTAButton>
          <Link href="/checkout" className="relative ml-2 text-2xl text-cream">
            🛒
            <span className="absolute -right-2 -top-1 grid h-4 w-4 place-items-center rounded-full bg-copper text-[10px] font-bold text-cream">
              3
            </span>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function SiteLogo({ className = "h-16 w-16", framed = true }: { className?: string; framed?: boolean }) {
  return (
    <span
      className={`block overflow-hidden ${
        framed ? "rounded-full border-2 border-copper bg-black-smoke shadow-ember" : ""
      } ${className}`}
      aria-label="The Bear Smoke"
    >
      <Image src="/references/logo.png" alt="The Bear Smoke" width={160} height={160} className="h-full w-full object-cover" priority />
    </span>
  );
}

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-gold-aged/20 bg-black-smoke text-cream-soft">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-12 md:grid-cols-[1.2fr_2fr] lg:px-10">
        <div>
          <SiteLogo className="mb-4 h-20 w-20" />
          <p className="max-w-sm text-sm leading-7 text-muted-text">
            Ahumados argentinos con alma de Texas BBQ. Hecho para compartir alrededor del fuego.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-4">
          <FooterColumn title="Navegación" items={["Inicio", "Productos", "Smoke Box", "Blog", "Nosotros"]} />
          <FooterColumn title="Mi cuenta" items={["Mis pedidos", "Mi Smoke Box", "Suscripciones", "Favoritos"]} />
          <FooterColumn title="Atención al cliente" items={["Preguntas frecuentes", "Envíos y entregas", "Cambios", "Términos"]} />
          <div>
            <h3 className="nav-text mb-4 text-xs text-cream">Hablá con nosotros</h3>
            <p className="space-y-2 text-sm text-muted-text">
              <span className="block">221 123 4567</span>
              <span className="block">@thebear.smoke</span>
              <span className="block">La Plata, Buenos Aires</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-site border-t border-gold-aged/15 px-5 py-5 text-center text-xs text-muted-text lg:px-10">
        © 2026 The Bear Smoke. Demo visual para presentación.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="nav-text mb-4 text-xs text-cream">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-text">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function CTAButton({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "petrol";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const base =
    "nav-text inline-flex items-center justify-center gap-3 rounded-[3px] border font-bold transition";
  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };
  const variants = {
    primary: "border-copper bg-copper text-cream hover:border-copper-dark hover:bg-copper-dark",
    secondary: "border-copper/70 bg-transparent text-cream hover:bg-copper hover:text-cream",
    petrol: "border-petrol bg-petrol text-cream hover:bg-petrol-dark",
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <span aria-hidden>→</span>
    </Link>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: Tone;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="nav-text mb-3 text-xs text-copper">{eyebrow}</p> : null}
      <h2 className={`display-title text-3xl leading-tight md:text-5xl ${tone === "dark" ? "text-cream" : "text-charcoal"}`}>
        {title}
      </h2>
      <OrnamentalDivider className={align === "center" ? "mx-auto" : ""} />
      {subtitle ? (
        <p className={`mt-4 text-base leading-7 ${tone === "dark" ? "text-muted-text" : "text-walnut/75"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`my-4 flex max-w-xs items-center gap-3 text-gold-aged ${className}`}>
      <span className="h-px flex-1 bg-gold-aged/45" />
      <span className="text-sm">✦</span>
      <span className="h-px flex-1 bg-gold-aged/45" />
    </div>
  );
}

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`nav-text inline-flex rounded-[2px] bg-copper px-3 py-1 text-[10px] text-cream ${className}`}>
      {children}
    </span>
  );
}

export function VisualImage({
  src,
  className = "",
  label,
}: {
  src?: string;
  className?: string;
  label?: string;
}) {
  const style: CSSProperties = src
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(9,8,7,.30), rgba(9,8,7,.78)), url("${src}")`,
      }
    : {};

  return (
    <div
      className={`image-grain vintage-border min-h-64 overflow-hidden rounded-[3px] bg-[radial-gradient(circle_at_35%_25%,rgba(182,90,50,.38),transparent_14rem),linear-gradient(135deg,#2A1B14,#090807)] bg-cover bg-center shadow-card ${className}`}
      style={style}
    >
      {label ? (
        <div className="flex h-full min-h-64 items-end p-6">
          <span className="nav-text rounded border border-cream/20 bg-black-smoke/70 px-4 py-2 text-xs text-cream">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  return (
    <article className="group vintage-border overflow-hidden rounded-[3px] bg-charcoal-soft/88 shadow-card transition hover:-translate-y-1 hover:border-copper/70">
      <VisualImage src={product.image} className={compact ? "min-h-40" : "min-h-56"} />
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="nav-text text-xs text-copper">{product.category}</p>
          {product.tag ? <Badge>{product.tag}</Badge> : null}
        </div>
        <h3 className="display-title text-xl text-cream">{product.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-muted-text">{product.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <strong className="font-nav text-lg text-cream">{product.price}</strong>
          <CTAButton href={product.slug === "bondiola-smoke" ? "/producto/bondiola-smoke" : "/checkout"} size="sm">
            Agregar
          </CTAButton>
        </div>
      </div>
    </article>
  );
}

export function SmokeBoxCard({ box }: { box: (typeof smokeBoxes)[number] }) {
  return (
    <article className={`vintage-border overflow-hidden rounded-[3px] bg-paper text-charcoal shadow-card ${box.featured ? "ring-2 ring-copper" : ""}`}>
      <VisualImage src={box.image} className="min-h-56" />
      <div className="p-6">
        {box.featured ? <Badge className="mb-3">Más vendida</Badge> : null}
        <p className="nav-text text-xs text-copper">Smoke Box</p>
        <h3 className="display-title mt-2 text-2xl text-charcoal">{box.name.replace("Smoke Box ", "")}</h3>
        <p className="mt-1 text-sm font-bold text-petrol">Ideal para {box.serves}</p>
        <ul className="mt-5 space-y-3 text-sm text-walnut/80">
          {box.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-copper">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between gap-4">
          <strong className="font-nav text-xl">{box.price}</strong>
          <CTAButton href="/smoke-box/opciones" size="sm">
            Ver detalle
          </CTAButton>
        </div>
      </div>
    </article>
  );
}

export function TrustBadge({ title, text }: { title: string; text: string }) {
  return (
    <div className="vintage-border rounded-[3px] bg-black-smoke/55 p-6 text-center">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-copper/50 text-copper">✦</div>
      <h3 className="nav-text text-sm text-cream">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-text">{text}</p>
    </div>
  );
}

export function NewsletterBlock({ light = false }: { light?: boolean }) {
  return (
    <section className={`${light ? "paper-texture" : "bg-petrol-dark"} border-y border-gold-aged/20`}>
      <div className="mx-auto grid max-w-site items-center gap-6 px-5 py-8 md:grid-cols-[1fr_1.3fr] lg:px-10">
        <div>
          <h2 className={`display-title text-2xl ${light ? "text-charcoal" : "text-cream"}`}>
            Recibí lanzamientos, promos y recetas
          </h2>
          <p className={`mt-2 text-sm ${light ? "text-walnut/75" : "text-cream-soft/75"}`}>
            Sumate a nuestra comunidad y recibí beneficios exclusivos.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            aria-label="Email"
            placeholder="Tu email"
            className="min-h-12 flex-1 rounded-[3px] border border-gold-aged/30 bg-cream px-4 text-sm text-charcoal outline-none"
          />
          <CTAButton href="#" className="min-h-12">
            Suscribirme
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export function InstagramStrip({ light = true }: { light?: boolean }) {
  return (
    <section className={light ? "paper-texture" : "bg-charcoal"}>
      <div className="mx-auto max-w-site px-5 py-10 lg:px-10">
        <SectionTitle title="Seguinos en Instagram" eyebrow="@thebear.smoke" tone={light ? "paper" : "dark"} />
        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <VisualImage key={index} src={index % 2 === 0 ? "/references/home.png" : "/references/blog.png"} className="min-h-24" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  const style: CSSProperties = image
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(9,8,7,.94), rgba(9,8,7,.74) 42%, rgba(9,8,7,.28)), url("${image}")`,
      }
    : {};

  return (
    <section className="noise-overlay min-h-[560px] border-b border-gold-aged/20 bg-charcoal-texture bg-cover bg-center" style={style}>
      <div className={`mx-auto flex min-h-[560px] max-w-site items-center px-5 py-20 lg:px-10 ${align === "center" ? "justify-center text-center" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow ? <p className="nav-text mb-4 text-xs text-copper">{eyebrow}</p> : null}
          <h1 className="display-title text-5xl leading-[0.98] text-cream md:text-7xl lg:text-8xl">{title}</h1>
          <OrnamentalDivider className={align === "center" ? "mx-auto" : ""} />
          <p className="max-w-xl text-base leading-8 text-cream-soft/85 md:text-lg">{subtitle}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  const features = [
    ["Ahumado artesanal", "Maderas argentinas y cocción lenta."],
    ["Envasado al vacío", "Listo para conservar sabor y jugosidad."],
    ["Hecho en Argentina", "Texas BBQ adaptado a nuestra mesa."],
    ["Listo para compartir", "Regenerás, servís y disfrutás."],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {features.map(([title, text]) => (
        <TrustBadge key={title} title={title} text={text} />
      ))}
    </div>
  );
}

export function Steps({ light = false }: { light?: boolean }) {
  const steps = [
    ["Elegí tus productos", "Explorá cortes, boxes y condimentos."],
    ["Armás tu pedido", "Seleccioná el formato para tu ocasión."],
    ["Coordinás entrega", "Elegís día y horario disponible."],
    ["Lo servís y compartís", "Calentás, abrís y disfrutás."],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map(([title, text], index) => (
        <div key={title} className={`vintage-border rounded-[3px] p-7 text-center ${light ? "bg-paper text-charcoal" : "bg-black-smoke/55"}`}>
          <span className="mx-auto mb-4 grid h-9 w-9 place-items-center rounded-full bg-petrol text-sm font-bold text-cream">
            {index + 1}
          </span>
          <h3 className="nav-text text-sm">{title}</h3>
          <p className={`mt-3 text-sm leading-6 ${light ? "text-walnut/75" : "text-muted-text"}`}>{text}</p>
        </div>
      ))}
    </div>
  );
}

export function Testimonials({ light = false }: { light?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((item) => (
        <article key={item.name} className={`vintage-border rounded-[3px] p-6 ${light ? "bg-paper text-charcoal" : "bg-charcoal-soft"}`}>
          <p className="text-copper">★★★★★</p>
          <p className={`mt-4 text-sm leading-7 ${light ? "text-walnut/80" : "text-muted-text"}`}>
            &ldquo;{item.quote}&rdquo;
          </p>
          <div className="mt-5">
            <strong className="nav-text text-sm">{item.name}</strong>
            <p className="text-xs text-copper">{item.location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProductGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.slice(0, limit).map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

export function SmokeBoxGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {smokeBoxes.map((box) => (
        <SmokeBoxCard key={box.name} box={box} />
      ))}
    </div>
  );
}

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {blogPosts.map((post) => (
        <Link
          key={post.title}
          href={post.href}
          className="vintage-border group overflow-hidden rounded-[3px] bg-paper text-charcoal shadow-card transition hover:-translate-y-1"
        >
          <VisualImage src={post.image} className="min-h-48" />
          <div className="p-5">
            <Badge>{post.category}</Badge>
            <h3 className="display-title mt-4 text-xl leading-tight">{post.title}</h3>
            <p className="mt-3 text-sm leading-6 text-walnut/75">{post.excerpt}</p>
            <p className="nav-text mt-5 text-xs text-copper">Leer más →</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function PageSection({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <section className={`${tone === "paper" ? "paper-texture" : "charcoal-panel"} ${className}`}>
      <div className="mx-auto max-w-site px-5 py-16 lg:px-10 lg:py-24">{children}</div>
    </section>
  );
}

export function EditorialBand({
  title,
  text,
  image,
  cta,
  href = "#",
}: {
  title: string;
  text: string;
  image: string;
  cta: string;
  href?: string;
}) {
  return (
    <div className="vintage-border grid overflow-hidden rounded-[3px] bg-black-smoke shadow-card lg:grid-cols-[1fr_1.2fr]">
      <div className="p-8 lg:p-12">
        <h2 className="display-title text-3xl leading-tight text-cream md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted-text">{text}</p>
        <CTAButton href={href} className="mt-7">
          {cta}
        </CTAButton>
      </div>
      <VisualImage src={image} className="min-h-80 rounded-none border-0" />
    </div>
  );
}
