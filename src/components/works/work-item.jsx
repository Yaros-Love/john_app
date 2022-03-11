import React from 'react';

const WorkItem = ({work}) => {
  return (
    <React.Fragment>
      <article className="works__item">
        <a href="" className="works__image _ibg">
          <picture>
            <source srcset={work.img} type="image/webp"/>
            <img alt="Work #1"/>
          </picture>
        </a>
        <div className="works__body">
          <a href="" className="works__title">{work.title}</a>
          <div className="works__info">
            <div className="works__year">{work.year}</div>
            <div className="works__category">{work.category}</div>
          </div>
          <div className="works__text text">{work.description}</div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default WorkItem;
