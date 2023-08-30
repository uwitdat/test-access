import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <img
        src="https://picsum.photos/id/237/536/354"
        style={{ height: '5px' }}
        alt="work"
      />
    </main>
  );
}
