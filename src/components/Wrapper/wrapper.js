import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './wrapper.scss';

class Wrapper extends React.Component {
    render() {
        return (
            <div className={styles.pageWrapper}>
                <nav className={styles.navbar}>
                    <ul className={styles.navbarLinksWrapper}>
                        <li className={styles.logo}>SL</li>
                        <li className={styles.navbarLink}>
                        <Link to="/home">Home</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/skills">Skills</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/blog">Blog</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/about">About</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Wrapper.propTypes = {
    children: PropTypes.element
};

export default Wrapper;
