import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Concerts et événements" }];

export default function Page() {
  return <h1 className="text-3xl font-semibold">Concerts et événements</h1>;
}
