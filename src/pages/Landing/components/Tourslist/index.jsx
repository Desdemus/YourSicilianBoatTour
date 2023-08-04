import { useState } from "react";
import TourCard from "../TourCard/index";
import { tourdata } from "../../utils/data";
import styles from "./index.module.scss";

const TourList = () => {
    const tours = tourdata;
    const [visibleCards, setVisibleCards] = useState(8);
    const [selectedDeparture, setSelectedDeparture] = useState("");

    const loadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 8);
    };

    const showLess = () => {
        setVisibleCards(prevVisibleCards => Math.max(prevVisibleCards - 8, 0));
    };

    const departures = Array.from(new Set(tourdata.map(tour => tour.departure.Port)));

    const handleDepartureChange = event => {
        const selectedDeparture = event.target.value;
        setSelectedDeparture(selectedDeparture);
    };

    const filteredTours = selectedDeparture
        ? tours.filter(tour => tour.departure.Port === selectedDeparture)
        : tours;

    return (
        <div className={styles.Tourlist}>
            <div className={styles["filter-container"]}>
                <select value={selectedDeparture} onChange={handleDepartureChange}>
                    <option value="">Mostra tutti</option>
                    {departures.map(departure => (
                        <option key={departure} value={departure}>
                            {departure}
                        </option>
                    ))}
                </select>
            </div>
            {selectedDeparture && (
                <div className={styles["selected-departure-title"]}>
                    Itinerari da {selectedDeparture}
                </div>
            )}
            {filteredTours.slice(0, visibleCards).map(tour => (
                <TourCard key={tour.id} tour={tour} />
            ))}
            {visibleCards < filteredTours.length ? (
                <div>
                    <button className="load-more-button" onClick={loadMore}>
                        Mostra altri
                    </button>
                    <button className="show-less-button" onClick={showLess}>
                        Riduci vista
                    </button>
                </div>
            ) : (
                <button className="show-less-button" onClick={showLess}>
                    Riduci vista
                </button>
            )}
        </div>
    );
};

export default TourList;
