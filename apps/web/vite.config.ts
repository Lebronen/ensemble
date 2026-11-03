import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // Le paquet partagé est livré en TypeScript : Vite doit le compiler aussi côté serveur.
  ssr: { noExternal: ["@app/shared"] },
});
