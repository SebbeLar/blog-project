import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './wrapper.scss';

class Wrapper extends React.Component {
    render() {
        return (
            <div className={styles.pageWrapper}>
                <nav className={styles.navbar}>
                    <ul className={styles.navbarLinksWrapper}>
                        <Link to="/"
                            className={styles.logo}>SL</Link>
                        <Link to="/home"
                            className={styles.navbarLink}
                            activeClassName={styles.active}>Home</Link>
                        <Link to="/skills"
                            className={styles.navbarLink}
                            activeClassName={styles.active}>Skills</Link>
                        <Link to="/blog"
                            className={styles.navbarLink}
                            activeClassName={styles.active}>Blog</Link>
                        <Link to="/about"
                            className={styles.navbarLink}
                            activeClassName={styles.active}>About</Link>
                        <Link to="/contact"
                            className={styles.navbarLink}
                            activeClassName={styles.active}>Contact</Link>
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
