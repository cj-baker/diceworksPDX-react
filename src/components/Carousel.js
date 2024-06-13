import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import "../styles/Carousel.css"

export default function Carousel() {
    return(
   
<Splide  options={ {
    rewind: true,
    width: '100vw',
    heightRatio: '0.35',
    type :'loop',
    gap  : '1vmin',
    autoplay: true,
    perPage: 3,
  
  } } aria-label="Recent Pours">
  <SplideSlide>
    <img className="splide-image" src="https://lh3.googleusercontent.com/d/1klZDTARBcDScLwcaP1UBAbW4Vj09LDs3" alt="dice 1"/>
  </SplideSlide>
  <SplideSlide>
    <img className="splide-image" src="https://lh3.googleusercontent.com/d/1D4pwDQYTijCjktxMMn-xACR4gcy2CGB-"alt="dice 2"/>
  </SplideSlide>
  <SplideSlide>
    <img className="splide-image" src="https://lh3.googleusercontent.com/d/1H-gZtMNP8S267loYBGHa5YDlEVxAM7MR"alt="dice 3"/>
  </SplideSlide>
  <SplideSlide>
    <img className="splide-image" src="https://lh3.googleusercontent.com/d/1bRjRBttN_DZuQVh-KOyo5yvKlceOpF3e"alt="dice 4"/>
  </SplideSlide>
  <SplideSlide>
    <img className="splide-image" src="https://lh3.googleusercontent.com/d/1UwY8Qg-eMYbCa7wRGTq3RRmzsDOvefX8"alt="dice 5"/>
  </SplideSlide>
  <SplideSlide>
    <img className="splide-image" src="https://lh3.googleusercontent.com/d/1XBsUog5ltUwyUZYtCgsYBfBGYIMcZp-f"alt="dice 6"/>
  </SplideSlide>
</Splide>
  
 )

}