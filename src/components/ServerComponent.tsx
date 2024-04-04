import { serverClient } from '@/app/_trpc/server-client';

export default async function ServerComponent() {
  const getHello = await serverClient.getHello({ text: 'hello sumit' });

  console.log('getHello found', getHello);

  return (
    <div className="flex flex-row justify-center w-full">
      <h1>{getHello?.greeting}</h1>
    </div>
  );
}
