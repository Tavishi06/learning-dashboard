"use client";

import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

import {
Rocket,
Brain,
Database,
Code,
} from "lucide-react";

const icons = {
Rocket,
Brain,
Database,
Code,
};

type CourseCardProps = {
id: number;
title: string;
progress: number;
icon: string;
category: string;
deadline: string;
};

export default function CourseCard({
id,
title,
progress,
icon,
category,
deadline,
}: CourseCardProps) {
const IconComponent =
icons[icon as keyof typeof icons];

const today = new Date();

const dueDate = new Date(deadline);

const diffTime =
dueDate.getTime() -
today.getTime();

const daysLeft = Math.ceil(
diffTime /
(1000 * 60 * 60 * 24)
);

async function handleIncreaseProgress() {
const newProgress = Math.min(
progress + 10,
100
);

const { error } = await supabase
  .from("course")
  .update({
    progress: newProgress,
  })
  .eq("id", id);

if (error) {
  alert(error.message);
  return;
}

window.location.reload();


}

async function handleDelete() {
const confirmed = confirm(
`Delete ${title}?`
);


if (!confirmed) return;

const { error } = await supabase
  .from("course")
  .delete()
  .eq("id", id);

if (error) {
  alert(error.message);
  return;
}

alert("Course Deleted Successfully!");

window.location.reload();


}

return (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
className="
bg-white
rounded-3xl
p-6
shadow-md
border
border-slate-100
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
> <h2 className="text-xl font-bold">
{title} </h2>


  <div className="flex gap-2 mt-3">

    <span
      className="
      bg-blue-100
      text-blue-700
      px-3
      py-1
      rounded-full
      text-sm
      "
    >
      {category}
    </span>

    {daysLeft < 0 ? (
      <span
        className="
        bg-red-100
        text-red-700
        px-3
        py-1
        rounded-full
        text-sm
        "
      >
        Overdue
      </span>
    ) : (
      <span
        className="
        bg-yellow-100
        text-yellow-700
        px-3
        py-1
        rounded-full
        text-sm
        "
      >
        Due in {daysLeft} days
      </span>
    )}

  </div>

  <p className="mt-4 font-medium">
    Progress: {progress}%
  </p>

  {progress >= 80 ? (
    <p className="text-green-600 font-medium mt-1">
      🟢 Completed
    </p>
  ) : (
    <p className="text-yellow-600 font-medium mt-1">
      🟡 In Progress
    </p>
  )}

  <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
    <div
      className="bg-blue-500 h-3 rounded-full"
      style={{
        width: `${progress}%`,
      }}
    />
  </div>

  <div className="mt-6 flex items-center justify-between">

    {IconComponent && (
      <IconComponent size={34} />
    )}

    <div className="flex gap-2">

      <button
        onClick={handleIncreaseProgress}
        className="
          bg-green-500
          text-white
          px-3
          py-2
          rounded-lg
          hover:bg-green-600
        "
      >
        +10%
      </button>

      <button
        onClick={handleDelete}
        className="
          bg-red-500
          text-white
          px-4
          py-2
          rounded-lg
          hover:bg-red-600
        "
      >
        Delete
      </button>

    </div>

  </div>
</motion.div>


);
}
