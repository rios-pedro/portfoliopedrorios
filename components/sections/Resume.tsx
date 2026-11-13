import RevealText from "@/components/animation/RevealText";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import resume from "@/data/resume.json";
import React from "react";
import Socials from "./Socials";
import Star from "./Star";

type Line = { id: number; date: string; title: string; source: string; description: string; href?: string };

function Lines({ items }: { items: Line[] }) {
  return (
    <div className="container-fluid p-0 resume-lines">
      {items.map((e) => (
        <React.Fragment key={e.id}>
          <div className="resume-divider animate-in-up" />
          <div className="row g-0 resume-lines__item">
            <div className="col-12 col-md-4 col-lg-3">
              <p className="resume-lines__date type-basic-160lh animate-in-up">{e.date}</p>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <h4 className="resume-lines__title animate-in-up">{e.title}</h4>
              <p className="resume-lines__source small animate-in-up">
                {e.source}
                {e.href && (
                  <>
                    {" · "}
                    <a className="link-small-underline" href={e.href} target="_blank" rel="noreferrer">
                      Verificar credencial
                    </a>
                  </>
                )}
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-5">
              <p className="resume-lines__descr type-basic-160lh animate-in-up">{e.description}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
      <div className="resume-divider animate-in-up" />
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="inner inner-grid-bottom resume">
      <div className="inner__wrapper">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-2">
              <div className="inner__name">
                <div className="content__block name-block">
                  <span className="section-name icon-right animate-in-up">
                    <span className="section-name-caption">Trajetória</span>
                    <i className="ph ph-arrow-down-right" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="inner__content">
                <div className="content__block section-tagline-title">
                  <div className="block__descr">
                    <RevealText as="h2" className=" animate-in-up">
                      Experiência
                      <br />e formação
                    </RevealText>
                  </div>
                </div>
                <div className="content__block pre-text-items">
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">Experiência</p>
                  </div>
                  <Lines items={resume.experience} />
                </div>
                <div className="content__block pre-text-items">
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">Formação</p>
                  </div>
                  <Lines items={resume.education} />
                </div>
                <div className="content__block pre-text-items">
                  <div className="block__subtitle">
                    <p className="tagline-chapter animate-in-up">Certificações</p>
                  </div>
                  <Lines items={resume.certifications} />
                </div>
                <div className="content__block grid-block">
                  <div className="block__subtitle grid-block-subtitle">
                    <p className="tagline-chapter animate-in-up">Ferramentas do dia a dia</p>
                  </div>
                  <div className="tools-cards d-flex justify-content-start flex-wrap">
                    {resume.tools.map((tool) => (
                      <div key={tool.id} className="tools-cards__item d-flex grid-item animate-in-up">
                        <div className="tools-cards__card">
                          <i className={`tools-cards__glyph ${tool.icon}`} aria-hidden="true" />
                          <h6 className="tools-cards__caption tagline-tool">{tool.name}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-2" />
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="content__block no-padding section-tagline-title">
                <VelocityMarquee className="items items--gsap">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="item item-regular text">
                      <p className="item__text">Me acompanhe</p>
                      <div className="item__image">
                        <Star />
                      </div>
                    </div>
                  ))}
                </VelocityMarquee>
              </div>
            </div>
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-12 col-xl-8">
              <div className="content__block">
                <div className="block__subtitle">
                  <p className="tagline-chapter animate-in-up">Redes</p>
                </div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
