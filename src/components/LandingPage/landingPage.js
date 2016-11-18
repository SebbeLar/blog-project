import React from 'react';
import styles from './landingPage.scss';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.headerName}>Sebastian Larsson</h1>
            <h3 className={styles.headerTitle}>Front end developer</h3>
            <a className={styles.headerButton}>Continue</a>
        </div>
    );
};

export default LandingPage;

