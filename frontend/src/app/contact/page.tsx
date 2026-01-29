export default function ContactPage() {
  return (
    <main className="pt-[88px] pb-16 max-md:pt-[76px] max-md:pb-10">
      <section id="Contact" className="min-h-screen py-10 px-3 max-w-full my-0 mx-0 mb-[18px] flex flex-col justify-center items-center text-center bg-white rounded-none shadow-[0_18px_45px_rgba(15,23,42,0.04)] border border-slate-300/18 max-md:min-h-auto max-md:py-11 max-md:px-4">
        {/* Contact Heading - Moved Upward */}
        <div className="max-w-[1200px] w-full mb-8 text-left">
          <h2 className="text-[2.5rem] mb-3 text-[#111827] font-normal tracking-tight">Contact</h2>
          <p className="text-sm text-gray-500 text-[0.95rem]">Get in touch</p>
        </div>

        {/* Two Column Layout - Contact Details and Form */}
        <div className="flex flex-row gap-12 items-start max-md:flex-col max-w-[1200px] w-full">
          {/* Left Column - Contact Information Containers */}
          <div className="w-[500px] space-y-4 max-md:w-full">
            {/* Location Container */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200/50 text-left">
              <h3 className="text-base font-semibold text-[#111827] mb-2">LOCATION</h3>
              <p className="text-gray-600 text-[0.95rem]">Dasmariñas, Cavite</p>
            </div>
            
            {/* Email Container */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200/50 text-left">
              <h3 className="text-base font-semibold text-[#111827] mb-2">EMAIL</h3>
              <a href="mailto:dejesusjasmine9@gmail.com" className="text-gray-600 text-[0.95rem] no-underline hover:text-[#111827] hover:underline transition-colors">
                dejesusjasmine9@gmail.com
              </a>
            </div>
            
            {/* Website Container */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200/50 text-left">
              <h3 className="text-base font-semibold text-[#111827] mb-2">WEBSITE</h3>
              <a href="https://jasminedejesus.github.io" className="text-gray-600 text-[0.95rem] no-underline hover:text-[#111827] hover:underline transition-colors">
                jasminedejesus.github.io
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form Container */}
          <div className="flex-1 min-w-[600px] max-md:min-w-0 max-md:w-full">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200/50 h-full">
              <form action="#" method="post" className="flex flex-col text-left h-full">
                <label htmlFor="name" className="mb-2 font-medium text-[#111827] text-sm">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="py-3 px-4 mb-6 border border-gray-300 rounded-md bg-white text-[#111827] font-sans focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all" 
                />

                <label htmlFor="email" className="mb-2 font-medium text-[#111827] text-sm">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="py-3 px-4 mb-6 border border-gray-300 rounded-md bg-white text-[#111827] font-sans focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all" 
                />

                <label htmlFor="message" className="mb-2 font-medium text-[#111827] text-sm">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="py-3 px-4 mb-6 border border-gray-300 rounded-md bg-white text-[#111827] font-sans min-h-[200px] resize-y focus:outline-none focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all" 
                />

                <button 
                  type="submit" 
                  className="bg-[#111827] text-white border-none py-3 px-8 rounded-md cursor-pointer font-medium transition-all duration-200 ease-in-out hover:bg-[#020617] hover:shadow-lg hover:-translate-y-0.5 w-fit mt-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

