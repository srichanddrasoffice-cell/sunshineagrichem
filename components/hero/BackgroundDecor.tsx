export function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-[-10%] h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-[-8%] right-[-8%] h-64 w-64 rounded-full bg-lime-200/40 blur-3xl" />
    </div>
  );
}

export default BackgroundDecor;