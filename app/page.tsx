import { supabase } from "@/lib/supabase";
import AddCourseForm from "@/components/AddCourseForm";
import CourseList from "@/components/CourseList";
import CourseChart from "@/components/CourseChart";
import CompletionPieChart from "@/components/CompletionPieChart";
import ExportButton from "@/components/ExportButton";

export default async function Home() {
  const { data, error } = await supabase
    .from("course")
    .select("*");

  if (error) {
    return (
      <main className="p-10">
        <h1>Error</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  const totalCourses = data?.length ?? 0;

  const averageProgress =
    totalCourses > 0
      ? Math.round(
          data.reduce(
            (sum, course) =>
              sum + course.progress,
            0
          ) / totalCourses
        )
      : 0;

  const completedCourses =
    data?.filter(
      (course) =>
        course.progress >= 80
    ).length ?? 0;

  const inProgressCourses =
    totalCourses -
    completedCourses;

  const frontendCourses =
    data?.filter(
      (course) =>
        course.category === "Frontend"
    ).length ?? 0;

  const backendCourses =
    data?.filter(
      (course) =>
        course.category === "Backend"
    ).length ?? 0;

  const aiCourses =
    data?.filter(
      (course) =>
        course.category === "AI"
    ).length ?? 0;

  const dsaCourses =
    data?.filter(
      (course) =>
        course.category === "DSA"
    ).length ?? 0;

    const courseMaster =
  completedCourses >= 5;
  
  const frontendExpert =
  frontendCourses >= 3;
  
  const aiLearner =
  aiCourses >= 2;
  
  const dsaWarrior =
  dsaCourses >= 2;

  return (
    <main className="min-h-screen bg-slate-50 p-10 text-slate-900">

      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold">
          Welcome Back 
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          Track your courses, monitor progress and stay consistent.
        </p>

      </div>

      {/* Hero Banner */}
      <div 
      className="
      mb-8
      bg-gradient-to-r
      from-blue-600
      to-purple-600
      text-white
      p-8
      rounded-3xl
      shadow-xl
      "
      >
      
      <h2 className="text-3xl font-bold">
        Keep Learning 
      </h2>

      <p className="mt-3 opacity-90">
        Every completed course brings you closer
        to your dream career.
      </p>
    </div>

      {/* Add Course Form */}
      <AddCourseForm />

      {/* Main Statistics */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-blue-500 text-white p-5 rounded-2xl shadow-lg">
          
          <h3 className="text-gray-500">
            Total Courses
          </h3>

          <p className="text-3xl font-bold">
            {totalCourses}
          </p>
        </div>

        <div className="bg-emerald-500 text-white p-5 rounded-2xl shadow-lg">
          <h3 className="text-gray-500">
            Average Progress
          </h3>

          <p className="text-3xl font-bold">
            {averageProgress}%
          </p>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-2xl shadow-lg">
          <h3 className="text-gray-500">
            Completed Courses
          </h3>

          <p className="text-3xl font-bold">
            {completedCourses}
          </p>
        </div>

      </div>

      {/* Category Statistics */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">
            Frontend
          </h3>

          <p className="text-3xl font-bold">
            {frontendCourses}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">
            Backend
          </h3>

          <p className="text-3xl font-bold">
            {backendCourses}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">
            AI
          </h3>

          <p className="text-3xl font-bold">
            {aiCourses}
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500">
            DSA
          </h3>

          <p className="text-3xl font-bold">
            {dsaCourses}
          </p>
        </div>

      </div>

      {/* Achievement Section */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold mb-4">
          Achievements 🏆
        </h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div 
          className={`
            p-5
            rounded-2xl
            shadow
            ${
              courseMaster
              ? "bg-yellow-100"
              : "bg-gray-100"
            }
            `}
          >
            <h3 className="font-bold">
              Course Master
            </h3>
            
            <p className="text-sm mt-2">
              Complete 5 courses
            </p>
          </div>
          <div
          className={`
            p-5
            rounded-2xl
            shadow
            ${
              frontendExpert
              ? "bg-blue-100"
              : "bg-gray-100"
            }
            `}
            >
              
              <h3 className="font-bold">
                Frontend Expert
              </h3>

              <p className="text-sm mt-2">
                Complete 3 Frontend courses
              </p>
          </div>
          
          <div
          className={`
            p-5
            rounded-2xl
            shadow
            ${
              aiLearner
              ? "bg-purple-100"
              : "bg-gray-100"
            }
            `}
            >
              
              <h3 className="font-bold">
                AI Learner
              </h3>

              <p className="text-sm mt-2">
                Complete 2 AI courses
              </p>
          </div>
          
          <div
          className={`
          p-5
          rounded-2xl
          shadow
          ${
            dsaWarrior
            ? "bg-green-100"
            : "bg-gray-100"
          }
          `}
          >
            
            <h3 className="font-bold">
              DSA Warrior
            </h3>

            <p className="text-sm mt-2">
              Complete 2 DSA courses
            </p>
          </div>


        </div>

      </div>


      {/* Progress Chart */}
      <CourseChart
        courses={data ?? []}
      />

      {/* Completion Pie Chart */}
      <CompletionPieChart
        completed={completedCourses}
        inProgress={inProgressCourses}
      />

      {/* Export Button */}
      <ExportButton
        courses={data ?? []}
      />

      {/* Course List */}
      <CourseList
        courses={data ?? []}
      />

    </main>
  );
}