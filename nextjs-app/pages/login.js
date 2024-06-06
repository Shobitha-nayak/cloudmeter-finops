import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <div className="container">
      <div className="card">
        {session ? (
          <>
            <h2>Welcome, {session.user.name}</h2>
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            <h2>Please sign in to CloudMeter</h2>
            <button onClick={() => signIn('azure-ad')}>Sign in with Azure AD</button>
          </>
        )}
      </div>
    </div>
  );
}
