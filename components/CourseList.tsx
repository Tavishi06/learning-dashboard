"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";


type Course = {
  id: number;
  title: string;
  progress: number;
  icon_name: string;
  category: string;
  deadline: string;
};

type CourseListProps = {
  courses: Course[];
};

export default function CourseList({
  courses,
}: CourseListProps) {
  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [sortBy, setSortBy] =
  useState("Default");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("All");

  const filteredCourses = courses
  .filter((course) => {

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

    const matchesCategory =
      selectedCategory === "All" ||
      course.category ===
        selectedCategory;

    const matchesStatus =
      statusFilter === "All" ||

      (statusFilter ===
        "Completed" &&
        course.progress >= 80) ||

      (statusFilter ===
        "In Progress" &&
        course.progress > 0 &&
        course.progress < 80) ||

      (statusFilter ===
        "Not Started" &&
        course.progress === 0);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  })
  .sort((a, b) => {

    if (
      sortBy ===
      "Progress High-Low"
    ) {
      return (
        b.progress -
        a.progress
      );
    }

    if (
      sortBy ===
      "Progress Low-High"
    ) {
      return (
        a.progress -
        b.progress
      );
    }

    if (
      sortBy ===
      "Title A-Z"
    ) {
      return a.title.localeCompare(
        b.title
      );
    }

    if (
      sortBy ===
      "Title Z-A"
    ) {
      return b.title.localeCompare(
        a.title
      );
    }

    return 0;
  });

  return (
    <div>

      {/* Category Filter */}

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            e.target.value
          )
        }
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
          bg-white
        "
      >
        <option value="All">
          All Categories
        </option>

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

      <select
      value={sortBy}
      onChange={(e) =>
        setSortBy(
          e.target.value
          )
        }
        className="
        w-full
        p-3
        border
        rounded-xl
        mb-4
        bg-white
        "
        >
        <option value="Default">
          Sort Courses
        </option>

        <option value="Progress High-Low">
          Progress High → Low
        </option>

        <option value="Progress Low-High">
          Progress Low → High
        </option>

        <option value="Title A-Z">
          Title A → Z
        </option>

        <option value="Title Z-A">
          Title Z → A
        </option>
      </select>

      {/* Status Filter */}

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(
            e.target.value
          )
        }
        className="
          w-full
          p-3
          border
          rounded-xl
          mb-4
          bg-white
        "
      >
        <option value="All">
          All Status
        </option>

        <option value="Completed">
          Completed
        </option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Not Started">
          Not Started
        </option>
      </select>

      {/* Search */}

      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="
          w-full
          p-4
          mb-6
          rounded-2xl
          border
          bg-white
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      {/* Empty State */}

      {filteredCourses.length === 0 ? (
        <div
          className="
            bg-white
            p-10
            rounded-2xl
            text-center
            shadow
          "
        >
          <h2 className="text-xl font-semibold">
            No Courses Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing filters
            or search text.
          </p>
        </div>
      ) : (

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {filteredCourses.map(
            (course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                progress={
                  course.progress
                }
                icon={
                  course.icon_name
                }
                category={
                  course.category
                }
                deadline={course.deadline}
              />
            )
          )}
        </div>

      )}

    </div>
  );
}