import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/settings.module.css'; 

class Car extends React.Component {
  render() {
    return <h1 className={styles.title}>Hello Car!</h1>;
  }
}

export default Car;