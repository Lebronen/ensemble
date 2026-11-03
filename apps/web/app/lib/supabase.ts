import {
  createBrowserClient,
  createServerClient,
  parseCookieHeader,
  type SetAllCookies,
  serializeCookieHeader,
} from "@supabase/ssr";

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

/** Client à utiliser dans les composants exécutés dans le navigateur. */
export function getBrowserSupabase() {
  return createBrowserClient(url, anonKey);
}

/** Client à utiliser dans les loaders et actions ; ajouter `headers` à la réponse. */
export function getServerSupabase(request: Request) {
  const headers = new Headers();
  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll: () =>
        parseCookieHeader(request.headers.get("Cookie") ?? "").map(({ name, value }) => ({
          name,
          value: value ?? "",
        })),
      setAll: (cookies: Parameters<SetAllCookies>[0]) => {
        for (const { name, value, options } of cookies) {
          headers.append("Set-Cookie", serializeCookieHeader(name, value, options));
        }
      },
    },
  });
  return { supabase, headers };
}
