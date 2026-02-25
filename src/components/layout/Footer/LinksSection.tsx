import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "empresa",
    children: [
      {
        id: 11,
        label: "sobre nosotros",
        url: "#",
      },
      {
        id: 12,
        label: "nuestra historia",
        url: "#",
      },
      {
        id: 13,
        label: "tiendas",
        url: "#",
      },
      {
        id: 14,
        label: "trabaja con nosotros",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "ayuda",
    children: [
      {
        id: 21,
        label: "atención al cliente",
        url: "#",
      },
      {
        id: 22,
        label: "detalles de envío",
        url: "#",
      },
      {
        id: 23,
        label: "términos y condiciones",
        url: "#",
      },
      {
        id: 24,
        label: "política de privacidad",
        url: "#",
      },
    ],
  },
  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "mi cuenta",
        url: "#",
      },
      {
        id: 32,
        label: "seguir pedido",
        url: "#",
      },
      {
        id: 33,
        label: "pedidos",
        url: "#",
      },
      {
        id: 34,
        label: "pagos",
        url: "#",
      },
    ],
  },
  {
    id: 4,
    title: "productos",
    children: [
      {
        id: 41,
        label: "Compression",
        url: "/shop#compression",
      },
      {
        id: 42,
        label: "shorts",
        url: "/shop#shorts",
      },
      {
        id: 43,
        label: "Accesorios",
        url: "/shop#accesorios",
      },
      {
        id: 44,
        label: "oversize",
        url: "/shop#oversize",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-black/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
