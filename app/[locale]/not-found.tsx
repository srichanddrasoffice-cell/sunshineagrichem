import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">The page you requested could not be found.</p>
        <Link href="/en" className="mt-8 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">Back home</Link>
      </div>
    </main>
  );
}
