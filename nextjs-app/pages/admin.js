import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const roles = session.user.roles || [];
      if (roles.includes('admin')) {
        setIsAdmin(true);
      } else {
        router.push('/non-admin');
      }
    }
  }, [session, router]);

  return isAdmin ? (
    <div className="container">
      <div className="card">
        <h2>Admin Dashboard</h2>
        <p>Welcome, Admin. Here you can manage CloudMeter.</p>
      </div>
    </div>
  ) : null;
}
