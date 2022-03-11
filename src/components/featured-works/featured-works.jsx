import React from 'react';
import { Works } from '../../mocks/mocks';
import WorkItem from '../works/work-item';

const FeaturedWorks = () => {
  return (
  <React.Fragment>
    <section className="featured-works">
      <div className="featured-works__container _container">
        <div className="featured-works__title title-posts">Featured works</div>
        <div className="featured-works__items works">
          {Works.slice(0, 3).map(item => <WorkItem work={item} key={item.title + item.img}/>)}
        </div>
      </div>
    </section>
  </React.Fragment>
  );
};

export default FeaturedWorks;
