import React from "react";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
import gallery9 from "../assets/gallery9.jpeg";
import who1 from "../assets/who1.jpeg";
import who2 from "../assets/who2.jpeg";
import who3 from "../assets/who3.jpeg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img
          src={who3} // Replace with your hero image
          alt="Fall 25 Collection"
          className="hero-img"
        />
        <h1 className="hero-text">FALL25 collection</h1>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
         <div className="gallery-grid">
          <img src={gallery1} alt="Gallery look 1" />
           <img src={gallery2} alt="Gallery look 2" />
           <img src={gallery3} alt="Gallery look 3" />
           <img src={gallery4} alt="Gallery look 4" />
             <img src={gallery5} alt="Gallery look 5" />
</div>

        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <h2>Made With Intention</h2>
        <p>
          Zip up hoodies: Hoodie stands out with its clean, details features patchwork embroidery, 
          embodying the perfect blend of streetwear fashion and a touch of contemporary style. 
          Inspired by classic silhouettes, the hoodie features a drop shoulder silhouette that 
          adds a touch of laid back sophistication. Zipper runs from the bottom all the way to the 
          top. Increased versatility and convenience, allowing you to easily adjust how much of the 
          hoodie is open or closed depending on the temperature, activity level, or desired style, 
          making it easier to put on and take off without needing to pull the whole garment over your head.
         Crafted from lightweight 320 GSM fabric, it offers both durability and comfort. With a composition of 100 percent cotton. 
         Hoodie has a hefty and structured fit. This hoodie is not only a fashion statement but also a commitment to longevity.
         Designed in Canada. At Najia, our mission is to create high quality,
          uniquely designed streetwear that encourages individuals to express their identity and style with confidence.
        </p>
      </section>

      {/* Collection Section */}
      <section className="collection">
        <h2>FALL 25 Collection</h2>
        <div className="collection-grid">
          <img src={gallery6} alt="Gallery look 1" />
           <img src={gallery7} alt="Gallery look 2" />
           <img src={gallery9} alt="Gallery look 3" />
        </div>
        <p>
          This stylish and comfortable denim mini skort features a low rise waist, pleated hem, and built-in knit shorts for added coverage. 
          Designed for versatility, it showcases a unique functional zipper detail on the pleats, allowing you to adjust the look effortlessly. 
          Wear it zipped for a sleek finish or unzip to create a bold, dynamic silhouette.

         This denim fabric, composed of 98% cotton and 2% viscose, 
         offers a blend of traditional denim characteristics with a touch of added softness and drape, 
         resulting in a comfortable and versatile fabric. The denim skort itself is minimal to not stretch the build of a lower rise waistband,
          offering plenty of flexibility for added comfort and ease of movement.

Designed in Canada. At D.Najac, our mission is to create high quality, 
uniquely designed streetwear that empowers individuals to express their identity and style with confidence.
        </p>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability">
        <h2>Our Process & Standards</h2>
        <ul>
          <li>
            <strong>Fabric:</strong> Ethically sourced cotton and sustainable
            materials designed to minimize waste.
          </li>
          <li>
            <strong>People:</strong> Fair labor practices, supporting artisans
            and workers with fair pay and safe environments.
          </li>
          <li>
            <strong>Impact:</strong> Clothing that lasts longer, reducing fast
            fashion waste cycles.
          </li>
        </ul>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Naija is more than a place. It’s an attitude. A bold energy. A state of mind.

          Born from the pulse of a name that carries rhythm, grit, and originality, 
          Naija isn’t defined by geography, it’s defined by spirit. Our pieces don’t follow borders or expectations. 
          They’re those who wear, just like the people we design for.

          Inspired by the hustle, the confidence, and the unapologetic cool of a generation that doesn’t wait for permission. 
          Naija is for the ones who wear identity without exception.

        We’re not here to check cultural boxes. We’re here to create pieces that are clean in form and rich in attitude. 
         Every drop is inspired back to its essence and purpose. Naija is about owning your narrative, expressing your attitude,
          and showing up as your most authentic self. No labels, no boxes, just expression. Naija is about owning your space, your power.

         The influence? Global. The designs? Driven by mood, movement, and memories. In butter, not margarine. In black, not blue.

          If you’ve ever been in Lagos, London, or LA. If you move with purpose and define where you are, not where you’re from, you’re already one of us.
        </p>
        <div className="who-grid">
          <img src={gallery9} alt="Gallery look 1" />
           <img src={who1} alt="Gallery look 2" />
           <img src={who2} alt="Gallery look 3" />
        </div>
      </section>

      {/* Footer
      <footer className="site-footer">
        <p>
          THE NAME NODS TO ROOTS—THE STYLE MOVES BEYOND THEM. GLOBAL STREETWEAR.
        </p>
        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
        </div>
      </footer> */}
    </div>
  );
}
