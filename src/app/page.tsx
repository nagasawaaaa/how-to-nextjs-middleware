import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h2 className="text-2xl mb-5">Home Page</h2>
      <ul>
        <li>
          <Link className="underline hover:no-underline" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="underline hover:no-underline"
            href="/secret"
            prefetch={false}
          >
            Secret
          </Link>
        </li>
      </ul>
    </main>
  );
}
