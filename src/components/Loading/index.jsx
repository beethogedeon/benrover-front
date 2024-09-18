import React from 'react';
import loadingGif from "../../images/benrover_loading.gif";

const Loading = () => {
  return (
    <div style={containerstyle}>
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

const containerstyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor:'#303130'
};

export default Loading;
