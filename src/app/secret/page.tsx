import Link from 'next/link';
export default function Secret() {
  return (
    <main>
      <h2 className="text-2xl mb-5 text-green-300">Secret Page</h2>
      <ul>
        <li>
          <Link className="underline hover:no-underline" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="underline hover:no-underline" href="/about">
            About
          </Link>
        </li>
      </ul>
    </main>
  );
}
