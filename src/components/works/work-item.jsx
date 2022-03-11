import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

const WorkItem = ({work}) => {
  return (
    <React.Fragment>
      <article className="works__item">
        <Link to={AppRoute.ARTICLES} className="works__image _ibg">
          <picture>
            <source srcSet={work.img} type="image/webp"/>
            <img alt="Work #1"/>
          </picture>
        </Link>
        <div className="works__body">
          <Link to={AppRoute.ARTICLES} className="works__title">{work.title}</Link>
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
