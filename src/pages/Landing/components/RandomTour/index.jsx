import { useState, useEffect } from 'react';
import TourCard from '../TourCard/index';
import { tourdata } from '../../utils/data';
import styles from "./index.module.scss";

const RandomTours = () => {
    const [randomCards, setRandomCards] = useState([]);

    useEffect(() => {
        generateRandomCards();
    }, []);

    const generateRandomCards = () => {
        const randomIndices = [];
        while (randomIndices.length < 8) {
            const randomIndex = Math.floor(Math.random() * tourdata.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        const randomTours = randomIndices.map(index => tourdata[index]);
        setRandomCards(randomTours);
    };

    return (
        <div className={styles["RandomTours"]}>
            {randomCards.map((randomCard, index) => (
                <div className={styles["RandomTours-card"]} key={index}>
                    <TourCard tour={randomCard} />
                </div>
            ))}
        </div>
    );
};

export default RandomTours;
