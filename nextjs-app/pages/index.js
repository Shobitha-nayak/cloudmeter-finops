import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to CloudMeter</h1>
        <p>Your FinOps solution for cloud cost management and optimization.</p>
        <div className="buttons">
          {session ? (
            <>
              <Link href="/login" passHref>
                <button>Dashboard</button>
              </Link>
              <button onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/signin" passHref>
                <button>Sign In</button>
              </Link>
              <Link href="/forgot-password" passHref>
                <button>Forgot Password</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="links">
        <Link href="/admin" passHref>
          <span className="link">Admin Page</span>
        </Link>
        <Link href="/non-admin" passHref>
          <span className="link">Non-Admin Page</span>
        </Link>
      </div>
    </div>
  );
}
