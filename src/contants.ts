import { IoHomeOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { MdHistoryEdu } from "react-icons/md";
import { FiMap } from "react-icons/fi";
import { MdCastForEducation } from "react-icons/md";

export const navBarPrimary = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Discussion", link: "https://x.com/okunvoice" },
  { id: 3, title: "Map", link: "/map" },
  { id: 4, title: "Hotlines", link: "/hotlines" },
  { id: 5, title: "Profile", link: "/profile" },
];

export const navItems = [
  {
    id: 1,
    href: "/",
    label: "Home",
    icon: IoHomeOutline,
  },
  {
    id: 2,
    href: "/education",
    label: "Education",
    icon: MdCastForEducation,
  },
  {
    id: 3,
    href: "/map",
    label: "Map",
    icon: FiMap,
  },
  {
    id: 4,
    href: "/discussion",
    label: "Discussion",
    icon: GoCommentDiscussion,
  },

  {
    id: 5,
    href: "/history",
    label: "History",
    icon: MdHistoryEdu,
  },
];

export const navBarSecondary = [
  { id: 6, title: "Notifications", link: "/notifications" },
  { id: 7, title: "History", link: "/history" },
  { id: 8, title: "Provinces", link: "/provinces" },
  { id: 9, title: "People", link: "/people" },
];
