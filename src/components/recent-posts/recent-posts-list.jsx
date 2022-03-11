import React from 'react';
import { ResentPosts } from '../../mocks/mocks';
import ResentPost from './recent-post';

const ResentPostsList = () => {
  return (
    <React.Fragment>
      <div className="recent-posts__items">
        {ResentPosts.map(post => <ResentPost post={post}/>)}
      </div>
    </React.Fragment>
  );
};

export default ResentPostsList;
