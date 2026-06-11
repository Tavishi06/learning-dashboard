export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10 text-slate-900">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Adjust the preferences for your dashboard.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <button
          className="
          px-6
          py-3
          rounded-xl
          bg-blue-600
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          focus:outline-none
          focus:ring-4
          focus:ring-blue-100
          "
        >
          Toggle Theme
        </button>

      </div>

    </main>
  );
}
