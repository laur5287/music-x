export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null

  return (
    <span id="indicator" className="fixed z-50 flex items-center justify-center w-6 h-6 p-3 font-mono text-xs rounded-full bottom-1 left-1 light: text-yellow-50 bg-cyan-500 dark:text-orange-950 dark:bg-white ">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </span>
  )
}
