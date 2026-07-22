"use client";

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Dark base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Gradient Blob 1 */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/30 blur-[150px] rounded-full animate-pulse" />

      {/* Gradient Blob 2 */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full animate-pulse" />

      {/* Gradient Blob 3 */}
      <div className="absolute top-[30%] left-[50%] w-[400px] h-[400px] bg-cyan-500/20 blur-[180px] rounded-full animate-pulse" />

    </div>
  );
}