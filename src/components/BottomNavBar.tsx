import Link from "next/link";

import { navItems } from "@/contants";

export default function BottomNavBar() {
  return (
    <nav className="flex md:hidden fixed bottom-7 left-1/2 -translate-x-1/2 z-50 bg-okunGreen justify-around items-center h-16 shadow-t text-white mx-auto  w-11/12 rounded-full">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center justify-center flex-1 py-2 hover:text-okunBlue transition-colors"
        >
          {<item.icon size={24} />}
          <span className="text-xs mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
