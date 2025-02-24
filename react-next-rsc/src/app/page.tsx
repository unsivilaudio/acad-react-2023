import fs from 'node:fs/promises';
import { Suspense } from 'react';

import UsePromiseDemo from '@/components/UsePromisesDemo';
import ErrorBoundary from '@/components/ErrorBoundary';

type User = {
  id: string;
  name: string;
  title: string;
};

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve) =>
    setTimeout(async () => {
      const data = await fs.readFile('dummy-db.json', 'utf-8');
      const users = JSON.parse(data) as User[];
      resolve(users);
      //   reject(new Error('Error!'));
    }, 2000)
  ) as Promise<User[]>;
  return (
    <main>
      <ErrorBoundary fallback={<p>Something went wrong.</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
