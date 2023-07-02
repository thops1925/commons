'use client'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

import { useState, useEffect } from 'react';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
};
type Providers = Record<string, Provider>

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      console.log(res)
      setProviders(res)
    }
    fetchProviders()
  }, [])

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}>
            {provider.name}
          </button>
        ))}
      </div>
    )
  }

  return null;
};

export default AuthProviders;
