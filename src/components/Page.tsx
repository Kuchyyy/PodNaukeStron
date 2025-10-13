const Page = () => {
  return (
    <div className="relative w-screen h-dvh bg-stone-200">
      {/* pełny overlay */}
      <div className="absolute inset-0 bg-indigo-500/20"></div>

      {/* pasek na górze i dole */}
      <div className="absolute inset-x-0 top-0 h-12 bg-pink-400/70"></div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-pink-400/70"></div>

      {/* pasek po lewej i prawej */}
      <div className="absolute inset-y-0 left-0 w-12 bg-emerald-400/70"></div>
      <div className="absolute inset-y-0 right-0 w-12 bg-emerald-400/70"></div>
    </div>
  );
};

export default Page;
