import styles from './index.module.scss';


const TourCard = ({ tour }) => {

    return (
        <div className={styles["TourCard"]}>
            <div className={styles["TourCard-price"]}>
                <h4>
                    {tour.budget.value}
                    {tour.budget.currencyCode}
                </h4>
                <p>{tour.budget.costType}</p>
            </div>
            <div className={styles['TourCard-title']}>
                <h3>{tour.title}</h3>
            </div>
            <div className={styles['TourCard-departure']}>
                <div className="">
                    <h4>PARTENZA DA {tour.arrival.Port}</h4>
                </div>
                <div className={styles['TourCard-boat']}>
                    <h4>{tour.boatType}</h4>
                </div>
                <div className={styles['TourCard-res']}>
                    <h4>
                        {tour.reservations}
                    </h4>
                    <h4>{tour.reservationsType}</h4>
                    <h4>Disponibilità {tour.reservationsAvailable}</h4>
                </div>
                <div className={styles['TourCard-time']}>
                    <h4>{tour.departureDate}</h4> <h4>{tour.arrivalDate}</h4>
                </div>
            </div>
            <button>PRENOTA</button>
        </div>
    );
};



export default TourCard;