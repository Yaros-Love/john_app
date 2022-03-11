import React from 'react';
import { Posts } from '../../mocks/mocks';
import ResentPost from './recent-post';

const ResentPostsList = () => {
  return (
    <React.Fragment>
      <div className="recent-posts__items">
        {Posts.slice(0, 2).map(post => <ResentPost post={post} key={post.title + post.date}/>)}
      </div>
    </React.Fragment>
  );
};

export default ResentPostsList;
