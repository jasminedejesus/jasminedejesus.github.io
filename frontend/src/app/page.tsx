export default function Home() {
  return (
    <main className="pt-[88px] pb-16 md:pt-[88px] md:pb-16 max-md:pt-[76px] max-md:pb-10">
      <section id="Home" className="min-h-screen py-10 px-3 max-w-full my-0 mx-0 mb-[18px] flex flex-col justify-center items-start text-left bg-white rounded-none shadow-[0_18px_45px_rgba(15,23,42,0.04)] border border-slate-300/18 max-md:min-h-auto max-md:py-11 max-md:px-4 max-md:pt-[40px]">
        <div className="max-w-[640px] ml-[0.7rem] text-left max-md:max-w-full">
          <h1 className="text-[2.6rem] mb-4 text-inherit tracking-[-0.04em] max-md:text-[2rem] font-normal">Jasmine De Jesus</h1>
          <p className="mt-3 text-gray-600 mb-6 max-w-[800px] text-[0.95rem]">
            Learning & Growing
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href="/projects">
              <button className="relative top-0 bg-[#111827] text-gray-50 border-none py-[0.7rem] px-[1.7rem] rounded-full cursor-pointer font-medium m-2 transition-all duration-200 ease-in-out hover:bg-[#020617] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,42,0.18)]">See projects</button>
            </a>
            <a href="/contact" className="text-[0.9rem] text-gray-500 no-underline">
              <span className="border-b border-slate-300/70">Contact me</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}