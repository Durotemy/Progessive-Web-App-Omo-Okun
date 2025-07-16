import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  // Add authentication logic here
  return { user, setUser };
}
