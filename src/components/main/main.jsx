import React from 'react';

const MainPage = () => {
  return (
  <React.Fragment>
    <div className="wrapper _loaded">
      <header className="header">
        <div className="header__content">
          <div className="header__menu menu">
            <div className="menu__icon icon-menu"><span></span> <span></span> <span></span></div>
            <nav className="menu__body _active">
              <ul className="menu__list">
                <li><a href="" className="menu__link">Works</a></li>
                <li><a href="" className="menu__link">Blog</a></li>
                <li><a href="" className="menu__link">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
                <source srcset="./img/avatar.png" type="image/webp"/>
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
            <div className="recent-posts__items">
              <div className="recent-posts__column">
                <article className="recent-posts__item recent-post"><a href="" className="recent-post__title">Making a design
                    system from scratch</a>
                  <div className="recent-post__info">12 Feb 2020 <span>|</span> Design, Pattern</div>
                  <div className="recent-post__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </article>
              </div>
              <div className="recent-posts__column">
                <article className="recent-posts__item recent-post"><a href="" className="recent-post__title">Creating pixel
                    perfect icons in Figma</a>
                  <div className="recent-post__info">12 Feb 2020 <span>|</span> Figma, Icon Design</div>
                  <div className="recent-post__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-works">
          <div className="featured-works__container _container">
            <div className="featured-works__title title-posts">Featured works</div>
            <div className="featured-works__items works">
              <article className="works__item"><a href="" className="works__image _ibg">
                  <picture>
                    <source srcset="./img/Dashboard.jpg" type="image/webp"/>
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
                    <source srcset="./img/Illustration.jpg" type="image/webp"/>
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
                    <source srcset="./img/Typography.jpg" type="image/webp"/>
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
      <footer>
        <div className="footer__content __container">
          <div className="footer__social social"><a href="" className="social__item _icon-fb"></a> <a href=""
              className="social__item _icon-insta"></a> <a href="" className="social__item _icon-twitter"></a> <a href=""
              className="social__item _icon-linkedin"></a></div>
          <div className="footer__copy">Copyright ©2020 All rights reserved</div>
        </div>
      </footer>
    </div>
  </React.Fragment>
  );
};

export default MainPage;
