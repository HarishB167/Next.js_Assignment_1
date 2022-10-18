import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { data } from "../json/landingPage";

export default function Home() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });

  const [bgImgUrl, setBgImgUrl] = useState(
    `url("${data[0].heroSection.webBanner}")`
  );
  const [banner5Img, setBanner5Img] = useState("");

  useEffect(() => {
    const backgroundImageUrl = isBigScreen
      ? `url("${data[0].heroSection.webBanner}")`
      : `url("${data[0].heroSection.mobBanner}")`;
    setBgImgUrl(backgroundImageUrl);

    const bannerImg = isBigScreen
      ? `${data[0].banner5.webImg}`
      : `${data[0].banner5.mobImg}`;
    setBanner5Img(bannerImg);
  }, [isBigScreen]);

  const router = useRouter();
  const [selectCity, setSelectCity] = useState();

  const onSelectChange = (e) => {
    setSelectCity(e.target.value);
    if (e.target.value && e.target.value != "") router.push(e.target.value);
  };

  return (
    <>
      <Head>
        <title>{data[0].title}</title>
      </Head>

      <div
        className={styles.sectionMain}
        style={{
          backgroundImage: bgImgUrl,
        }}
      >
        <div>
          <div className={styles.subtitle}>{data[0].heroSection.title}</div>
          <div className={styles.taglineBig}>{data[0].heroSection.heading}</div>
          <div className={styles.taglineSmall}>
            {data[0].heroSection.description}
          </div>
          <select
            className={styles.selectLocation}
            name="location"
            id="location"
            onChange={onSelectChange}
            value={selectCity}
          >
            <option value="">Select your Location</option>
            {data[0].heroSection.form.map((item, idx) => (
              <option key={idx} value={item.landingUrl}>
                {item.dropdownItem}
              </option>
            ))}
          </select>
          <div className={styles.selectLocationBigScreen}>
            <div>Where do you need a service?</div>
            <div className={styles.selectLocationBigScreen__select}>
              <select
                name="location"
                id=""
                onChange={onSelectChange}
                value={selectCity}
              >
                <option value="">Select your city</option>
                {data[0].heroSection.form.map((item, idx) => (
                  <option key={idx} value={item.landingUrl}>
                    {item.dropdownItem}
                  </option>
                ))}
              </select>
              <img src="/images/select_down_arrow.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionBenefits}>
        <img
          className={styles.sectionBenefits__largeScreenImg}
          src={banner5Img}
          alt={data[0].banner5.altText}
        />
      </div>
      <div className={styles.sectionAbout}>
        <div>
          <div>
            <span className={styles.sectionAbout__title}>
              {data[0].banner4.title}
            </span>
          </div>
          <div className={styles.sectionAbout__paragraph}>
            {data[0].banner4.description}
          </div>
        </div>

        <div className={styles.sectionAbout__featuresList}>
          {data[0].banner4.imgs.map((url, idx) => (
            <img key={idx} src={url} />
          ))}
        </div>
      </div>
      <div className={styles.sectionFooter}>
        <div className={styles.sectionFooter__heading_text}>
          <div className={styles.sectionFooter__headings}>TOP LOCATIONS</div>
          <div
            className={
              styles.sectionFooter__text + " " + styles.sectionFooter__mw73
            }
          >
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
        <div className={styles.sectionFooter__heading_text}>
          <div className={styles.sectionFooter__headings}>Contact Us</div>
          <div
            className={
              styles.sectionFooter__text + " " + styles.sectionFooter__mw73
            }
          >
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
