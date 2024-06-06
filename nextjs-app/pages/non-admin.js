import { useSession } from "next-auth/react";

export default function NonAdmin() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="container">
        <div className="card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Non-Admin Page</h2>
        <p>Welcome, {session.user.name}. You do not have admin access to CloudMeter.</p>
      </div>
    </div>
  );
}
