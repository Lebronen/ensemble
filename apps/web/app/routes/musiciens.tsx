import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Trouver des musiciens" }];

export default function Page() {
  return <h1 className="text-3xl font-semibold">Trouver des musiciens</h1>;
}
