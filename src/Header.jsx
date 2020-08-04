import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-foreground">
        <h1>Audi</h1>
        <h2>quattro</h2>
        <p>Lendgendary Preformance</p>
      </div>
      <div className="header-video-background">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xr_reKgerJM?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1&playlist=xr_reKgerJM
          "
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </header>
  );
}

export default Header;
