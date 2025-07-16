import Link from "next/link";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

const navItems = [
  { href: "/", label: "Home", icon: <IoHomeOutline size={24} /> },
  { href: "/about", label: "About", icon: <IoPersonOutline size={24} /> },
  {
    href: "/notifications",
    label: "Alerts",
    icon: <IoNotificationsOutline size={24} />,
  },
];

export default function BottomNavBar() {
  return (
    <nav className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-okunGreen justify-around items-center h-16 shadow-t text-white">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center justify-center flex-1 py-2 hover:text-okunBlue transition-colors"
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
