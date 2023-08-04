import { useState } from 'react';
import { tourdata } from '../../utils/data';
import TourCard from '../TourCard/index';
import styles from "./index.module.scss";

const FifthStep = () => {
    const [selectedFilter, setSelectedFilter] = useState("show_all");
    const [selectedDeparturePort, setSelectedDeparturePort] = useState("");

    const ports = Array.from(new Set(tourdata.map(tour => tour.departure.Port)));

    const handleFilterChange = event => {
        const selectedFilter = event.target.value;
        setSelectedFilter(selectedFilter);
    };

    const handleDepartureChange = event => {
        const selectedDeparturePort = event.target.value;
        setSelectedDeparturePort(selectedDeparturePort);
    };

    const filteredTours = selectedFilter === "show_all"
        ? tourdata
        : tourdata.filter(tour => tour.departure.Port === selectedDeparturePort);

    return (
        <>
            <div className={styles["FifthFather"]}>
                <div className={styles["Fifth-select"]}>
                    <select value={selectedFilter} onChange={handleFilterChange}>
                        <option value="show_all">Mostra tutte le card</option>
                        <option value="filter_by_departure">Mostra per porto di partenza</option>
                    </select>
                    {selectedFilter === "filter_by_departure" && (
                        <select value={selectedDeparturePort} onChange={handleDepartureChange}>
                            <option value="">Seleziona porto di partenza</option>
                            {ports.map(port => (
                                <option key={port} value={port}>
                                    {port}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <div className={styles.Fifth}>
                    <div className={styles["Fifth-list"]}>
                        {filteredTours.map(tour => (
                            <TourCard key={tour.id} tour={tour} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FifthStep;
