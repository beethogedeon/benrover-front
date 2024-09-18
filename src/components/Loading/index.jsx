import React from 'react';
import loadingGif from "../../images/benrover_loading.gif";

const Loading = () => {
  return (
    <div>
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
};

export default Loading;
