import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-display text-6xl font-black text-chilli">404</p>
      <h1 className="mt-4 font-display text-3xl font-black">Page not found</h1>
      <Link to="/" className="mt-8 inline-flex rounded-md bg-olivewood px-6 py-3 font-black text-parchment">
        Back to home
      </Link>
    </section>
  );
}
