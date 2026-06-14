"use client";

import NavBar from "@/components/NavBar";

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      <main className="flex-1 px-6 py-10 max-w-2xl mx-auto w-full">
        <h1 className="text-4xl font-black text-gray-800 mb-2">For Teachers</h1>
        <p className="text-gray-500 font-semibold mb-8">
          Share feedback to help us improve OurReadingWorld for your students.
        </p>

        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScJs6HMEKX5o5CetndzP0gqD5dnFeX7tIzpU1WCI7vCEsQTtQ/viewform?embedded=true"
            width="100%"
            height="1010"
            style={{ border: "none" }}
            title="Teacher Feedback Form"
          >
            Loading…
          </iframe>
        </div>
      </main>
    </div>
  );
}
