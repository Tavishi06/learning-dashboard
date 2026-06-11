export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-10 text-slate-900">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Manage the details connected to your learning account.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-5 border-b border-slate-100 pb-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Name
          </h3>

          <p className="mt-1 text-lg font-medium">
            Tavishi
          </p>
        </div>

        <div className="mb-5 border-b border-slate-100 pb-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Email
          </h3>

          <p className="mt-1 text-lg font-medium">
            user@example.com
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Role
          </h3>

          <p className="mt-1 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Student
          </p>
        </div>

      </div>

    </main>
  );
}
