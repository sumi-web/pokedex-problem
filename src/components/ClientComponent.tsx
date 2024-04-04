'use client';

import { trpc } from '@/app/_trpc/client';

export default function ClientComponent() {
  const { data, isLoading } = trpc.getHello.useQuery({ text: 'I know you' });

  console.log('plz check data', data);

  return (
    <div className="">
      <h1>{isLoading ? 'Loading...' : data?.greeting}</h1>
    </div>
  );
}
