import Link from "next/link";
import Image from "next/image";
import { navBarPrimary } from "@/contants";
import { CiMenuFries } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="text-2xl bg-okunGreen w-full flex flex-row items-center justify-between p-4">
      <Image
        src="/images/OkunLogo.png"
        alt="Logo"
        width={50}
        height={50}
        className="rounded"
      />
      <div>
        {navBarPrimary.map((ele) => (
          <Link
            href={ele.link}
            key={ele.id}
            className="text-base px-4 py-2 inline-block transition-transform duration-300 rounded hover:-translate-y-0.5 hover:text-red-400"
          >
            {ele.title}
          </Link>
        ))}
      </div>
      <div className="hover:cursor-pointer">
        {/* <CiMenuFries /> */}
        <IoIosNotificationsOutline />
      </div>
    </nav>
  );
};

export default Navbar;
