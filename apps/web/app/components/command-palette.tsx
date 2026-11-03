import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { navItems } from "~/lib/navigation";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Palette de commandes"
      overlayClassName="fixed inset-0 bg-black/60"
      contentClassName="fixed left-1/2 top-[15%] w-[min(560px,calc(100vw-32px))] -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-panel text-ink shadow-2xl"
    >
      <Command.Input
        placeholder="Où voulez-vous aller ?"
        className="w-full border-b border-line bg-transparent px-4 py-3 outline-none"
      />
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="p-3 text-sm text-muted">Aucun résultat</Command.Empty>
        {navItems.map(({ to, label, icon: Icon }) => (
          <Command.Item
            key={to}
            value={label}
            onSelect={() => {
              setOpen(false);
              navigate(to);
            }}
            className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm data-[selected=true]:bg-line"
          >
            <Icon size={16} />
            {label}
          </Command.Item>
        ))}
      </Command.List>
    </Command.Dialog>
  );
}
