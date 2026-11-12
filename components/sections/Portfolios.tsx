"use client";
import HoverCursorEffect from "@/components/animation/HoverCursorEffect";
import MasonryGrid from "@/components/animation/MasonryGrid";
import RevealText from "@/components/animation/RevealText";
import Image from "next/image";
import projects from "@/data/portfolios.json";
import { asset } from "@/lib/site";

export default function Portfolios() {
  return (
    <section id="portfolio" className="inner inner-grid-bottom portfolio">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Projetos</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                <div className="content__block section-grid-text-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Código público,
                      <br />
                      do domínio ao deploy
                    </RevealText>
                    <p className="h2__text type-basic-160lh animate-in-up">
                      Quatro projetos que mostram como eu trabalho: camadas
                      bem separadas, regras de negócio validadas e APIs
                      documentadas. Tudo aberto no GitHub.
                    </p>
                  </div>
                </div>
                <div className="content__block grid-block">
                  <div className="container-fluid px-0 inner__gallery">
                    <MasonryGrid className="row gx-0 my-gallery">
                      {projects.map((it, idx) => (
                        <figure
                          key={it.id}
                          className="col-12 col-md-6 gallery__item grid-item animate-in-up"
                          data-delay={idx % 2 === 0 ? "0" : "300"}
                        >
                          <a
                            href={it.href}
                            target="_blank"
                            rel="noreferrer"
                            className="gallery__link"
                            aria-label={`${it.title}: abrir repositório no GitHub`}
                          >
                            <Image
                              alt={`${it.title} — ${it.category}`}
                              src={asset(it.src)}
                              width={it.width}
                              height={it.height}
                              sizes="(min-width: 768px) 40vw, 100vw"
                            />
                            <span className="gallery__repo">
                              Ver no GitHub <i className="ph ph-arrow-up-right" />
                            </span>
                          </a>
                          <figcaption
                            className={
                              "gallery__descr" + (it.opposite ? " opposite" : "")
                            }
                          >
                            <h5>
                              {it.title}
                              <small>{it.category}</small>
                            </h5>
                            <p className="small">{it.description}</p>
                          </figcaption>
                        </figure>
                      ))}
                    </MasonryGrid>
                    <div className="gallery__btn animate-in-up">
                      <a
                        href="https://github.com/rios-pedro"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-line-circle-icon"
                      >
                        <span className="btn-caption">Todos os repositórios</span>
                        <HoverCursorEffect as="span" className="circle hover-circle">
                          <i className="ph ph-arrow-right" />
                        </HoverCursorEffect>
                      </a>
                    </div>
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
