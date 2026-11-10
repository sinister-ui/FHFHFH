import { useState } from "react";
import { Check, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionBadge } from "@/components/landing/section-badge";
import heroImg from "@/assets/hero-couple.webp";
import ctaImg from "@/assets/cta-couple.webp";
import productImg from "@/assets/product-mockup.webp";
import bonusImg from "@/assets/bonus-flatlay.webp";

const CHECKOUT_HREF = "#oferta";

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:py-5">
        <span className="font-serif text-base tracking-wide text-foreground sm:text-lg">
          El Código <span className="italic text-primary">de la Reconexión</span>
        </span>
        <a
          href={CHECKOUT_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-md shadow-primary/20 transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
        >
          Quiero empezar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Pareja adulta compartiendo un momento íntimo y cálido en casa, iluminados por una luz dorada cálida"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/40" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <SectionBadge>Para parejas que sienten que algo cambió</SectionBadge>
        <h1 className="mt-6 font-serif text-3xl leading-tight text-secondary-foreground sm:text-5xl sm:leading-[1.15]">
          ¿Y si su relación no necesitara otro comienzo… sino una <span className="italic text-primary">nueva forma de encontrarse</span>?
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-secondary-foreground/85 sm:text-lg">
          A veces, el amor sigue ahí. Lo que cambia es la manera de hablarse, escucharse y sentirse cerca.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-sm text-secondary-foreground/70 sm:text-base">
          Descubre las 3 distancias que pueden estar debilitando tu relación y aprende, con un método práctico de 7 días, cómo empezar a transformar esa dinámica.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <a
            href={CHECKOUT_HREF}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-xl shadow-black/20 transition hover:opacity-90 sm:w-auto sm:text-base"
          >
            Quiero descubrir cómo volver a conectar <ArrowRight className="h-4 w-4" />
          </a>
          <span className="text-xs text-secondary-foreground/60">Acceso digital inmediato · Pago único</span>
        </div>
      </div>
    </section>
  );
}

