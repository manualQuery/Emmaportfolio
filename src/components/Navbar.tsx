import { FC } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.css";

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <p>
          <FontAwesomeIcon icon={faHome} /> Home
        </p>
      </Link>
      <Link href="/profile">
        <p>
          <FontAwesomeIcon icon={faUser} /> Profile
        </p>
      </Link>
      <Link href="/register">
        <p>
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </p>
      </Link>
      <Link href="/login">
        <p>
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
