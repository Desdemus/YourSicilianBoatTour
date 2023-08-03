import styles from "./index.module.scss";
import logo from "../../../../assets/images/logo.svg"
const Header = () => {
    return (
        <div>
            <img
                className={styles["Landing-logo"]}
                src={logo}
                alt="logo"
                width={25}
                height={25}
            />
        </div>
    );
};

export default Header;