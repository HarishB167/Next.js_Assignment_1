import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.sectionMain}>
        <div>
          <div className={styles.subtitle}>URBAN CLEANING EXPERT</div>
          <div className={styles.taglineBig}>
            Quality home cleaning servcies, on demand
          </div>
          <div className={styles.taglineSmall}>
            Experienced, hand-picked professionals to serve you at your doorstep
          </div>
          <select
            className={styles.selectLocation}
            name="location"
            id="location"
          >
            <option>Select your Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbar">Mumbai</option>
            <option value="Lucknow">Lucknow</option>
          </select>
          <div className={styles.selectLocationBigScreen}>
            <div>Where do you need a service?</div>
            <div className={styles.selectLocationBigScreen__select}>
              <select name="location" id="">
                <option>Select your city</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <img src="/images/select_down_arrow.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={"d-flex flex-column " + styles.sectionBenefits}>
        <div className={styles.sectionBenefits__title}>
          Why People Choose Us
        </div>
        <div className={"d-flex " + styles.sectionBenefits__list}>
          <ul>
            <li>Affordable Rates</li>
            <li>On Time Service</li>
            <li>Verified Professionals</li>
            <li>Excellent Service</li>
          </ul>
          <img
            src="/images/why-standing-let-us-dance.png"
            alt="Girl holding smartphone and listening music"
          />
        </div>
      </div>
      <div className={"d-flex flex-column " + styles.sectionAbout}>
        <div>
          <div>
            <span className={styles.sectionAbout__title}>
              About Urban Cleaning Expert
            </span>
          </div>
          <div className={styles.sectionAbout__paragraph}>
            Urban Cleaning Expert is one of the most trusted service providers
            in India. We provide excellent services for several home appliance
            care, home care and Cleaning services. Our services are trusted by a
            large number of clients and Industries. It is the result of our
            dedicated teamwork, which makes us one of the most trusted service
            providers across the nation. Our company is staffed with expert and
            well-trained professionals who carry several years of experience
            with them and all of them work tirelessly to earn our customer
            satisfaction.
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex">
            <div className={styles.sectionAbout__feature}>
              <img src="/images/clock.png" alt="Clock" />
              <div>ON TIME SERVICE</div>
            </div>
            <div className={styles.sectionAbout__feature}>
              <img src="/images/rupee_symbol.png" alt="Rupee symbol" />
              <div>TRANSPARENT PRICES</div>
            </div>
          </div>
          <div className="d-flex">
            <div className={styles.sectionAbout__feature}>
              <img
                src="/images/professional_icon.png"
                alt="Professional icon"
              />
              <div>TRAINED PROFESSIONALS</div>
            </div>
            <div className={styles.sectionAbout__feature}>
              <img
                src="/images/assured_service_quality.png"
                alt="Service quality icon"
              />
              <div>ASSURED SERVICE QUALITY</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionFooter}>
        <div>
          <div className={styles.sectionFooter__headings}>TOP LOCATIONS</div>
          <div className={styles.sectionFooter__text}>
            Noida • Delhi • Gurgaon • Ghaziabad • Faridabad • Agra • Ahmedabad •
            Amritsar • Aurangabad • Bangalore • Bhopal • Bhubaneswar •
            Chandigarh • Chennai • Coimbatore • Dehradun • Greater Noida •
            Guwahati • Gwalior • Hyderabad • Indore • Jabalpur • Jaipur •
            Jamshedpur • Kanpur • Kochi • Kolkata • Kota • Lucknow • Ludhiana •
            Meerut • Mohali • Mumbai • Navi Mumbai • Mysore • Nagpur • Nashik •
            Patna • Panipat • Prayagraj • Pune • Raipur • Ranchi • Surat •
            Thiruvananthapuram • Vadodara • Varanasi • Vijayawada •
            Visakhapatnam
          </div>
        </div>
        <div>
          <div className={styles.sectionFooter__headings}>Contact Us</div>
          <div className={styles.sectionFooter__text}>
            <div>Phone : +91 782 762 1417</div>
            <div>Email : support@roservicecenter.live</div>
          </div>
        </div>
        <div className={styles.sectionFooter__text}>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Near me</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.sectionFooter__socialLinks}>
          <a href="#">
            <img src="/images/instagram_icon.svg" alt="Instagra," />
          </a>
          <a href="#">
            <img src="/images/twitter_icon.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/images/linkedin_icon.svg" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/images/facebook_icon.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/images/youtube_icon.svg" alt="Youtube" />
          </a>
          <a href="#">
            <img src="/images/pinterest_icon.svg" alt="Pinterest" />
          </a>
        </div>
        <div className={styles.sectionFooter__copyrightInfo}>
          <span>&copy; 2022 House Cleaning Expert</span>
        </div>
      </div>
    </>
  );
}
