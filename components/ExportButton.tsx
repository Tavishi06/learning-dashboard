"use client";

import * as XLSX from "xlsx";

type Course = {
  title: string;
  progress: number;
  category: string;
};

type Props = {
  courses: Course[];
};

export default function ExportButton({
  courses,
}: Props) {

  function exportToExcel() {

    const worksheet =
      XLSX.utils.json_to_sheet(
        courses
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Courses"
    );

    XLSX.writeFile(
      workbook,
      "courses.xlsx"
    );
  }

  return (
    <button
      onClick={exportToExcel}
      className="
        bg-green-500
        text-white
        px-4
        py-3
        rounded-xl
        mb-6
      "
    >
      Export to Excel
    </button>
  );
}