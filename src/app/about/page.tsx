import Link from 'next/link';
export default function About() {
  return (
    <main>
      <h2 className="text-2xl mb-5 text-red-300">About Page</h2>
      <ul>
        <li>
          <Link className="underline hover:no-underline" href="/">
            Home
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
