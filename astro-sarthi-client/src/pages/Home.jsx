import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero / Image Section */}
      <div className="cassroule position-relative">
        <img src="/img/Circle.png" alt="Rotating Circle" className="circle-img" />
        <img src="/img/Icon.png" alt="Overlay Icon" className="overlay-img" />
        <img src="/img/Hero Bg@3x.png" alt="Main Visual" className="background-img" />
      </div>

      {/* Chat Now Section */}
      <div className="chat-now-section">
        <div className="container-fluid px-0">
          <div className="chat-now-content d-flex justify-content-between align-items-center">
            <img src="/img/ChatNow Baba.png" alt="Astrologer" className="chat-now-image-left" />
            <button className="chat-now-button">Chat Now</button>
            <img src="/img/ChatNow Phone.png" alt="Chat UI" className="chat-now-image-right" />
          </div>
        </div>
      </div>

      {/* Services & Astrologers Section */}
      <section className="main-section-with-bg py-5" id="services">
        <div className="container text-center text-dark">
          <h2 className="text-white bg-maroon d-inline-block px-4 py-2 rounded-pill mb-5">Our Services</h2>
          <div className="row justify-content-center">
            {['Chat with astro.jpg', 'kundali.png', 'Online Puja.jpg', 'Panchang.png', 'Wheel.png'].map((img, index) => (
              <div className="col-6 col-md-2 mb-4" style={{ minWidth: '120px' }} key={index}>
                <div className="service-card">
                  <img src={`/img/${img}`} alt="Service" className="service-icon" />
                </div>
                <p className="service-label">{['CHAT WITH ASTROLOGERS', 'KUNDALI', 'ONLINE PUJA', 'PANCHANG', 'HOROSCOPE'][index]}</p>
              </div>
            ))}
          </div>

          <h2 className="text-white bg-maroon d-inline-block px-4 py-2 rounded-pill mb-5 mt-5">Our Astrologers</h2>

          {/* Desktop View */}
          <div className="row justify-content-center d-none d-md-flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="col-6 col-sm-4 col-md-2 mb-4" key={i}>
                <div className="astrologer-card">
                  <div className="astrologer-img mx-auto mb-2"></div>
                  <div className="astrologer-name">Astrologer {i + 1}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div id="astroCarousel" className="carousel slide d-md-none" data-bs-ride="carousel">
            <div className="carousel-inner">
              {Array.from({ length: 5 }).map((_, i) => (
                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                  <div className="astrologer-card text-center">
                    <div className="astrologer-img mx-auto mb-2"></div>
                    <div className="astrologer-name">Astrologer {i + 1}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#astroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#astroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Daily Horoscope Section */}
      <section className="daily-horoscope-section horoscope-bg py-5">
        <div className="container text-center mb-4">
          <h2 className="daily-horoscope-heading">Daily Horoscope</h2>
          <div className="row g-3">
            {['AQUARIUS', 'ARIES', 'CANCER', 'CAPRICON', 'GEMINI', 'LEO', 'LIBRA', 'PISCES', 'SAGITTARIUS', 'SCORPIO', 'TAURUS', 'VIRGO'].map((sign, i) => (
              <div className="col-6 col-sm-4 col-md-2" key={i}>
                <div className="horoscope-card">
                  <img src={`/img/SIGN  NEW/${sign}.png`} alt={`Horoscope ${i + 1}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puja Samagri Section */}
      <section className="puja-samagri-section puja-bg text-center">
        <div className="puja-content container h-100 d-flex flex-column justify-content-center align-items-center">
          <h2 className="puja-samagri-heading">Download Puja Samagri PDF</h2>
          <form className="puja-search-form mt-3 d-flex">
            <input type="text" className="form-control" placeholder="Search for Puja Samagri..." />
            <button type="submit" className="btn btn-dark ms-2">Search</button>
          </form>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-wrapper" id="about">
        <div className="about-us-upper text-center py-4">
          <div className="container">
            <h2 className="about-heading mb-4">About Us</h2>
            <p className="about-text"><strong>At Astro Sarthi</strong> astrology isn’t just about predicting events—it's about understanding the cosmic blueprint of your life...</p>
            <p className="about-text">Our platform is designed to be your personal gateway to the cosmos...</p>
            <p className="about-text">With a blend of ancient wisdom and modern insight, our team of expert astrologers...</p>
            <p className="about-text">Join us in exploring the stars, because your journey is written in the cosmos...</p>
          </div>
        </div>

        <div className="about-us-lower py-4">
          <div className="container">
            <div className="row g-0 text-center text-md-start">
              {['Links', 'Festivals', 'Remedies', 'FYQ', 'Contact Us'].map((title, i) => (
                <div className={`col-md-${i === 4 ? '4' : '2'} col-6 footer-column`} key={i}>
                  <h5 className="footer-title">{title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
