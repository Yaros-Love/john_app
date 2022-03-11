import React from 'react';
import { Posts } from '../../mocks/mocks';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';
import Post from './post';

const BlogPage = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header/>
        <main className="page">
          <div className="blog page__container _container">
            <h1 className="blog__title title">Blog</h1>
            <div className="blog__items">
              {Posts.map(post => <Post post={post} key={post.title + post.date}/>)}
            </div>
          </div>
        </main>
        <Footer/>
      </MainContainer>
    </React.Fragment>
  );
};

export default BlogPage;