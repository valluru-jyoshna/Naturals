import React from 'react';
import './App.css';                 // Move your CSS into this file or add inline styles as shown
const App = () => {
  return (
    <div>
{/* Navbar */}
      <header className="navbar">
        <div className="container">
        <h1 className="logo">Naturals</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
{/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h3>Welcome to Naturals</h3>
          <a href="#services" className="btn">Explore Services</a>
        </div>
      </section>
{/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="service">
            <h3>Hair Care</h3>
            <img
              src="https://i.pinimg.com/736x/47/28/34/472834812d456a3677f008142705428a.jpg"
              alt="Hair Care"
              style={{ objectFit: 'contain' }}
            />
            <p>Professional haircuts, styling, and treatments.</p>
            <a href="#hair-care-prices" className="btn">View Prices</a>
          </div>
          <div className="service">
            <h3>Skin Care</h3>
            <img
              src="https://i.pinimg.com/736x/1d/1f/e6/1d1fe6846724676b340cb2ead7161aaa.jpg"
              alt="Skin Care"
              style={{ objectFit: 'contain' }}
            />
            <p>Facials, clean-ups, and rejuvenation treatments.</p>
            <a href="#hair-care-prices" className="btn">View Prices</a>
          </div>
          <div className="service">
            <h3>Bridal MakeUps</h3>
            <img
              src="https://i.pinimg.com/736x/6a/e5/bf/6ae5bf3f5af0de7fc044679fee7a6b58.jpg"
              alt="Bridal MakeUps"
            />
            <p>Exclusive bridal packages for your special day.</p>
            <a href="#bridal-care-prices" className="btn">View Prices</a>
          </div>
        </div>
      </section>
{/* Hair Care Prices */}
      <section id="hair-care-prices" className="price-section">
        <div className="price-card">
          <h3>Hair Care Prices</h3>
          <ul>
            <h3>Threading</h3>
            <li><span>Eye Brows</span><span>70/-</span></li>
            <li><span>Upper Lips</span><span>50/-</span></li>
            <li><span>Chin</span><span>40/-</span></li>
            <li><span>Face Threading</span><span>200/-</span></li>
            <h3>Waxing</h3>
                <li><span>Upper Lips</span><span>80/-</span></li>
                <li><span>Chin</span><span>200/-</span></li>
                <li><span>Total Face Wax</span><span>300/-</span></li>
                <h3>Honey Wax</h3>
                <li><span>Full Hands</span><span>400/-</span></li>
                <li><span>Full Legs</span><span>800/-</span></li>
                <li><span>Full Body</span><span>2000/-</span></li>
                <h3>Roll On Wax</h3>
                <li><span>Full Hands</span><span>600/-</span></li>
                <li><span>Full Legs</span><span>1500/-</span></li>
                <li><span>Full Body</span><span>2700/-</span></li>
                <h3>Hair cut</h3>
                <li><span>Baby Cut</span><span>200/-</span></li>
                <li><span>U Cut - V Cut - Straight Cut</span>  <span>500/-</span></li>
                <li><span>Layer Cut</span><span>1500/-</span></li>
                <li><span>Feather Cut</span><span>1800/-</span></li>
                <li><span>Step Cut</span><span>1200/-</span></li>
                <li><span>Featherless Layer</span><span>2000/-</span></li>
                <li><span>Stepless Layer</span><span>1800/-</span></li>
                <h3>Hair Treatments</h3>
                <h3>Straightening(Tempporary)</h3>
                <li><span>Short</span><span>700/-</span></li>
                <li><span>Medium</span><span>1200/-</span></li>
                <li><span>Long </span><span>1800/-</span></li>
                <h3>Straightening(Permanent)</h3>
                <li><span>Short</span><span>6999/-</span></li>
                <li><span>Medium</span><span>8999/-</span></li>
                <li><span>Long </span><span>11999/-</span></li>
                <h3>Keratin</h3>
                <li><span>Short Hair</span><span>3999/-</span></li>
                <li><span>Medium Hair</span><span></span>4999/-</li>
                <li><span>Long Hair</span><span>69999/-</span></li>
            </ul>
            <a href="#services">Back to Services</a>
        </div>
      </section>
      <section id="skin-care-prices" className="price-section">
        <div className="price-card">
            <h3>Skin Care Prices</h3>
            <h3>Facials</h3>
            <ul>
                <li>CleanUp<span></span><span>650/-</span></li>
                <li><span>Fruit Facial</span><span>800/-</span></li>
                <li><span>Papaya Facial</span><span>1200/-</span></li>
                <li><span>Mixed Facial</span><span>1300/-</span></li>
                <li><span>Orange Facial</span><span>1200/-</span></li>
                <h3>Gold Facials</h3>
                <li><span>Natures</span><span>1500/-</span></li>
                <li><span>Joves</span><span>1800/-</span></li>
                <h3>Tan packs</h3>
                <li><span>Face and Neck</span><span>400/-</span></li>
                <li><span>Face</span><span>250/-</span></li>
                <li><span>Hand</span><span>800/-</span></li>
                <li><span>Feet</span><span>300/-</span></li>
                <h3>O3+Detan</h3>
                <li><span>Face and Neck</span><span>1000/-</span></li>
                <li><span>Face</span><span>700/-</span></li>
                <li><span>Hands</span><span>2000/-</span></li>
                <h3>Skin Treatments</h3>
                <li><span>Permanent Eyebrows</span><span>15000/-</span></li>
                <li><span>Permanent Lipstick</span><span>10000/-</span></li>
                <li><span>BB Glow</span><span>5000/-</span></li>
                <li><span>Hydra Facials</span><span>5999/-</span></li>
                <li><span>Skin Peels</span><span>3999/-</span></li>
                <li><span>Lazer Treatments(10 seatings)</span><span>15000/-</span></li>
                <li><span>Carbon Facials</span><span>4999/-</span></li>
                <li><span>Skin Tags</span><span>499/-</span></li>
                <h3>Makeup</h3>
                <li>Party Makeup<span></span><span>2500/-</span></li>
                <li>Normal Makeup<span>1500/-</span></li>
            </ul>
            <a href="#services">Back to Services</a>
        </div>
    </section>
    <section id="bridal-care-prices" className="price-section">
        <div className="price-card">
            <h3>Bridal MakeUps Prices</h3>
            <ul>
                <h3>Makeups</h3>
                <li><span>Saree Draping</span><span>1500/-</span></li>
                <li><span>Bridal Makeup</span><span>5000/-</span></li>
                <h3>facials</h3>
                <li><span>Shehanaaz</span><span>3500/-</span></li>
                <li><span>Natures</span><span>3000/-</span></li>
                <li><span>O3+</span><span>4800/-</span></li>
                <li><span>Pearl Facial</span><span>3400/-</span></li>
                <li><span>Diamond Facial</span><span>3500/-</span></li>
                <li><span>Platinum Facial</span><span>3600/-</span></li>
                <h3>Mehndi</h3>
                <li><span>Arabic(Front and Back)</span><span>1000/-</span></li>
                <li><span>Indian Designs</span><span>800/-</span></li>
                <li><span>Bridal Mehndi</span><span>3000/-</span></li>
                <li><span>Nail Art without Extensions</span><span>600/-</span></li>
                <li><span>Nail Art with Extensions</span><span>2000/-</span></li>
                <h3>Hairdo</h3>
                <li><span>Indian Bridal Style(Basic)</span><span>800/-</span></li>
                <li><span>Indian Bridal Style(with natural flowers)</span><span>1500/-</span></li>
                <li><span>Indian Bridal Style(with hair extensions)</span><span>1900/-</span></li>
                <li><span>Arabic Style</span><span>1500/-</span></li>
                <li><span>Arabic Bridal Style(with hair extensions)</span><span></span></li>
            </ul>
            <a href="#services">Back to Services</a>
        </div>
    </section>
{/* Exclusive offers IMAGE */}
    <div className="image-page-container">
      <h2>Exclusive Offers</h2>
      <img
        src="https://sabsastaa.com/wp-content/uploads/2023/10/Natural-Salon-Price-List.webp"
        id="img"
        alt="Salon Price List"
        style={{ width: '800px', height: '500px' }}
      />
    </div>
{/* About Us page */}
    <div id="about" className="about-us-container">
      <div className="about-us-content">
      <img src="https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/frnachisee.jpg" alt="loading..."></img>
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
            Naturals was conceived with the idea of the modern Indian. Founded by K. Veena, 
            whose knowledge of the international beauty industry pioneered a new era in the hair
            and beauty care industry in India, Naturals has made a path-breaking change in the
            way the beauty industry has been perceived.
          </p>
          <p>
            So in the early 2000s, she made that dream a reality by setting up her first salon in Chennai.
            It took her only a while to understand the market potential and the ever-increasing demand for
            professional grooming. In 2004 her husband co-founder & CEO, CK Kumaravel joined and ever since
            then, the Naturals team has been able to meet every challenge in this competitive industry.
          </p>
          <p>
            Today, Naturals is India's most prominent chain of hair and beauty salons. Thanks to our
            world-class service, courteous staff and loyal support from our patrons, Naturals now has 
            750+ salons across the sub-continent and aims to expand to 3000 salons by 2029.
          </p>
        </div>
        </div>
    </div>
{/* video*/}
  <div className="video-page-container">
      <h1>Naturals Beauty Salon</h1>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/4jsFT4ufMs8"
        title="Naturals Beauty Salon Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        Enjoy this video showcasing Naturals Beauty Salon's expertise in social media video production!
      </p>
    </div>
{/* Franchise */}
  <div className="abt-fo-c">
      {/* Top Section */}
      <div className="abt-fo-c-top">
        <h1>The World Of Naturals</h1>
      </div>
      {/* Bottom Section */}
      <div className="abt-fo-c-bottom">
        {/* Images */}
        <div className="abt-fo-c-bottom-fh">
          <img
            className="abt-fo-c-bottom-fh-img"
            id="fran-opp-1"
            src="https://www.cmucollege.com/wp-content/uploads/2019/09/iStock-682961518.jpg"
            alt="Loading..."
          />
          <img
            className="abt-fo-c-bottom-fh-img"
            id="fran-opp-2"
            src="https://static.vecteezy.com/system/resources/previews/023/458/326/non_2x/beautiful-manicure-illustration-ai-generative-free-photo.jpg"
            alt="Loading..."
          />
          <img
            className="abt-fo-c-bottom-fh-img"
            id="fran-opp-3"
            src="http://2.bp.blogspot.com/-2W_7I7x0dlo/UglH9g6i9rI/AAAAAAAABHc/86PYR0EBYrU/s1600/shutterstock_114182782.jpg"
            alt="Loading..."
          />
          <img
            className="abt-fo-c-bottom-fh-img"
            id="fran-opp-4"
            src="https://nb-beauty.de/wp-content/uploads/2019/12/Make-up-Hairstyling-scaled-2560x1280.jpeg" 
            alt="Loading..."
          />
          <img
            className="abt-fo-c-bottom-fh-img"
            id="fran-opp-5"
            src="https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/detan.jpg"
            alt="Loading..."
          />
          <img
            className="abt-fo-c-bottom-fh-img"
            id="fran-opp-6"
            src="https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/Hair+spa.jpg"
            alt="Loading..."
          />
        </div>
{/* know Button */}
<section id="About Us" className="i">
        <div className="abt-fo-c-bottom-btns">
        <a href="#" className="abt-fo-c-bottom-btn">Know More</a>
        </div>
        </section>
      </div>
    </div>
<section id="appointment" className="appointment-section">
      <div className="container">
        <h2>Book an Appointment</h2>
        <p>Plan your visit to Naturals Beauty Salon and experience our world-class services.</p>

        <form className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select id="service" required>
              <option value="">-- Choose a Service --</option>
              <option value="hair-care">Hair Care</option>
              <option value="skin-care">Skin Care</option>
              <option value="bridal-makeup">Bridal Makeup</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input type="date" id="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input type="time" id="time" required />
          </div>
          <button type="submit" className="btn-submit">Book Appointment</button>
        </form>
      </div>
    </section>
<section id="appointment" className="appointment-section">
      <div className="container">
        <h2>Book an Appointment</h2>
        <p>Plan your visit to Naturals Beauty Salon and experience our world-class services.</p>

        <form className="appointment-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select id="service" required>
              <option value="">-- Choose a Service --</option>
              <option value="hair-care">Hair Care</option>
              <option value="skin-care">Skin Care</option>
              <option value="bridal-makeup">Bridal Makeup</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input type="date" id="date" required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input type="time" id="time" required />
          </div>
          <button type="submit" className="btn-submit">Book Appointment</button>
        </form>
      </div>
    </section>    
{/* Footer */}
        <footer className="footer">
        <p>© 2024 Naturals. All rights reserved.</p>
      </footer>
      </div>
  );
};

export default App;
