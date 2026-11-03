import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Accueil" }];

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Trouvez avec qui jouer</h1>
      <p className="mt-2 text-muted">Le socle du site fonctionne. Appuyez sur Ctrl + K pour essayer la palette de commandes.</p>
    </>
  );
}
