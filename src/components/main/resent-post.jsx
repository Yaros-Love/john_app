import React from 'react';

const ResentPost = ({post}) => {
  return (
    <React.Fragment>
      <div className="recent-posts__column">
        <article className="recent-posts__item recent-post"><a href="" className="recent-post__title">{post.title}</a>
          <div className="recent-post__info">{post.date} <span>|</span> {post.tags.join(`, `)}</div>
          <div className="recent-post__text">{post.description}</div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default ResentPost;
