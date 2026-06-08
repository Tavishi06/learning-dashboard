import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
  .from("course")
  .select("*");

  console.log(data);
  console.log(error);

  if (error) {
    return (
      <main className="p-10">
        <h1>Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        My Courses
      </h1>

      {data?.map((course) => (
        <div
          key={course.id}
          className="border rounded-lg p-4 mb-4"
        >
          <h2 className="text-xl font-semibold">
            {course.title}
          </h2>

          <p>Progress: {course.progress}%</p>

          <p>Icon: {course.icon_name}</p>
        </div>
      ))}
    </main>
  );
}