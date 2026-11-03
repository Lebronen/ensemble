import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Conservatoires et magasins" }];

export default function Page() {
  return <h1 className="text-3xl font-semibold">Conservatoires et magasins</h1>;
}
