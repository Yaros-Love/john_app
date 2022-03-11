import React from 'react';
import { Works } from '../../mocks/mocks';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';
import RecentPosts from '../recent-posts/recent-posts';
import WorkItem from '../works/work-item';

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
        <RecentPosts/>
        <section className="featured-works">
          <div className="featured-works__container _container">
            <div className="featured-works__title title-posts">Featured works</div>
            <div className="featured-works__items works">
              {Works.slice(0, 3).map(item => <WorkItem work={item} key={item.title + item.img}/>)}
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
