import React from "react";
import "../styles/Story.css";
import storyVideo from "../assets/story1.mov";  // <-- import it

const Story = () => {
  return (
    <main className="story">
      <section className="story-video">
        <video
          src={storyVideo}   // <-- use the imported variable
          autoPlay
          loop
          muted
          playsInline
          className="video-player"
        />
      </section>
    </main>
  );
};

export default Story;
