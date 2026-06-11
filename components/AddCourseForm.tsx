"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AddCourseForm() {
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState("");
  const [icon, setIcon] = useState("Code");
  const [deadline, setDeadline] =
  useState("");

  const [category, setCategory] =
  useState("Frontend");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await supabase
      .from("course")
      .insert([
        {
          title,
          progress: Number(progress),
          icon_name: icon,
          category,
          deadline,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Course Added Successfully!");

    setTitle("");
    setProgress("");
    setIcon("Code");
    setCategory("Frontend");

    window.location.reload();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white
        p-6
        rounded-2xl
        shadow-md
        mb-8
      "
    >
      <h2 className="text-2xl font-bold mb-4">
        Add New Course
      </h2>

      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
        "
      />

      <input
        type="number"
        placeholder="Progress"
        value={progress}
        onChange={(e) =>
          setProgress(e.target.value)
        }
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
        "
      />

      <select
        value={icon}
        onChange={(e) =>
          setIcon(e.target.value)
        }
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
        "
      >
        <option value="Code">Code</option>
        <option value="Rocket">Rocket</option>
        <option value="Brain">Brain</option>
        <option value="Database">Database</option>

      </select>

      <select
       value={category}
       onChange={(e) =>
        setCategory(e.target.value)
      }
      className="
      w-full
      p-3
      border
      rounded-xl
      mb-4
      "
      >
        <option value="Frontend">
          Frontend
        </option>
        
        <option value="Backend">
          Backend
        </option>

        <option value="DSA">
          DSA
        </option>

        <option value="System Design">
          System Design
        </option>
        
        <option value="AI">
          AI
        </option>
        
      </select>

      <input
      type="date"
      value={deadline}
      onChange={(e) =>
        setDeadline(e.target.value)
      }
      className="
      w-full
      p-3
      border
      rounded-xl
      mb-4
      "
      />

      <button
        type="submit"
        className="
          bg-blue-500
          text-white
          px-6
          py-3
          rounded-xl
        "
      >
        Add Course
      </button>
    </form>
  );
}