import { NavLink, Outlet } from "react-router";
import { CommandPalette } from "~/components/command-palette";
import { navItems } from "~/lib/navigation";
import { cn } from "~/lib/utils";

/** Coque persistante : la barre latérale reste en place d'une page à l'autre. */
export default function Layout() {
  return (
    <div className="flex h-dvh flex-col">
      <div className="flex min-h-0 flex-1">
        <nav aria-label="Navigation principale" className="flex w-16 shrink-0 flex-col gap-1 border-r border-line bg-panel p-2 md:w-64">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              aria-label={label}
              className={({ isActive }) =>
                cn("flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted hover:text-ink", isActive && "bg-line text-ink")
              }
            >
              <Icon size={18} className="shrink-0" />
              <span className="hidden md:inline">{label}</span>
            </NavLink>
          ))}
          <p className="mt-auto hidden px-3 py-2 text-xs text-muted md:block">Ctrl + K pour tout atteindre</p>
        </nav>
        <main className="min-w-0 flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
      <CommandPalette />
    </div>
  );
}
