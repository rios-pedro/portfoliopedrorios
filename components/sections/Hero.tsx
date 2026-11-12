import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Star from "./Star";
import { asset } from "@/lib/site";

const STACK = ["Java 17", "Spring Boot", "PostgreSQL", "Docker", "APIs REST", "React + TS"];

export default function Hero() {
  return (
    <section id="home" className="main home">
      <div className="main__intro">
        <div className="container-fluid p-0 fullheight-desktop">
          <div className="row g-0 fullheight-desktop align-items-xl-stretch">
            <div className="col-12 col-xl-2" />
            <div className="col-12 col-xl-8 fullheight-desktop">
              <div
                id="headline"
                className="headline d-flex align-items-start flex-column loading-wrap"
              >
                <p
                  className="headline__subtitle space-bottom loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="100"
                >
                  Olá, sou o Pedro Rios
                  <br />
                  <span className="accent">Brasília · aberto a vagas</span>
                </p>
                <h1
                  className="headline__title loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="300"
                >
                  Desenvolvedor
                  <br />
                  Backend Java
                </h1>
                <div
                  className="headline__btn loading__item hero-animate-in-up"
                  data-duration="0.7"
                  data-delay="600"
                >
                  <a
                    className="btn btn-line-small icon-right slide-right-down"
                    href="#portfolio"
                  >
                    <span className="btn-caption">Ver projetos</span>
                    <i className="ph ph-arrow-down-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
      <div className="main__media media-grid-bottom">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2" />
            <div className="col-12 col-xl-8">
              <div className="content__block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <div
                        className="divider divider-image main-image-1 hero-animate-in-up"
                        data-duration="0.7"
                        style={{ backgroundImage: `url(${asset("/img/pedro/hero.png")})` }}
                        role="img"
                        aria-label="Camadas de uma API Spring Boot: Controller, Service, Repository e PostgreSQL"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content__block large-text-block">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12">
                      <RevealText
                        as="blockquote"
                        className=" hero-animate-in-up"
                        data-duration="0.7"
                      >
                        Construo APIs REST com Spring Boot, do modelo de
                        domínio ao deploy em Docker, com código que outro dev
                        consegue ler e manter.
                      </RevealText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
            <div className="media__fullwidth">
              <VelocityMarquee className="items items--gsap">
                {STACK.map((s) => (
                  <div key={s} className="item item-regular text">
                    <p className="item__text">{s}</p>
                    <div className="item__image">
                      <Star />
                    </div>
                  </div>
                ))}
              </VelocityMarquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
