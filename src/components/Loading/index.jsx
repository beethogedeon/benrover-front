import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={styles.container}>
      <ProgressBar animated now={75} style={styles.progressBar} />
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    progressBar: {
      width: '50%',
      backgroundColor: '#fff',
      color: '#999696' // Background color for the empty part of the bar
    },
};

export default Loading;
