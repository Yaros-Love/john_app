import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';
import ResentPostsList from './resent-posts-list';

const MainPage = () => {
  return (
  <React.Fragment>
    <MainContainer>
      <Header/>
      <main className="page">
        <section className="hello">
          <div className="hello__container _container">
            <div className="hello__content">
              <h1 className="hello__title title">Hi, I am John,<br/>Creative Technologist</h1>
              <div className="hello__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div><a
                href="" className="hello__btn btn">Download Resume</a>
            </div>
            <div className="hello__avatar">
              <picture>
                <source srcSet="./img/avatar.png" type="image/webp"/>
                <img alt="John's avatar"/>
              </picture>
            </div>
          </div>
        </section>
        <section className="recent-posts">
          <div className="recent-posts__container _container">
            <div className="recent-posts__header">
              <div className="recent-posts__title title title-posts">Recent posts</div>
              <a href="" className="recent-posts__view-all">View all</a>
            </div>
            <ResentPostsList/>
          </div>
        </section>
        <section className="featured-works">
          <div className="featured-works__container _container">
            <div className="featured-works__title title-posts">Featured works</div>
            <div className="featured-works__items works">
              <article className="works__item"><a href="" className="works__image _ibg">
                  <picture>
                    <source srcSet="./img/Dashboard.jpg" type="image/webp"/>
                    <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body">
                  <a href="" className="works__title">Designing Dashboard</a>
                  <div className="works__info">
                    <div className="works__year">2020</div>
                    <div className="works__category">Dashboard</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
              <article className="works__item">
                <a href="" className="works__image _ibg">
                  <picture>
                    <source srcSet="./img/Illustration.jpg" type="image/webp"/>
                    <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body">
                  <a href="" className="works__title">Vibrant Portraits of 2020</a>
                  <div className="works__info">
                    <div className="works__year">2018</div>
                    <div className="works__category">Illustration</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
              <article className="works__item">
                <a href="" className="works__image _ibg">
                  <picture>
                    <source srcSet="./img/Typography.jpg" type="image/webp"/>
                    <img alt="Work #1"/>
                  </picture>
                </a>
                <div className="works__body">
                  <a href="" className="works__title">36 Days of Malayalam type</a>
                  <div className="works__info">
                    <div className="works__year">2018</div>
                    <div className="works__category">Typography</div>
                  </div>
                  <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </MainContainer>
  </React.Fragment>
  );
};

export default MainPage;
