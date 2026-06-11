import { supabase } from "@/lib/supabase";

export default async function AdminPage() {
  const { data, error } = await supabase
    .from("course")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 p-10 text-slate-900">
        <h1 className="text-4xl font-bold">
          Error
        </h1>

        <p className="mt-2 text-slate-500">
          {error.message}
        </p>
      </main>
    );
  }

  const totalCourses =
    data?.length ?? 0;

  const completedCourses =
    data?.filter(
      (course) =>
        course.progress >= 80
    ).length ?? 0;

  const completionRate =
    totalCourses > 0
      ? Math.round(
          (completedCourses /
            totalCourses) *
            100
        )
      : 0;

  return (
    <main className="min-h-screen bg-slate-50 p-10 text-slate-900">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Review course activity and completion progress.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Total Courses
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-700">
            {totalCourses}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Completed Courses
          </h3>

          <p className="mt-3 text-4xl font-bold text-emerald-700">
            {completedCourses}
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Completion Rate
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-700">
            {completionRate}%
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">
          Recent Courses
        </h2>

        <div className="space-y-3">
          {data?.map((course) => (
            <div
              key={course.id}
              className="flex justify-between gap-4 border-b border-slate-100 pb-3 text-slate-700 last:border-b-0 last:pb-0"
            >
              <span className="font-medium">
                {course.title}
              </span>

              <span className="font-semibold text-blue-700">
                {course.progress}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
