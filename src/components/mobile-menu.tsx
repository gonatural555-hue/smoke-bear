"use client";

import Link from "next/link";
import { useState } from "react";

const mobileLinks = [
  ["Inicio", "/"],
  ["Productos", "/productos"],
  ["Brisket", "/producto/brisket-smoke"],
  ["Smoke Box", "/smoke-box"],
  ["Opciones Smoke Box", "/smoke-box/opciones"],
  ["Blog", "/blog"],
  ["Guía Ahumado", "/blog/guia-ahumado"],
  ["Mi Cuenta", "/mi-cuenta"],
  ["Mis Pedidos", "/mi-cuenta/pedidos"],
  ["Checkout", "/checkout"],
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        className="nav-text inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-copper/70 text-lg text-cream transition hover:bg-copper"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen ? (
        <nav className="absolute right-0 top-12 w-[min(82vw,320px)] overflow-hidden rounded-[3px] border border-gold-aged/25 bg-black-smoke shadow-ember">
          {mobileLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="nav-text block border-b border-gold-aged/15 px-5 py-4 text-xs text-cream-soft transition last:border-0 hover:bg-charcoal-soft hover:text-copper"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
