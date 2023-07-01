'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

type Provider = {
  id: string,
  name: string,
  type: string,
  signIngUrl: string,
  callbackUrl: string,
  signInUrlParams: Record<string, string> | null,
}



const AuthProviders = () => {
  const [providers, setProviders] = useState<Provider | null>(null)
  return <div>
    <p>logout</p>
  </div>;
};

export default AuthProviders;
