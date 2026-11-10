import { useState } from "react";
import { Check, Lock, ShieldCheck, Sparkles, HeartHandshake, Quote, ChevronDown, ArrowRight, Star } from "lucide-react";
import { SectionBadge } from "@/components/landing/section-badge";
import heroImg from "@/assets/hero-reconnection.webp";
import claridadImg from "@/assets/calm-clarity.webp";

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
        <span className="font-serif text-lg tracking-wide text-foreground">El Código <span className="text-primary">de la Reconexión</span></span>
        <a href="#oferta" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90">
          Quiero empezar hoy
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Dos manos acercándose entre la oscuridad, simbolizando la reconexión emocional" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <SectionBadge>Para quienes sienten que la distancia ya es demasiada</SectionBadge>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl sm:leading-tight">
          Si sientes que el amor que construiste se te está escapando entre los dedos, <span className="text-primary">esto es para ti</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          Un método práctico, paso a paso, para reconstruir la conexión emocional en días — no en años de terapia ni promesas vacías.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#oferta" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition hover:opacity-90 sm:w-auto">
            Quiero recuperar mi conexión <ArrowRight className="h-4 w-4" />
          </a>
          <span className="text-sm text-muted-foreground">Acceso inmediato · Garantía de 7 días</span>
        </div>
      </div>
    </section>
  );
}

function Identificacion() {
  const frases = [
    "Hablan, pero ninguno de los dos se siente escuchado.",
    "Los silencios en casa pesan más que las palabras.",
    "Te preguntas si esto es simplemente lo que queda del amor.",
    "Sientes que ya no saben cómo volver a mirarse como antes.",
  ];
  return (
    <section className="border-t border-border/60 bg-card/40 py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <SectionBadge>¿Te suena familiar?</SectionBadge>
        <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">No estás exagerando. Y no estás solo en esto.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {frases.map((f) => (
            <div key={f} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-5 text-left shadow-sm">
              <Quote className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
              <p className="text-sm text-foreground/90">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problema() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2 sm:items-center">
        <div>
          <SectionBadge>El verdadero problema</SectionBadge>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">No es falta de amor. Es falta de un camino claro de regreso.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            La mayoría de las parejas no se separan porque dejaron de quererse. Se alejan porque nadie les enseñó cómo reconstruir la conexión cuando la rutina, el cansancio y los malentendidos se acumulan día tras día.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Intentaste hablar más. Intentaste tener paciencia. Quizás incluso leíste algún libro o viste algún video. Y aun así, sigues sintiendo que algo no encaja — porque te faltaba el <strong className="text-foreground">mecanismo</strong>, no la intención.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/60 p-8">
          <p className="font-serif text-xl text-foreground">"Puedes amar mucho a alguien y aun así no saber cómo reconectar con esa persona."</p>
          <p className="mt-4 text-sm text-muted-foreground">Esa es la trampa en la que caen la mayoría de las parejas que sienten que se están distanciando.</p>
        </div>
      </div>
    </section>
  );
}

function Descubrimiento() {
  return (
    <section className="border-t border-border/60 bg-card/40 py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <SectionBadge>El descubrimiento</SectionBadge>
        <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">Existe un patrón detrás de cada reconexión exitosa</h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Después de estudiar a cientos de parejas que lograron salir de la distancia emocional —y a otras tantas que no lo lograron— encontramos algo revelador: todas las reconexiones reales siguen la misma secuencia de pasos, en el mismo orden, sin excepción.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          No es magia. No es suerte. Es un código que se puede aprender y aplicar, incluso si tu relación atraviesa su momento más frío.
        </p>
      </div>
    </section>
  );
}

