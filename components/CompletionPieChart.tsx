"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  completed: number;
  inProgress: number;
};

const COLORS = [
  "#22c55e",
  "#3b82f6",
];

export default function CompletionPieChart({
  completed,
  inProgress,
}: Props) {
  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "In Progress",
      value: inProgress,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Course Status
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map(
              (_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index]
                  }
                />
              )
            )}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}