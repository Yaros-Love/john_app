import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContainer from '../main-container/main-container';
import { Works } from '../../mocks/mocks';
import WorkItem from './work-item';

const WorksPage = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header/>
        <main className="page">
          <div className="works page__container _container">
            <h1 className="works__main-title title">Works</h1>
            <div className="works__items">
              {Works.map(item => <WorkItem work={item} key={item.title + item.img}/>)}
            </div>
          </div>
        </main>
        <Footer/>
      </MainContainer>
    </React.Fragment>
  );
};

export default WorksPage;
