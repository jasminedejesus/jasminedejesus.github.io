export default function ContactPage() {
  return (
    <main>
      <section id="Contact">
        <div className="section-inner">
          <h2>Contact</h2>
          <p>Get in Touch</p>
        </div>
        <div className="container-contact-information">
          <div className="contact-item">
            <h3>Location</h3>
            <p>Dasmariñas, Cavite</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:dejesusjasmine9@gmail.com">
              dejesusjasmine9@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <h3>Website</h3>
            <a href="https://jasminedejesus.github.io">
              jasminedejesus.github.io
            </a>
          </div>
        </div>
        <div className="container-contact">
          <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}

