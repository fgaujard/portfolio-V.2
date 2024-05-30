import Carousel from "../components/Carousel";
import LogoScroll from "../components/LogoScroll";

import WW1 from "../assets/carousel/WW1.svg";
import WW2 from "../assets/carousel/WW2.svg";
import SM from "../assets/carousel/SM.svg";
import DPG from "../assets/carousel/DPG.png";

export default function Projects() {
  return (
    <section id="home" className="app-body_home">
      <Carousel autoPlayInterval={5000}>
        <article>
          <img
            src={DPG}
            style={{ borderRadius: "16px" }}
            alt="My first portfolio."
          />
        </article>
        <article>
          <img src={WW1} alt="Wiki Wilder Mobile and Desktop View." />
        </article>
        <article>
          <img src={WW2} alt="Wiki Wilder and database." />
        </article>
        <article>
          <img
            src={SM}
            alt="Steppe Miners, for W3R.ONE during my internship at O'Rabbit Studio."
          />
        </article>
      </Carousel>
      <div>
        <h2 className="title-home">Powerfull tools</h2>
        <p className="subtitle-home">To create better experciences</p>
        <LogoScroll />
      </div>
    </section>
  );
}
