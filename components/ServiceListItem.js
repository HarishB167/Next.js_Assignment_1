import styles from "../styles/ServiceList.module.css";

const ServiceListItem = ({ service }) => {
  return (
    <li className={styles.servicesListItem}>
      <div>
        <img src={service.cardBanner} />
        <div className={styles.servicesListItem__title}>{service.title}</div>
        <ul>
          {service.notes.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className={styles.servicesListItem__priceNbook}>
          <span className={styles.servicesListItem__price}>
            Rs. {service.price}/-
          </span>
          <span className={styles.servicesListItem__tncApply}>
            *T&amp;C Apply
          </span>
          <button>Book Now</button>
        </div>
      </div>
    </li>
  );
};

export default ServiceListItem;
