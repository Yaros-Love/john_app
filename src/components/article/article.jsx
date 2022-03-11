import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';

const ArticlesPage = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header/>
        <main className="page">
          <div className="article">
            <h1 className="article__title">Designing Dashboards with usability in mind</h1>
            <div className="article__info">
              <div className="article__year">2020</div>
              <div className="article__category">Dashboard, User Experience Design</div>
            </div>
            <div className="article__text">
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <picture className="article__image">
                <source srcset="./img/article1.jpg" type="image/webp"/>
                <img alt="Dashboard"/>
              </picture>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <picture className="article__image">
                <source srcset="./img/article2.jpg" type="image/webp"/>
                <img alt="Dashboard"/>
              </picture>
              <picture className="article__image">
                <source srcset="./img/article3.jpg" type="image/webp"/>
                <img alt="Dashboard"/>
              </picture>
            </div>
          </div>
        </main>
        <Footer/>
      </MainContainer>
    </React.Fragment>
  );
};

export default ArticlesPage;
