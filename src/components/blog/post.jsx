import React from 'react';

const Post = ({post}) => {
  return (
    <React.Fragment>
      <article className="blog__item">
        <a href="" className="blog__article-name">{post.title}</a>
        <div className="blog__info">
          <div className="blog__date">{post.date}</div>
          <span className="blog__separator">|</span>
          <div className="blog__category">{post.tags.join(`, `)}</div>
        </div>
        <div className="blog__text text">{post.description}</div>
      </article>
    </React.Fragment>
  );
};

export default Post;