function Mecanismo() {
  const pasos = [
    { n: "01", t: "Decodificar", d: "Identifica exactamente qué rompió la conexión — sin culpas, sin vueltas." },
    { n: "02", t: "Desarmar", d: "Baja las defensas que impiden que te escuchen de verdad." },
    { n: "03", t: "Reconstruir", d: "Aplica los diálogos y rituales diarios que reconstruyen la intimidad paso a paso." },
    { n: "04", t: "Sostener", d: "Instala hábitos simples para que la conexión no vuelva a apagarse." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <SectionBadge>El mecanismo</SectionBadge>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">El Código de la Reconexión en 4 fases</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Un sistema progresivo, diseñado para aplicarse en la vida real — no en teoría.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pasos.map((p) => (
            <div key={p.n} className="rounded-2xl border border-border/60 bg-card/60 p-6">
              <span className="font-serif text-3xl text-primary/70">{p.n}</span>
              <h3 className="mt-3 font-serif text-xl text-foreground">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solucion() {
  return (
    <section className="border-t border-border/60 bg-card/40 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2 sm:items-center">
        <img src={claridadImg} alt="Persona en calma frente a un amanecer dorado, representando la claridad emocional recuperada" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
        <div>
          <SectionBadge>La solución</SectionBadge>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">El Código de la Reconexión</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Un método digital, práctico y guiado, que te lleva de la mano por las 4 fases de la reconexión — con ejercicios, guiones de conversación y rituales diarios que puedes empezar a aplicar hoy mismo, sin depender de que la otra persona "también coopere" desde el primer día.
          </p>
          <ul className="mt-6 space-y-3">
            {["Lecciones breves, pensadas para encajar en tu día real", "Guiones exactos para las conversaciones más difíciles", "Ejercicios diarios de reconexión, de 10 minutos", "Acceso de por vida y actualizaciones incluidas"].map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Valor() {
  const items = [
    { t: "Módulo central", d: "Las 4 fases completas del Código de la Reconexión", v: "$97" },
    { t: "Guiones de conversación", d: "Frases exactas para los momentos más difíciles", v: "$47" },
    { t: "Rituales diarios de 10 minutos", d: "Micro-hábitos para sostener la conexión a largo plazo", v: "$37" },
    { t: "Guía de primeros auxilios emocionales", d: "Qué hacer en medio de una discusión", v: "$27" },
  ];
  return (
    <section id="valor" className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <SectionBadge>Todo lo que recibes</SectionBadge>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">Un valor real de $208, hoy a una fracción del precio</h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((i) => (
            <div key={i.t} className="flex items-center justify-between rounded-2xl border border-border/60 bg-card/60 px-6 py-4">
              <div>
                <p className="font-medium text-foreground">{i.t}</p>
                <p className="text-sm text-muted-foreground">{i.d}</p>
              </div>
              <span className="font-serif text-lg text-primary">{i.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oferta() {
  return (
    <section id="oferta" className="border-t border-border/60 bg-card/40 py-20">
      <div className="mx-auto max-w-xl px-5 text-center">
        <SectionBadge>Oferta de hoy</SectionBadge>
        <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">Empieza a reconstruir tu conexión hoy mismo</h2>
        <div className="mt-8 rounded-3xl border border-primary/30 bg-background p-8 shadow-2xl shadow-primary/10">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Acceso completo</p>
          <div className="mt-3 flex items-end justify-center gap-3">
            <span className="text-lg text-muted-foreground line-through">$208</span>
            <span className="font-serif text-5xl text-primary">$37</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Pago único · Acceso inmediato y de por vida</p>
          <a href="#faq" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90">
            Sí, quiero reconectar ahora <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Pago 100% seguro y encriptado</p>
        </div>
      </div>
    </section>
  );
}

function Seguridad() {
  const items = [
    { icon: ShieldCheck, t: "Garantía de 7 días", d: "Si en 7 días no sientes ningún cambio, te devolvemos el 100% de tu dinero. Sin preguntas." },
    { icon: Lock, t: "Pago seguro", d: "Tus datos y tu pago están protegidos con cifrado de nivel bancario." },
    { icon: HeartHandshake, t: "Acompañamiento", d: "Soporte por correo para dudas durante todo el proceso." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <SectionBadge>Tu tranquilidad, primero</SectionBadge>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">Decidir reconectar no debería darte miedo</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div key={item.t} className="rounded-2xl border border-border/60 bg-card/60 p-6 text-center">
                <ItemIcon className="mx-auto h-7 w-7 text-primary" />
                <h3 className="mt-4 font-serif text-lg text-foreground">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "¿Funciona si mi pareja no quiere participar al principio?", a: "Sí. El método está diseñado para que puedas empezar a aplicarlo tú primero, generando cambios que naturalmente invitan a la otra persona a acercarse de nuevo." },
    { q: "¿Cuánto tiempo toma ver resultados?", a: "La mayoría de las personas notan los primeros cambios en la forma de comunicarse dentro de los primeros 7 a 10 días de aplicar el método." },
    { q: "¿Es terapia de pareja?", a: "No. Es un método práctico y guiado que puedes aplicar en tu día a día, sin sesiones eternas ni dependencia de terceros." },
    { q: "¿Qué pasa si no funciona para mí?", a: "Tienes 7 días de garantía incondicional. Si no sientes ningún avance, te devolvemos tu dinero completo." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border/60 bg-card/40 py-20">
      <div className="mx-auto max-w-2xl px-5">
        <div className="text-center">
          <SectionBadge>Preguntas frecuentes</SectionBadge>
          <h2 className="mt-5 font-serif text-3xl text-foreground sm:text-4xl">Antes de que decidas</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => (
            <div key={f.q} className="rounded-2xl border border-border/60 bg-background">
              <button onClick={() => setOpen(open === idx ? null : idx)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                <span className="font-medium text-foreground">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${open === idx ? "rotate-180" : ""}`} />
              </button>
              {open === idx && <p className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <div className="flex justify-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
        </div>
        <h2 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">La distancia no tiene que ser el final de la historia</h2>
        <p className="mt-4 text-muted-foreground">Hoy puedes dar el primer paso hacia una conexión real, sin esperar que todo se resuelva "solo".</p>
        <a href="#oferta" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90">
          <Sparkles className="h-4 w-4" /> Quiero mi Código de la Reconexión
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-center text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} El Código de la Reconexión. Todos los derechos reservados.</p>
      <p className="mt-2">Este producto no sustituye asesoría psicológica profesional en casos de violencia o riesgo emocional grave.</p>
    </footer>
  );
}

export function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Identificacion />
      <Problema />
      <Descubrimiento />
      <Mecanismo />
      <Solucion />
      <Valor />
      <Oferta />
      <Seguridad />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
