export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="mb-4 text-5xl font-bold text-sky-400">404</h1>
      <p className="mb-6 text-lg text-slate-300">
        La page que vous cherchez n&apos;existe pas.
      </p>

      <a
        href="/"
        className="rounded-xl bg-sky-600 px-4 py-2 font-medium text-white transition hover:bg-sky-700"
      >
        Retour à l’accueil
      </a>
    </div>
  );
}
