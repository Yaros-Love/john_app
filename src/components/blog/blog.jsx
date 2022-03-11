import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';

const BlogPage = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header/>
        <main className="page">
          <div className="blog page__container _container">
            <h1 className="blog__title title">Blog</h1>
            <div className="blog__items">
              <article className="blog__item"><a href="" className="blog__article-name">UI Interactions of the week</a>
                <div className="blog__info">
                  <div className="blog__date">12 Feb 2019</div><span className="blog__separator">|</span>
                  <div className="blog__category">Express, Handlebars</div>
                </div>
                <div className="blog__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
              </article>
              <article className="blog__item"><a href="" className="blog__article-name">UI Interactions of the week</a>
                <div className="blog__info">
                  <div className="blog__date">12 Feb 2019</div><span className="blog__separator">|</span>
                  <div className="blog__category">Express, Handlebars</div>
                </div>
                <div className="blog__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
              </article>
              <article className="blog__item"><a href="" className="blog__article-name">UI Interactions of the week</a>
                <div className="blog__info">
                  <div className="blog__date">12 Feb 2019</div><span className="blog__separator">|</span>
                  <div className="blog__category">Express, Handlebars</div>
                </div>
                <div className="blog__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
              </article>
              <article className="blog__item"><a href="" className="blog__article-name">UI Interactions of the week</a>
                <div className="blog__info">
                  <div className="blog__date">12 Feb 2019</div><span className="blog__separator">|</span>
                  <div className="blog__category">Express, Handlebars</div>
                </div>
                <div className="blog__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
              </article>
            </div>
          </div>
        </main>
        <Footer/>
      </MainContainer>
    </React.Fragment>
  );
};

export default BlogPage;