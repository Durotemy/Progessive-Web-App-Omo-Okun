import React from "react";

export default function Button({
  children,
  ...props
}: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button {...props}>{children}</button>;
}
