import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './wrapper.scss';

class Wrapper extends React.Component {
    render() {
        return (
            <div className={styles.pageWrapper}>
                <nav className={styles.navbar}>
                    <ul className={styles.navbarLinksWrapper}>
                        <li className={styles.logo}>
                        <Link to="/"
                            activeClassName={styles.active}>SL</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/home"
                            activeClassName={styles.active}>Home</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/skills"
                            activeClassName={styles.active}>Skills</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/blog"
                            activeClassName={styles.active}>Blog</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/about"
                            activeClassName={styles.active}>About</Link>
                        </li>
                        <li className={styles.navbarLink}>
                        <Link to="/contact"
                            activeClassName={styles.active}>Contact</Link>
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
