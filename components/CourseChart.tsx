"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type Course = {
  title: string;
  progress: number;
};

type CourseChartProps = {
  courses: Course[];
};

export default function CourseChart({
  courses,
}: CourseChartProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Course Progress Chart
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={courses}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />

          <Bar
            dataKey="progress"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}