import React from 'react';

const MainContainer = ({children}) => {
  return (
  <React.Fragment>
    <div className="wrapper _loaded">
      {children}
    </div>
  </React.Fragment>
  );
};

export default MainContainer;
