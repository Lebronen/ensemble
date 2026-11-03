import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("musiciens", "routes/musiciens.tsx"),
    route("annonces", "routes/annonces.tsx"),
    route("evenements", "routes/evenements.tsx"),
    route("lieux", "routes/lieux.tsx"),
  ]),
] satisfies RouteConfig;
