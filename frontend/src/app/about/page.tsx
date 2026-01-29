export default function AboutPage() {
  return (
    <main className="pt-[88px] pb-16 max-md:pt-[76px] max-md:pb-10">
      <section className="about-me min-h-screen py-10 px-3 max-w-full my-0 mx-0 mb-[18px] flex flex-col justify-center items-center text-center bg-white rounded-none shadow-[0_18px_45px_rgba(15,23,42,0.04)] border border-slate-300/18 max-md:min-h-auto max-md:py-11 max-md:px-4">
        <div className="section-inner max-w-[640px] ml-[0.7rem] text-left max-md:max-w-full">
         
            {/* About Me Heading - Moved Upward */}
        <div className="max-w-[1200px] w-full mb-8 text-left">
          <h2 className="text-[2.5rem] mb-3 text-[#111827] font-normal tracking-tight">About Me</h2>
          <p className="text-sm text-gray-500 text-[0.95rem]">A glimpse into my journey</p>
        </div>
          <p className="mb-6 max-w-[800px] text-gray-600 text-[0.95rem]">
            I'm a 3rd-year Computer Science student passionate about exploring
            different areas in technology. I enjoy learning new skills and
            building things that helps me to grow.
          </p>
          <p className="mb-6 max-w-[800px] text-gray-600 text-[0.95rem]">
            Currently, I'm exploring web development, databases, and cloud
            computing. As a student, my journey is still unfolding, but I'm
            eager to collaborate, learn from real-world experiences, and
            contribute to helpful projects.
          </p>
          <p className="mb-6 max-w-[800px] text-gray-600 text-[0.95rem]">
            When I'm not coding, you'll often find me reading or simply
            bed-rotting — recharging before diving back into tech.
          </p>
        </div>
      </section>
    </main>
  );
}