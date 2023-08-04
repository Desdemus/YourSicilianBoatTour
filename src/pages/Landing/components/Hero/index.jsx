import styles from "./index.module.scss";
import hero from "../../../../assets/images/hero.jpeg"

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <img
                src={hero}
                alt="hero"
            />
            <h1>Lorem ipsum dolor si amet</h1>
        </div>
    );
};

export default Hero;
