import styles from "../styles/Location.module.css";
import Select from "../components/Select";
import ServiceList from "../components/ServiceList";
import PlansList from "../components/PlansList";
import { data } from "../json/allData";
import StarReviews from "../components/StarReviews";
import ProfessionalDetailCard from "../components/ProfessionalDetailCard";

export default function Location() {
  const servicesList = data[0].cards.filter(
    (item) => item.cardType === "service"
  );
  const plansList = data[0].cards.filter((item) => item.cardType === "amc");
  const brandsImageLinks = data[0].brands;
  const reviews = data[0].reviews;
  const professionalsList = [
    {
      name: "Akhilesh Kumar Thakur",
      rating: "4",
      imageUrl: "/images/profile_sample_1.png",
      totalServing: "2,200",
      experienceInYears: "5.2",
      keywords: "kent, Livpure, Aquaguard, DoctorFresh, Zero -B",
    },
    {
      name: "Akhilesh Kumar Thakur",
      rating: "3",
      imageUrl: "/images/profile_sample_1.png",
      totalServing: "2,200",
      experienceInYears: "5.2",
      keywords: "kent, Livpure, Aquaguard, DoctorFresh, Zero -B",
    },
    {
      name: "Akhilesh Kumar Thakur",
      rating: "5",
      imageUrl: "/images/profile_sample_1.png",
      totalServing: "2,200",
      experienceInYears: "5.2",
      keywords: "kent, Livpure, Aquaguard, DoctorFresh, Zero -B",
    },
  ];

  return (
    <>
      <div className={styles.sectionLocationInfo}>
        <div>RO Service Near Me In Greater Noida @7065012902 | RO Service</div>
        <ul>
          <li>
            <img src="/images/delivery_bike.svg" alt="" />
            Ontime services Your Doorstep
          </li>
          <li>
            <img src="/images/badge_tick.svg" alt="" />
            15 Days No Question Ask Services Warranty{" "}
          </li>
          <li>
            <img src="/images/two_men_and_laptop.svg" alt="" />
            20% Lower than Market Price.
          </li>
          <li>
            <img src="/images/payment.svg" alt="" />
            Pay Online &amp; Get 5% additional Discount
          </li>
        </ul>
      </div>
      <div className={styles.sectionPromotions}>
        <img src="/images/promo_1.png" />
        <img src="/images/promo_2.png" />
        <img src="/images/promo_3.png" />
        <img src="/images/promo_4.png" />
        <img src="/images/promo_5.png" />
      </div>
      <div className={styles.sectionServiceSelection}>
        <Select
          name="cleaningOptions"
          id="clieaningOptions"
          defaultText="Select House Cleaning-Options"
          addStylesClass={styles.sectionServiceSelection__select}
          optionsKeyPairs={{
            option_1: "Option 1",
            option_2: "Option 2",
            option_3: "Option 3 ",
            option_4: "Option 4",
          }}
        />
        <input type="text" placeholder="Enter Name" />
        <div className={styles.sectionServiceSelection__phones}>
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Alternate Number" />
        </div>
        <input type="text" placeholder="Pincode or Address" />
        <button>Submit</button>
        <span>Average call back time : 12 min</span>
      </div>
      <div className={styles.sectionServicesList}>
        <div className={styles.sectionServiceList__title}>
          Water Purifier Service Near You
        </div>
        <ServiceList servicesList={servicesList} />
        <button className={styles.sectionServiceList__moreBtn}>More</button>
      </div>

      <div className={styles.sectionBrowseAmcPlans}>
        <div className={styles.sectionBrowseAmcPlans__title}>
          Browse AMC Plans
        </div>
        <PlansList plansList={plansList} />
      </div>

      <div className={styles.sectionWhyChooseUs}>
        <div className={styles.sectionWhyChooseUs___title}>Why Choose us?</div>
        <hr />
        <div className={styles.sectionWhyChooseUs__imagesList}>
          <img src="/images/certified_professionals.svg" alt="" />
          <img src="/images/service_warranty.svg" alt="" />
          <img src="/images/instant_booking.svg" alt="" />
          <img src="/images/affordable_price.svg" alt="" />
        </div>
      </div>

      <div className={styles.sectionSafetyMeasures}>
        <div className={styles.sectionSafetyMeasures___title}>
          Safety Measures
        </div>
        <hr />
        <div className={styles.sectionSafetyMeasures__imagesList}>
          <div>
            <img src="/images/masks.svg" alt="" />
            <span>Usage of masks &amp; gloves</span>
          </div>
          <div>
            <img src="/images/thermometer.svg" alt="" />
            <span>Temperature checks</span>
          </div>
          <div>
            <img src="/images/sanitizer.svg" alt="" />
            <span>Sanitizetion of tool &amp; area</span>
          </div>
          <div>
            <img src="/images/arogya_setu.svg" alt="" />
            <span>Arogya setu to ensure safely</span>
          </div>
        </div>
      </div>

      <div className={styles.sectionTrustedServProv}>
        <div className={styles.sectionTrustedServProv___title}>
          Trusted Service Provider
        </div>
        <hr />
        <div className={styles.sectionTrustedServProv__imagesList}>
          {brandsImageLinks.map((link) => (
            <img src={link} />
          ))}
        </div>
      </div>

      <div className={styles.sectionReviews}>
        <div className={styles.sectionReviews__title}>
          Read What our customers say
        </div>
        <hr />
        <div className={styles.sectionReviews__reviewsList}>
          {reviews.map((review) => (
            <>
              <div className={styles.sectionReviews__reviewsListItem}>
                <img src="/images/user_icon.svg" />
                <StarReviews rating={parseInt(review.rating)} />
                <div className={styles.sectionReviews__custName}>
                  {review.custName}
                </div>
                <div className={styles.sectionReviews__review}>
                  {review.review}
                </div>
              </div>
              <div className={styles.sectionReviews__vr}></div>
            </>
          ))}
        </div>
      </div>

      <div className={styles.sectionAwardsCertification}>
        <div className={styles.sectionAwardsCertification__title}>
          Award and Certification
        </div>
        <hr />
        <div className={styles.sectionAwardsCertification__imagesList}>
          <img src="/images/certificate_iso.svg" alt="" />
          <img src="/images/registered_trademark.svg" alt="" />
          <img src="/images/consumer_excellence_award.svg" alt="" />
        </div>
      </div>

      <div className={styles.sectionProfessionalsList}>
        <div className={styles.sectionProfessionalsList__title}>
          Our Professional
        </div>
        <hr />
        <div className={styles.sectionProfessionalsList__professionalList}>
          {professionalsList.map((item, idx) => (
            <ProfessionalDetailCard key={idx} details={item} />
          ))}
        </div>
      </div>
    </>
  );
}
