import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';

const WorksPage = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header/>
        <main className="page">
          <div className="works page__container _container">
            <h1 className="works__main-title title">Works</h1>
            <div className="works__items">
              <article className="works__item"><a href="" className="works__image _ibg">
                  <picture>
                    <source srcset="./img/Dashboard.jpg" type="image/webp"/>
                    <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body"><a href="" className="works__title">Designing Dashboard</a>
                  <div className="works__info">
                    <div className="works__year">2020</div>
                    <div className="works__category">Dashboard</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
              <article className="works__item"><a href="" className="works__image _ibg">
                  <picture>
                    <source srcset="./img/Illustration.jpg" type="image/webp"/>
                    <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body"><a href="" className="works__title">Vibrant Portraits of 2020</a>
                  <div className="works__info">
                    <div className="works__year">2018</div>
                    <div className="works__category">Illustration</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
              <article className="works__item"><a href="" className="works__image _ibg">
                  <picture>
                    <source srcset="./img/Typography.jpg" type="image/webp"/>
                      <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body"><a href="" className="works__title">36 Days of Malayalam type</a>
                  <div className="works__info">
                    <div className="works__year">2018</div>
                    <div className="works__category">Typography</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
              <article className="works__item"><a href="" className="works__image _ibg">
                  <picture>
                    <source srcset="./img/Components.png" type="image/webp"/>
                      <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body"><a href="" className="works__title">Components</a>
                  <div className="works__info">
                    <div className="works__year">2018</div>
                    <div className="works__category">Components, Design</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
            </div>
          </div>
        </main>
        <Footer/>
      </MainContainer>
    </React.Fragment>
  );
};

export default WorksPage;
