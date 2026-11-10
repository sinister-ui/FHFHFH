import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "El Código de la Reconexión | Recupera la conexión que creías perdida" },
      {
        name: "description",
        content:
          "El método práctico para reconectar emocionalmente en pocos días, incluso si ya lo intentaste todo. Paso a paso, sin terapias eternas ni promesas vacías.",
      },
      { property: "og:title", content: "El Código de la Reconexión" },
      {
        property: "og:description",
        content: "El método para recuperar la conexión emocional que sentías que ya no volvería.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans-ui">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
