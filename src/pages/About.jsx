import React from "react";
import "../styles/About.css";

// Example image imports (replace with your actual files from assets)
import who2 from "../assets/who2.jpeg";
import gallery7 from "../assets/gallery7.jpeg";
// import who4 from "../assets/who4.jpeg";

export default function About() {
  return (
    <main className="about-page">
      {/* Hero / Intro */}
      <section className="about-hero">
        <h1>Who are we</h1>
        <p>Designed in Canada. Made for everywhere.</p>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-text">
          
          <p>
            Naija is more than a place. It’s an attitude. A bold energy. A state
            of mind.
          </p>
          <p>
            Born from the pulse of a name that carries rhythm, grit, and
            originality, Naija isn’t defined by geography, it’s defined by
            spirit. Our pieces don’t follow borders or expectations. They’re
            those who wear, just like the people we design for.
          </p>
          <p>
            Inspired by the hustle, the confidence, and the unapologetic cool of
            a generation that doesn’t wait for permission. Naija is for the ones
            who wear identity without exception.
          </p>
          <p>
            We’re not here to check cultural boxes. We’re here to create pieces
            that are clean in form and rich in attitude. Every drop is inspired
            back to its essence and purpose. Naija is about owning your
            narrative, expressing your attitude, and showing up as your most
            authentic self. No labels, no boxes, just expression.
          </p>
          <p>
            The influence? Global. The designs? Driven by mood, movement, and
            memories. In butter, not margarine. In black, not blue.
          </p>
          <p>
            If you’ve ever been in Lagos, London, or LA. If you move with
            purpose and define where you are, not where you’re from, you’re
            already one of us.
          </p>
        </div>
        <div className="about-image">
          <img src={gallery7} alt="Naija Story" />
        </div>
      </section>

      {/* Care Instructions */}
      <section className="about-section reverse">
        <div className="about-image">
          <img src={who2} alt="Care for fabric" />
        </div>
        <div className="about-text">
          <h2>How to Care for Fabric</h2>

          <h3>Down Blend</h3>
          <p>
            For 95% cotton and 5% viscose blends, to retain soft color: use a
            gentle detergent and avoid harsh chemicals or high heat. Hand
            washing or a delicate machine cycle is recommended. Let air drying
            be best to prevent shrinkage and damage.
          </p>

          <h4>🧼 Washing</h4>
          <ul>
            <li>Use cold water: minimizes shrinkage and damage.</li>
            <li>
              Detergent: gentle, color-safe, enzyme-free to maintain softness.
            </li>
            <li>Avoid bleach: weakens viscose and discolors fabric.</li>
            <li>
              Hand wash or delicate cycle. Use a mesh laundry bag to reduce
              friction.
            </li>
            <li>Wash similar colors together to avoid bleeding.</li>
            <li>Turn inside out to protect colors and prints.</li>
          </ul>

          <h4>🌬️ Drying</h4>
          <ul>
            <li>Air dry flat or hang in a ventilated space.</li>
            <li>Avoid direct sunlight to prevent fading.</li>
            <li>No tumble dry.</li>
          </ul>

          <h4>🔥 Ironing</h4>
          <ul>
            <li>Use low heat with a damp cloth over fabric.</li>
            <li>Steam preferred for wrinkle removal.</li>
            <li>Avoid high heat to prevent damage.</li>
          </ul>

          <h4>📦 Storage</h4>
          <ul>
            <li>Store in a cool, dry place with breathable bags.</li>
            <li>Fold gently or use padded hangers to avoid creases.</li>
            <li>Avoid plastic bags that trap humidity.</li>
          </ul>

          <h4>💡 Extra Care Tips</h4>
          <ul>
            <li>Spot clean stains with gentle detergent + cold water.</li>
            <li>Rotate garments to reduce wear and tear.</li>
            <li>Use garment bags in the wash.</li>
            <li>Keep away from pets & rough surfaces.</li>
            <li>Use lint rollers regularly.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
