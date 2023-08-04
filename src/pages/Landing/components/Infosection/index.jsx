import styles from "./index.module.scss";
import banner from "../../../../assets/images/banner.jpeg"

const Infosection = () => {
    return (
        <div className={styles.Infosection}>
            <img
                className={styles["Infosection-banner"]}
                src={banner}
                alt="banner"
            />
            <div className={styles["Infosection-text"]}>
                <h1>+20<br></br> Destinazioni</h1>
                <h1>+15<br></br> Imbarcazioni</h1>
                <h1>+40<br></br> Itinerari</h1>
            </div>
        </div>
    );
};

export default Infosection;
