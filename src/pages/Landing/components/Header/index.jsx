import styles from "./index.module.scss";
import logo from "../../../../assets/images/logo.svg"
const Header = () => {
    return (
        <div className={styles["Header"]}>
            <img
                className={styles["Header-logo"]}
                src={logo}
                alt="logo"
                width={50}
                height={50}
            />

        </div>
    );
};

export default Header;

