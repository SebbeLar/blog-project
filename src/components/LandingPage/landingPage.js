import React from 'react';
import { Link } from 'react-router';
import styles from './landingPage.scss';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.headerName}>Sebastian Larsson</h1>
            <h3 className={styles.headerTitle}>Front end developer</h3>
            <Link to="/home"><a className={styles.headerButton}>Continue</a></Link>
        </div>
    );
};

export default LandingPage;

