import { CalendarDays, Compass, Home, type LucideIcon, Megaphone, Store } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon };

/** Source unique : alimente à la fois la barre latérale et la palette de commandes. */
export const navItems: NavItem[] = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/musiciens", label: "Trouver des musiciens", icon: Compass },
  { to: "/annonces", label: "Annonces", icon: Megaphone },
  { to: "/evenements", label: "Concerts et événements", icon: CalendarDays },
  { to: "/lieux", label: "Conservatoires et magasins", icon: Store },
];
