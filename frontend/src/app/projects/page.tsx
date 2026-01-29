export default function ProjectsPage() {
  return (
    <main className="pt-[88px] pb-16 max-md:pt-[76px] max-md:pb-10">
      <section id="Contact" className="min-h-screen py-10 px-3 max-w-full my-0 mx-0 mb-[18px] flex flex-col justify-center items-center text-center bg-white rounded-none shadow-[0_18px_45px_rgba(15,23,42,0.04)] border border-slate-300/18 max-md:min-h-auto max-md:py-11 max-md:px-4">
      {/* Projects Heading - Moved Upward */}
  <div className="max-w-[1200px] w-full mb-8 text-left">
    <h2 className="text-[2.5rem] mb-3 text-[#111827] text-normal tracking-tight">Projects</h2>
    <p className="text-sm text-gray-500 text-[0.95rem]">A few works that reflect my journey</p>
  </div>
      
        <div className="container-projects flex flex-wrap justify-center gap-8 mt-8 max-w-full max-md:flex-col max-md:items-center">
          <div className="project bg-gray-50 py-5 px-[1.4rem] rounded-2xl w-[280px] shadow-none border border-gray-300/80 transition-all duration-200 ease-in-out text-[#111827] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)] hover:border-[#111827] max-md:w-full max-md:max-w-full">
            <h3 className="text-base mb-2 text-inherit">Project Title 1</h3>
            <p className="mb-6 max-w-[800px] text-gray-600 text-[0.95rem]">Short description of Project 1.</p>
            <a href="#" className="inline-block m-2 text-[#111827] no-underline font-medium text-[0.9rem] hover:underline">View Project</a>
            <a href="https://www.example.com/" className="inline-block m-2 text-[#111827] no-underline font-medium text-[0.9rem] hover:underline">Github repo</a>
          </div>
          <div className="project bg-gray-50 py-5 px-[1.4rem] rounded-2xl w-[280px] shadow-none border border-gray-300/80 transition-all duration-200 ease-in-out text-[#111827] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)] hover:border-[#111827] max-md:w-full max-md:max-w-full">
            <h3 className="text-base mb-2 text-inherit">Project Title 2</h3>
            <p className="mb-6 max-w-[800px] text-gray-600 text-[0.95rem]">Short description of Project 2.</p>
            <a href="#" className="inline-block m-2 text-[#111827] no-underline font-medium text-[0.9rem] hover:underline">View Project</a>
            <a href="https://www.example.com/" className="inline-block m-2 text-[#111827] no-underline font-medium text-[0.9rem] hover:underline">Github repo</a>
          </div>
          <div className="project bg-gray-50 py-5 px-[1.4rem] rounded-2xl w-[280px] shadow-none border border-gray-300/80 transition-all duration-200 ease-in-out text-[#111827] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)] hover:border-[#111827] max-md:w-full max-md:max-w-full">
            <h3 className="text-base mb-2 text-inherit">Project Title 3</h3>
            <p className="mb-6 max-w-[800px] text-gray-600 text-[0.95rem]">Short description of Project 3.</p>
            <a href="#" className="inline-block m-2 text-[#111827] no-underline font-medium text-[0.9rem] hover:underline">View Project</a>
            <a href="https://www.example.com/" className="inline-block m-2 text-[#111827] no-underline font-medium text-[0.9rem] hover:underline">Github repo</a>
          </div>
        </div>
      </section>
    </main>
  );
}