import { useState } from 'react';
import TourCard from '../TourCard';
import { tourdata } from '../../utils/data';
import styles from './index.module.scss';

const Filter = () => {
    const tours = tourdata;
    const [visibleCards, setVisibleCards] = useState(8);
    const [selectedOption, setSelectedOption] = useState('all');
    const uniqueDeparturePorts = ['all', ...new Set(tours.map(tour => tour.arrival.Port))];

    const loadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 8);
    };

    const filteredTours = selectedOption === 'all'
        ? tours.slice(0, visibleCards)
        : tours.filter(tour => tour.arrival.Port === selectedOption).slice(0, visibleCards);

    return (
        <div className={styles['Tourlist']}>
            <div>
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    {uniqueDeparturePorts.map(option => (
                        <option key={option} value={option}>
                            {option === 'all' ? 'Mostra tutti' : `Mostra per ${option}`}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles['tour-card']}>
                {filteredTours.map(tour => (
                    <TourCard key={tour.id} tour={tour} />
                ))}
                {visibleCards < filteredTours.length && (
                    <button className="load-more-button" onClick={loadMore}>
                        Mostra di più
                    </button>
                )}
            </div>
        </div>
    );
};

export default Filter;
