import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="container">
      <div className="card">
        <h2>Sign in to CloudMeter</h2>
        <button onClick={() => signIn('azure-ad')}>Sign in with Azure AD</button>
      </div>
    </div>
  );
}
