import React from 'react';
import './Home.css';

const Home = () => {
  return (
    
  
    <div className="home"><br></br><br></br><br></br>
      <section>
        <h1 className="welcome-heading">Say Hello To Your Style</h1>
        <p>Your Fashion Begins Here..</p>
      </section>
      
      <section className="about">
        <h2>Our Story</h2>
      <p >&nbsp;At OFFICE COUCHER, we believe that fashion is an art form. Our dedicated team of fashion enthusiasts scours the globe to bring you a carefully curated selection of garments and accessories. Every piece you find in our boutique is a testament to our commitment to quality and style.Our boutique is not just a place to shop; it's a place to connect with like-minded fashion enthusiasts. We host events, workshops, and style consultations to foster a sense of community and to help you develop your unique fashion identity.</p>
      </section>

      <section className="programs">
        <h2>Rubric</h2>
        <p>
          Women,
          Men,
          Beauty and Grooming,
          Accessories,
          Footwear
        </p>
        <button>Outlook</button>
      </section>

      <section className="admissions">
        <h2>Our Feathers</h2>
        <p>
        OFFICE COUTURE is not just a fashion destination; it's a local style haven that's closer than you think. We're excited to introduce our multiple branches, each thoughtfully designed to bring the world of fashion right to your neighborhood.
        </p>
        <button>See The Colors</button>
      </section>

      <section className="contact">
        <h2>Get In Touch</h2>
        <p>
        Thank you for your interest in OFFICE COUTURE. We value your feedback, questions, and suggestions, and we're here to assist you in any way we can. Please feel free to reach out to us using the contact information below:<br></br><br></br>
        Boutique Address:
        Anna Street
        Chennai,Tamil Nadu,63900<br></br><br></br>
        Business Hours:
        Monday - Friday: 10:00 AM - 7:00 PM
        Saturday: 11:00 AM - 6:00 PM
        Sunday: Closed
        </p>
        <button>Green It</button>
      </section>
     
    </div>
    
  
  );
};

export default Home;
