import React from 'react';
import ResentPostsList from './recent-posts-list';

const RecentPosts = () => {
  return (
    <React.Fragment>
      <section className="recent-posts">
        <div className="recent-posts__container _container">
          <div className="recent-posts__header">
            <div className="recent-posts__title title title-posts">Recent posts</div>
            <a href="" className="recent-posts__view-all">View all</a>
          </div>
          <ResentPostsList/>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RecentPosts;
