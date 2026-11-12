import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import RevealText from "@/components/animation/RevealText";
import Image from "next/image";
import { asset } from "@/lib/site";

const STATS = [
  { num: "4", label: "APIs REST públicas com Spring Boot" },
  { num: "1", label: "app macOS publicado, com site e download" },
  { num: "2+", label: "anos mantendo sistemas em produção no suporte" },
];

export default function About() {
  return (
    <section id="about" className="inner inner-grid-bottom about">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Sobre</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                <div className="content__block section-grid-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Antes do código,
                      <br />o suporte
                    </RevealText>
                  </div>
                </div>
                <div className="content__block grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 grid-item">
                        <div
                          className="divider divider-image about-image-1 animate-in-up"
                          style={{ backgroundImage: `url(${asset("/img/pedro/about.png")})` }}
                          role="img"
                          aria-label="Linha do tempo: Técnico em Informática em 2020, suporte técnico em 2023, ADS concluído em 2025, backend Java em 2026"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content__block grid-block">
                  <div className="container-fluid p-0">
                    <div className="row g-0 justify-content-between">
                      <div className="col-12 col-md-8 col-lg-7 col-xxl-8 grid-item about-descr pre-grid">
                        <p className="about-descr__text type-basic-160lh animate-in-up">
                          Passei mais de dois anos mantendo funcionando os
                          sistemas que outras pessoas construíram: estações,
                          redes e PDVs de farmácia, sempre dentro do SLA. Hoje
                          eu construo o outro lado. Sou formado em Análise e
                          Desenvolvimento de Sistemas pela Católica de Brasília
                          e procuro minha primeira vaga como Desenvolvedor
                          Backend em um time de produto.
                        </p>
                        <p className="about-descr__text type-basic-160lh animate-in-up">
                          O suporte me deixou duas coisas que levo pro código:
                          pensar em quem vai usar e manter o sistema, e
                          explicar problema técnico de um jeito que qualquer
                          pessoa entende.
                        </p>
                        <div className="btn-group about-descr__btnholder animate-in-up">
                          <HoverCursorEffect
                            as="a"
                            className="btn btn-default hover-default"
                            href="https://www.linkedin.com/in/pedro-rios-developer/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="btn-caption">Ver LinkedIn</span>
                          </HoverCursorEffect>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-xxl-3 grid-item about-info pre-grid">
                        <div className="about-info__item about-photo animate-in-up">
                          <Image
                            src={asset("/img/pedro/perfil.jpg")}
                            alt="Pedro Rios"
                            width={800}
                            height={800}
                            sizes="(min-width: 768px) 25vw, 100vw"
                          />
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>Pedro Henrique Rodrigues dos Santos</h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>
                            <a className="link-inline text-link" href="mailto:pedrohr1507@gmail.com">
                              pedrohr1507@gmail.com
                            </a>
                          </h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>Brasília, DF</h6>
                        </div>
                        <div className="about-info__item animate-in-up">
                          <h6>Presencial · híbrido · remoto</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content__block grid-block">
                  <div className="about-stats animate-in-up">
                    {STATS.map((s) => (
                      <div key={s.label} className="about-stats__item">
                        <span className="about-stats__num">{s.num}</span>
                        <span className="about-stats__label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
