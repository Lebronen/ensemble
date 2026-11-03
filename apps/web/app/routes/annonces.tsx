import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Annonces" }];

export default function Page() {
  return <h1 className="text-3xl font-semibold">Annonces</h1>;
}
