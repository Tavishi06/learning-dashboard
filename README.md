# Learning Dashboard

A modern Learning Management Dashboard built using Next.js, TypeScript, Tailwind CSS, Supabase, Recharts, and Framer Motion.

## Features

### Student Dashboard

* View enrolled courses
* Track learning progress
* Search courses
* Filter by category
* Filter by completion status
* Sort courses
* Progress analytics
* Achievement badges
* Export course data

### Admin Dashboard

* Manage courses
* View course statistics
* Monitor completion rates
* Review course progress

### Analytics

* Course Progress Chart
* Completion Pie Chart
* Learning Statistics

## Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* Supabase
* Recharts
* Framer Motion
* Lucide React

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/learning-dashboard.git
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Project Structure

```txt
app/
├── admin/
├── analytics/
├── login/
├── profile/
├── settings/
├── page.tsx

components/
├── AddCourseForm.tsx
├── CourseCard.tsx
├── CourseList.tsx
├── CourseChart.tsx
├── CompletionPieChart.tsx
├── ExportButton.tsx
├── Sidebar.tsx

lib/
└── supabase.ts
```

## Future Improvements

* Video Uploads
* PDF Resources
* Quiz System
* Auto Progress Tracking
* Certificates
* Student Management
* Role-Based Authentication

## Author

Tavishi

Built as a portfolio project to demonstrate full-stack development skills using Next.js and Supabase.