function Identificacion() {
  const cards = [
    { t: "Las conversaciones perdieron su magia.", d: "Hablan de lo cotidiano, pero las charlas que antes los conectaban casi no aparecen." },
    { t: "Están juntos, pero emocionalmente parecen lejos.", d: "Comparten el mismo espacio y, aun así, sienten una distancia que no saben nombrar." },
    { t: "Los pequeños gestos de cariño desaparecieron.", d: "Esos detalles que antes eran naturales ahora parecen un esfuerzo que nadie hace." },
    { t: "Hablar de los problemas se volvió complicado.", d: "Cada intento de conversar termina en silencio, defensa o cansancio mutuo." },
    { t: "Extrañas la complicidad que antes existía.", d: "Esa sensación de equipo, de entenderse sin explicar tanto, se fue quedando atrás." },
  ];
  return (
    <section className="border-t border-border/60 bg-card/50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <SectionBadge>¿Te suena familiar?</SectionBadge>
        <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-4xl">
          Tal vez siguen juntos… pero ya no se sienten tan cerca como antes.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((c, i) => (
            <div
              key={c.t}
              className={`rounded-2xl border border-border/60 bg-background p-6 text-left shadow-sm ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <p className="font-serif text-lg text-foreground">{c.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-sm text-muted-foreground sm:text-base">
          Porque no siempre es la falta de amor lo que crea distancia. A veces, son pequeñas desconexiones que se acumulan con el tiempo.
        </p>
      </div>
    </section>
  );
}

function Mecanismo() {
  const distancias = [
    {
      n: "I",
      t: "Distancia emocional",
      d: "Cuando las emociones se guardan en lugar de compartirse, y cada uno empieza a sentirse más solo frente a lo que vive.",
      e: "Aparece como indiferencia, respuestas cortas o la sensación de que ‘ya no me cuenta lo que le pasa’.",
    },
    {
      n: "II",
      t: "Distancia comunicativa",
      d: "Cuando hablar se vuelve difícil, y las conversaciones importantes se postergan o terminan en malentendidos.",
      e: "Aparece como discusiones repetidas, silencios incómodos o la sensación de hablar sin ser escuchado.",
    },
    {
      n: "III",
      t: "Distancia afectiva",
      d: "Cuando el contacto físico y los gestos de cariño cotidiano empiezan a escasear poco a poco.",
      e: "Aparece como menos abrazos, menos palabras cálidas o la sensación de ser compañeros antes que pareja.",
    },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <SectionBadge>El mapa de las 3 distancias</SectionBadge>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-2xl text-foreground sm:text-4xl">
            No toda distancia se manifiesta de la misma manera. Y entenderla puede cambiar la forma en que enfrentas tu relación.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {distancias.map((item) => (
            <div key={item.n} className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-7 shadow-sm">
              <span className="font-serif text-5xl text-primary/50">{item.n}</span>
              <h3 className="mt-4 font-serif text-xl text-foreground">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="text-xs uppercase tracking-wide text-primary">Cómo aparece</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.e}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Producto() {
  const beneficios = [
    "Reconocer las tres distancias que pueden estar presentes en tu relación.",
    "Identificar patrones de comunicación que se repiten sin darte cuenta.",
    "Comprender mejor tus propias emociones frente a la relación.",
    "Aprender nuevas maneras de expresar lo que sientes.",
    "Crear oportunidades reales de proximidad en el día a día.",
    "Trabajar pequeños cambios de rutina que suman con el tiempo.",
  ];
  return (
    <section className="border-t border-border/60 bg-card/50 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2 sm:items-center">
        <img
          src={productImg}
          alt="El Código de la Reconexión mostrado en tablet y celular, estilo flat lay sobre lino crema con detalles dorados"
          className="aspect-square w-full rounded-3xl object-cover shadow-xl"
          loading="lazy"
        />
        <div>
          <SectionBadge>El método</SectionBadge>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-4xl">Conoce El Código de la Reconexión</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Una guía práctica de 7 días para comprender lo que está pasando en tu relación y empezar a construir nuevas formas de conexión.
          </p>
          <ul className="mt-6 space-y-3">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {b}
              </li>
            ))}
          </ul>
          <a
            href={CHECKOUT_HREF}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
          >
            Quiero empezar los 7 días <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Materiales() {
  const items = [
    {
      tag: "Producto principal",
      t: "El Código de la Reconexión",
      d: "El método central de 7 días: comprende las tres distancias y empieza a trabajar en tu relación con pasos claros y aplicables.",
      img: productImg,
      alt: "El Código de la Reconexión en tablet y celular",
    },
    {
      tag: "Bónus 1",
      t: "21 Conversaciones que Acercan",
      d: "Un conjunto de conversaciones pensadas para abrir espacios de cercanía real, útiles para complementar cada fase del método.",
      img: bonusImg,
      alt: "Composición de materiales de apoyo del método",
    },
    {
      tag: "Bónus 2",
      t: "Momentos de Conexión",
      d: "Ideas simples para crear instancias de cercanía dentro de la rutina diaria, sin necesidad de grandes cambios.",
      img: bonusImg,
      alt: "Material de apoyo Momentos de Conexión",
    },
    {
      tag: "Bónus 3",
      t: "Tu Plan de 7 Días",
      d: "Una hoja de ruta clara para acompañarte día por día mientras avanzas en el método principal.",
      img: bonusImg,
      alt: "Plan de 7 días del método",
    },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <SectionBadge>Todo lo incluido</SectionBadge>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-4xl">
            Todo lo que necesitas para dar el primer paso está aquí.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.t} className="overflow-hidden rounded-3xl border border-border/60 bg-card/60 shadow-sm">
              <img src={it.img} alt={it.alt} className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-primary">{it.tag}</p>
                <h3 className="mt-2 font-serif text-xl text-foreground">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const dias = [
    { d: "Día 1", t: "Reconoce", x: "Identifica en qué punto está tu relación hoy, sin juzgarte por ello." },
    { d: "Día 2", t: "Comprende", x: "Entiende cuál de las tres distancias pesa más en tu caso." },
    { d: "Día 3", t: "Escucha", x: "Practica una escucha más atenta, incluso en conversaciones cortas." },
    { d: "Día 4", t: "Comunica", x: "Empieza a expresar lo que sientes con palabras más claras." },
    { d: "Día 5", t: "Acércate", x: "Busca pequeños momentos de cercanía dentro de la rutina." },
    { d: "Día 6", t: "Practica", x: "Repite lo aprendido y observa qué cambia en la dinámica diaria." },
    { d: "Día 7", t: "Continúa", x: "Define cómo sostener estos cambios más allá de la primera semana." },
  ];
  return (
    <section className="border-t border-border/60 bg-card/50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <SectionBadge>El proceso</SectionBadge>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-4xl">
            No necesitas cambiarlo todo de un día para otro.
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {dias.map((item, i) => (
            <div key={item.d} className="flex gap-5 rounded-2xl border border-border/60 bg-background p-5">
              <div className="flex flex-shrink-0 flex-col items-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-serif text-sm text-primary">
                  {i + 1}
                </span>
                {i < dias.length - 1 && <span className="mt-1 h-full w-px bg-border/70" />}
              </div>
              <div className="pb-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.d}</p>
                <h3 className="mt-1 font-serif text-lg text-foreground">{item.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.x}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diferenciacion() {
  const puntos = [
    "Método organizado en siete días, fácil de seguir.",
    "El mapa de las tres distancias como guía central.",
    "Ejercicios de reflexión para entender lo que sientes.",
    "Orientaciones prácticas, no solo teoría.",
    "Recursos para facilitar conversaciones difíciles.",
    "Un plan de continuidad para sostener lo aprendido.",
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="text-center">
          <SectionBadge>Por qué es distinto</SectionBadge>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-2xl text-foreground sm:text-4xl">
            No necesitas más consejos que suenan bonitos, sino herramientas que puedas llevar a la práctica.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {puntos.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/60 p-5">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground/90">{p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
          <p className="font-serif text-lg text-foreground">
            “No necesitas que tu pareja participe para comenzar.”
          </p>
        </div>
      </div>
    </section>
  );
}

function Oferta() {
  const items = [
    "El Código de la Reconexión",
    "21 Conversaciones que Acercan",
    "Momentos de Conexión",
    "Tu Plan de 7 Días",
  ];
  return (
    <section id="oferta" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-5 text-center">
        <SectionBadge className="text-primary">Empieza hoy</SectionBadge>
        <h2 className="mt-5 font-serif text-2xl text-secondary-foreground sm:text-4xl">
          Empieza a comprender lo que está pasando. Un paso a la vez.
        </h2>
        <div className="mt-8 rounded-3xl border border-primary/40 bg-secondary-foreground/[0.04] p-7 sm:p-10">
          <ul className="space-y-3 text-left">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm text-secondary-foreground/90 sm:text-base">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {it}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-secondary-foreground/15 pt-8">
            <p className="font-serif text-4xl text-primary sm:text-5xl">$29.900 COP</p>
            <p className="mt-2 text-sm text-secondary-foreground/70">Un solo pago. Sin mensualidades.</p>
          </div>
          <a
            href={CHECKOUT_HREF}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-xl shadow-black/30 transition hover:opacity-90 sm:text-base"
          >
            Quiero acceder a todo por $29.900 COP
          </a>
          <p className="mt-4 text-xs text-secondary-foreground/60">Acceso digital después de confirmar tu compra.</p>
        </div>
      </div>
    </section>
  );
}

function Garantia() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-serif text-3xl text-primary">7</div>
        <h2 className="font-serif text-2xl text-foreground sm:text-4xl">Tu compra cuenta con 7 días de garantía.</h2>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Conoce el método con tranquilidad. Si después de revisar el material consideras que no es lo que esperabas, podrás solicitar el reembolso dentro del plazo establecido, conforme a las condiciones aplicables.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "¿Cómo recibo el material?", a: "Después de confirmar tu compra recibes acceso digital de inmediato para descargar o consultar el método desde cualquier dispositivo." },
    { q: "¿Es un curso o un libro digital?", a: "Es una guía práctica digital organizada en 7 días, pensada para leer y aplicar a tu propio ritmo." },
    { q: "¿Necesito que mi pareja participe?", a: "No. Puedes empezar por tu cuenta; el método está diseñado para que avances aunque tu pareja aún no se involucre." },
    { q: "¿Puedo acceder desde mi celular?", a: "Sí, el material es completamente accesible desde celular, tablet o computador." },
    { q: "¿El pago es único?", a: "Sí. Es un solo pago de $29.900 COP, sin mensualidades ni cobros adicionales." },
    { q: "¿El método garantiza que mi relación se salve?", a: "No. Ningún método puede garantizar ese resultado, porque depende de ambas personas. Lo que sí ofrece es un camino claro para comprender la situación y empezar a trabajar en la reconexión." },
    { q: "¿Qué pasa si no es para mí?", a: "Cuentas con 7 días de garantía para solicitar el reembolso conforme a las condiciones aplicables." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border/60 bg-card/50 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-5">
        <div className="text-center">
          <SectionBadge>Preguntas frecuentes</SectionBadge>
          <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-4xl">Antes de empezar</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => (
            <div key={f.q} className="rounded-2xl border border-border/60 bg-background">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open === idx}
              >
                <span className="font-medium text-foreground">{f.q}</span>
                <ChevronDown className={`h-4 w-4 flex-shrink-0 text-primary transition-transform duration-200 ${open === idx ? "rotate-180" : ""}`} />
              </button>
              {open === idx && <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaImg}
          alt="Pareja caminando de la mano hacia la luz dorada, de espaldas, en un momento de calma y esperanza"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <h2 className="font-serif text-2xl text-secondary-foreground sm:text-4xl">
          A veces, el primer paso para volver a encontrarse es aprender a mirar la relación de otra manera.
        </h2>
        <p className="mt-5 text-sm text-secondary-foreground/80 sm:text-base">
          No tienes que tener todas las respuestas hoy. Puedes empezar por comprender lo que ha cambiado, reconocer las distancias y descubrir nuevas maneras de construir conexión.
        </p>
        <a
          href={CHECKOUT_HREF}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-xl shadow-black/30 transition hover:opacity-90 sm:text-base"
        >
          Quiero comenzar mi proceso de reconexión <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 text-xs text-secondary-foreground/60">$29.900 COP · Un solo pago · Garantía de 7 días</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-3xl px-5 text-center text-xs text-muted-foreground">
        <p className="font-serif text-sm text-foreground">El Código de la Reconexión</p>
        <p className="mt-3">© {new Date().getFullYear()} El Código de la Reconexión. Todos los derechos reservados.</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="hover:text-primary">Política de privacidad</a>
          <a href="#" className="hover:text-primary">Términos y condiciones</a>
          <a href="#" className="hover:text-primary">Política de reembolsos</a>
        </div>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed">
          Este material es un recurso educativo e informativo y no sustituye el acompañamiento psicológico o terapéutico profesional.
        </p>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Identificacion />
      <Mecanismo />
      <Producto />
      <Materiales />
      <ComoFunciona />
      <Diferenciacion />
      <Oferta />
      <Garantia />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
