import ServiceListItem from "./ServiceListItem";
import styles from "../styles/ServiceList.module.css";

const ServiceList = ({ servicesList }) => {
  return (
    <ul className={styles.servicesList}>
      {servicesList.map((service, idx) => (
        <ServiceListItem key={idx} service={service} />
      ))}
    </ul>
  );
};

export default ServiceList;
