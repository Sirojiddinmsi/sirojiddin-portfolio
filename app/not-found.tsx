import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <span className="section-label">404</span>
      <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-muted">
        The page you requested does not exist or the route is not available yet.
      </p>
      <Link
        href="/uz"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
      >
        Return to home
      </Link>
    </main>
  );
}
