import '../styles/manual.css';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const togglePrograms = () => setShowPrograms(!showPrograms);
  const toggleCard = (index: number) => setActiveCard(prev => (prev === index ? null : index));

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className={darkMode ? 'dark-mode layout' : 'light-mode layout'}>
     <Head>
  <title>Welcome to Beezetduo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Personal portfolio of Bilyaminu Muhammad BZ, Web Developer, Project Manager, and Founder of Beezetduo Digital Solution."
  />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap" rel="stylesheet" />
</Head>


      {/* Navigation */}
      <div id="container" className="container top-nav" data-aos="fade-down">
        <header className="topbar">
          <a href="#hero">
<Image src="/logo.png" alt="Beezetduo Logo" className="logo" width={100} height={50} />
          </a>
          <nav>
            <button><a href="#hero">Home</a></button>
            <button><a href="#about">About</a></button>
            <button><a href="#services">Services</a></button>
            <button><a href="#programs">FG Programs</a></button>
            <button><a href="#contact">Contact</a></button>
          </nav>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
      </div>

      {/* Hero Section */}
      <main>
        <div id="hero" className="container hero" data-aos="zoom-in">
          <h2  data-aos="fade-right" data-aos-delay="200" className="hero-heading">Welcome to Beezetduo</h2>
          <p className="hero-slogan" data-aos="fade-left" data-aos-delay="400">
            Solving Africas digital problems one innovation at a time. We build tech that empowers, transforms, and connects.
          </p>
        </div>

        {/* About Section */}
        <div id="about" className="container about-section" data-aos="fade-up">
       <button>  <h2
            onClick={() => setShowAbout(!showAbout)}
            style={{ cursor: 'pointer', textDecoration: 'underline', color: '#0070f3' }}
            data-aos="zoom-in-up"
          >
            About Us <br /> Click here
          </h2>
