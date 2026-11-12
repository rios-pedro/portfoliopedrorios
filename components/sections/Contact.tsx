import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import Star from "./Star";

const EMAIL = "pedrohr1507@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Contato pelo portfólio")}`;

const DATA = [
  { title: "Local", lines: [{ text: "Brasília, DF" }, { text: "Presencial · híbrido · remoto" }] },
  { title: "E-mail", lines: [{ text: EMAIL, href: MAILTO }] },
  { title: "LinkedIn", lines: [{ text: "pedro-rios-developer", href: "https://www.linkedin.com/in/pedro-rios-developer/" }] },
  { title: "GitHub", lines: [{ text: "rios-pedro", href: "https://github.com/rios-pedro" }] },
];

export default function Contact() {
  return (
    <section id="contact" className="inner contact inner-grid-bottom no-padding-bottom">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Contato</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                <div className="content__block section-form-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Tem uma vaga
                      <br />
                      backend?
                    </RevealText>
                    <p className="h2__text text-twothirds type-basic-160lh animate-in-up">
                      Procuro minha primeira vaga como Desenvolvedor Backend
                      Java. Me manda um e-mail ou uma mensagem no LinkedIn.
                    </p>
                    <div className="btn-group animate-in-up" style={{ marginTop: "3rem" }}>
                      <HoverCursorEffect as="a" className="btn btn-default hover-default" href={MAILTO}>
                        <span className="btn-caption">Mandar e-mail</span>
                      </HoverCursorEffect>
                    </div>
                  </div>
                </div>
                <div className="content__block grid-block">
                  <div className="container-fluid p-0 contact-data">
                    <div className="row g-0">
                      {DATA.map((d) => (
                        <div key={d.title} className="col-12 col-md-6 col-lg-3 contact-data__item grid-item">
                          <p className="contact-data__title tagline-chapter animate-in-up">{d.title}</p>
                          <p className="contact-data__text small type-basic-160lh">
                            {d.lines.map((l, i) => (
                              <span key={i}>
                                {"href" in l && l.href ? (
                                  <a
                                    className="link-small-160lh animate-in-up"
                                    href={l.href}
                                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                                  >
                                    {l.text}
                                  </a>
                                ) : (
                                  <span className="animate-in-up">{l.text}</span>
                                )}
                                {i < d.lines.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
        <div className="footer footer-marquee">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12">
                <div className="content__block no-padding">
                  <VelocityMarquee className="items items--gsap">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="item item-regular text">
                        <a className="item__text" href={MAILTO}>
                          Vamos conversar?
                        </a>
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
        </div>
      </div>
    </section>
  );
}