</button> 
          {showAbout && (
            <div className="about-content" data-aos="fade-up" data-aos-delay="200">
              <h3><strong>Beezetduo Digital Solutions</strong></h3>
              <p><strong>🚀 Who We Are:</strong><br />
                At Beezetduo Digital Solutions, we are more than just developers we are passionate digital solutionists on a mission to transform ideas into impactful realities.
              </p>
              <p><mark>Founded by Bilyaminu Muhammad & Zarau Muhammad.</mark></p>
              <p><em>Beezetduo</em> is a growing tech venture dedicated to empowering individuals, startups, and organizations through innovation, creativity, and strategic digital solutions.</p>

              <h4>🧠 What We Do</h4>
              <ul>
                <li><strong>Web Development:</strong> Responsive websites and dynamic web apps.</li>
                <li><strong>Desktop Applications:</strong> Electron.js-based cross-platform tools.</li>
                <li><strong>Project Management:</strong> Agile and timely project delivery.</li>
              </ul>

              <h4>💡 Why We Do It</h4>
              <p>We aim to bridge the digital literacy gap through training, mentorship, and outreach.</p>

              <h4>📚 Knowledge Sharing & Capacity Building</h4>
              <ul>
                <li>Free Digital Skill Trainings</li>
                <li>Workshops & Webinars</li>
                <li>Mentorship Programs</li>
              </ul>

              <h4>🌍 Our Vision</h4>
              <p>To become a leading digital hub in Africa solving problems through innovation.</p>

              <h4>🤝 Lets Connect</h4>
              <p>Whether youre building, learning, or collaborating, were here for you.</p>
            </div>
          )}
        </div>

        {/* Services Section */}
        <div id="services" className="container what-section" data-aos="fade-up">
          <h2 data-aos="fade-up">Our Services</h2>
          <div className="grid" data-aos="zoom-in-up" data-aos-delay="200">
            <div className="card" onClick={() => toggleCard(0)} data-aos="flip-left">
              <h3>Web Development</h3>
              {activeCard === 0 && <p>We build responsive and modern websites and web apps.</p>}
            </div>

            <div className="card" onClick={() => toggleCard(1)} data-aos="flip-right">
              <h3>Desktop Apps</h3>
              {activeCard === 1 && <p>We create cross platform admin tools.</p>}
            </div>

            <div className="card" onClick={() => toggleCard(2)} data-aos="flip-left">
              <h3>Project Management</h3>
              {activeCard === 2 && <p>We lead development teams and deliver solutions on time.</p>}
            </div>
          </div>
        </div>

            {/* FG Programs Section */}
        <section className="container program-section" id="programs" data-aos="fade-up">
          <h2>Federal Government Programs</h2>
          <button onClick={togglePrograms} className="toggle-btn">
            {showPrograms ? 'Hide Programs ▲' : 'Show Programs ▼'}
          </button>

          {showPrograms && (
            <div className="program-dropdown">
              <ul>
                <li><a href="https://nationalyouthconfab.gov.ng/register/delegate" target="_blank">NATIONAL YOUTH CONFERENCE 2025</a></li>
                <li><a href="https://www.tvet.education.gov.ng/signup/" target="_blank">FME TVET APPLICATION</a></li>
                <li><a href="https://yeidep.org/registration.php" target="_blank">YEIDEP GRANT APPLICATION</a></li>
                <li><a href="https://portal.smedan.gov.ng/" target="_blank">SMEDAN ADEP</a></li>
                <li><a href="https://leep.gov.ng/take-the-leep/" target="_blank">LEEP</a></li>
                <li><a href="https://youthcred.com/" target="_blank">FGN Youth Loans</a></li>
                <li><a href="https://obl.nmfb.com.ng" target="_blank">NMFB Loans</a></li>
                <li><a href="https://thegreenmoneyproject.ng/registration/" target="_blank">Green Money Project</a></li>
                <li><a href="http://rapid.boi.ng/register" target="_blank">BOI RAPID</a></li>
                <li><a href="https://nelf.gov.ng/" target="_blank">NELFUND Student Loan</a></li>
                <li><a href="https://credicorp-register.ng" target="_blank">Credicorp</a></li>
                <li><a href="http://www.education.gov.ng/" target="_blank">Federal Scholarship Board</a></li>
                <li><a href="https://supa.itf.gov.ng/signup" target="_blank">SUPA Training</a></li>
                <li><a href="https://programs.startup.gov.ng/gitexnigeria" target="_blank">NITDA GITEX</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfMXDxuBHt_fJdKuGPcA5khE_IpnKr39OPFDkiaAjfZA_XJ-Q/viewform" target="_blank">NPRGS</a></li>
                <li><a href="https://www.learn.smedigitalacademy.com/classes?sort=newest" target="_blank">SME Digital Academy</a></li>
                <li><a href="https://delther.pictt.gov.ng/" target="_blank">PICTT Training</a></li>
                <li><a href="https://noa.gov.ng/" target="_blank">NOA Training</a></li>
              </ul>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <div id="contact" className="container touch-section" data-aos="fade-up">
          <h2 data-aos="fade-up">Get in Touch</h2>
          <p data-aos="fade-in">Email: <a href="mailto:mbkwashabawa@gmail.com">mbkwashabawa@gmail.com</a></p>
          <a href="https://wa.me/+2348148475745" target="_blank" className="whatsapp-button" data-aos="fade-right">Chat on WhatsApp</a>
          <a href="https://www.facebook.com/Kwashabawajunior" target="_blank" className="facebook-button" data-aos="fade-left">Facebook</a>
          <a href="https://x.com/Bilyami61916154" target="_blank" className="twitter-button" data-aos="fade-up">X (Twitter)</a>
          <a href="https://www.instagram.com/beezetduo/" target="_blank" className="instagram-button" data-aos="zoom-in">Instagram</a>
        </div>

        {/* Blog Section */}
        <div id="blog" className="container blog-section" data-aos="fade-up">
          <h2 data-aos="fade-right">Blogs</h2>
          <ul>
    <li><a href="https://medium.com/@mbkwashabawa" target="_blank">How We Solve Digital Problems</a></li>
    <li><a href="https://medium.com/@mbkwashabawa" target="_blank">Building Cross-Platform Apps</a></li>
  </ul>
          <a href="https://medium.com/@mbkwashabawa" target="_blank" className="Medium-button" data-aos="fade-left">Read More</a>
        </div>

        {/* Resume Section */}
        <div id="resume" className="container resume-section" data-aos="fade-up">
          <h2 data-aos="fade-down">Resume</h2>
          <a href="BeezetduoWeb/beezetduo/BZ resume.pdf" download data-aos="zoom-in">Click here</a><br />
          <p data-aos="fade-up">To download my resume.</p>
        </div>
        {/* Scroll Button */}
        <button
          className="action-button"
          onClick={() => {
            const section = document.getElementById("footer");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          data-aos="fade-up"
        >
          ↓ Scroll Down
        </button>
                {/* Footer Section */}
        <footer className="container footer-section" data-aos="fade-up">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; {new Date().getFullYear()} Beezetduo Digital Solutions</p>
              <p>Powered by Bilyaminu Muhammad BZ</p>
            </div>
            <div className="footer-right">
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#programs">Programs</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
