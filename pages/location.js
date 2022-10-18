import { useMediaQuery } from "react-responsive";
import styles from "../styles/Location.module.css";
import Select from "../components/Select";
import ServiceList from "../components/ServiceList";
import PlansList from "../components/PlansList";
import { data } from "../json/allData";
import { otherData } from "../json/otherData";
import StarReviews from "../components/StarReviews";
import ProfessionalDetailCard from "../components/ProfessionalDetailCard";
import FaqList from "../components/FaqList";
import CommunityTalksList from "../components/CommunityTalksList";
import SparePartsList from "../components/SparePartsList";

export default function Location() {
  const offerBanner = data[0].offerBanner;
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
  const faq = data[0].faq;
  const communityTalks = otherData.communityTalks;
  const servingIn = data[0].internalLinks.servingAreas;
  const alsoAvailableIn = data[0].internalLinks.alsoAvailableIn.slice(0, 10);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const backgroundImageUrl = isBigScreen
    ? `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 60%),
        url("${data[0].heroSection.webBanner}")`
    : `linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0) 100%),
        url("${data[0].heroSection.mobBanner}")`;

  const sparePartsList = data[0].spareParts;

  const carouselServices = data[0].carousel;

  return (
    <>
      <div
        className={styles.sectionLocationInfo}
        style={{
          backgroundImage: backgroundImageUrl,
        }}
      >
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
        {offerBanner.map((item, idx) => (
          <a key={idx} href={item.landingUrl}>
            <img src={item.imgUrl} />
          </a>
        ))}
      </div>

      <div className={styles.columnContainer}>
        <div className={styles.firstColumn}>
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
        </div>

        <div className={styles.secondColumn}>
          <div className={styles.secondColumn__row1}>
            {isBigScreen && (
              <ul className={styles.breadcrumb}>
                <li className={styles.breadcrumb_root}>
                  <span>Home</span>
                </li>
                <li className={styles.breadcrumb_item}>
                  <span>Noida</span>
                </li>
                <li className={styles.breadcrumb_current}>
                  <span>Water Purifier</span>
                </li>
              </ul>
            )}

            <div className={styles.sectionServicesList}>
              <div className={styles.sectionServiceList__title}>
                Water Purifier Service Near You
              </div>
              <ServiceList servicesList={servicesList} />
              <button className={styles.sectionServiceList__moreBtn}>
                More
              </button>
            </div>

            <div className={styles.sectionBrowseAmcPlans}>
              <div className={styles.sectionBrowseAmcPlans__title}>
                Browse AMC Plans
              </div>
              <PlansList plansList={plansList} />
            </div>

            <div className={styles.sectionSpareParts}>
              <div className={styles.sectionSpareParts__title}>
                Spare Parts Price with Brands
              </div>
              <SparePartsList sparePartsList={sparePartsList} />
            </div>

            <div className={styles.sectionWhyChooseUs}>
              <div className={styles.sectionWhyChooseUs___title}>
                Why Choose us?
              </div>
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
                  <span>Sanitization of tool &amp; area</span>
                </div>
                <div>
                  <img src="/images/arogya_setu.svg" alt="" />
                  <span>Arogya setu to ensure safety</span>
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
              <div
                className={styles.sectionProfessionalsList__professionalList}
              >
                {professionalsList.map((item, idx) => (
                  <ProfessionalDetailCard key={idx} details={item} />
                ))}
              </div>
            </div>

            <div className={styles.sectionMoreServices}>
              <span className={styles.sectionMoreServices__title}>
                YOU MAY ALSO NEED THESE SERVICES
              </span>
              <div className={styles.sectionMoreServices__list}>
                <span>WASHING MACHINE</span>
                <span>WASHING MACHINE</span>
                <span>WASHING MACHINE</span>
                <span>WASHING MACHINE</span>
              </div>
            </div>

            <div className={styles.sectionMostUsedServices}>
              <div className={styles.sectionMostUsedServices__title}>
                Most Used Services
              </div>
              <div className={styles.sectionMostUsedServices__subtitle}>
                Premium Home Services
              </div>
              <div className={styles.sectionMostUsedServices__servicesList}>
                <div>
                  <img src="/images/termites.png" />
                  <span>Termite Control</span>
                </div>
                <div>
                  <img src="/images/bed_bugs.png" />
                  <span>Bed Bugs</span>
                </div>
              </div>
            </div>

            <div className={styles.sectionTop10HouseCleaningServices}>
              <h1>Top 10 House Cleaning Service in Delhi NCR :</h1>

              <h2>Services Included in House Cleaning Services:</h2>
              <hr />
              <ol>
                <li>
                  Includes of all Rooms Cleaning, Bathroom Cleaning, Kitchen
                  Cleaning and Balcony Area Cleaning
                </li>
                <li>Ceiling dusting</li>
                <li>Fans/Ac dusting &amp; Cleaning</li>
                <li>Walls dusting</li>
                <li>Window and channel cleaning</li>
                <li>
                  Curtain Cleaning, Sofa Cleaning, mattress &amp; carpet
                  vacuuming
                </li>
                <li>Glass Cleaning</li>
                <li>
                  All Wooden Furniture, Doors, etc. cleaning and Polishing
                </li>
                <li>Floor Scrubbing</li>
                <li>
                  After removing the fridge, almirah, sofa, and cleaning the
                  floor, the goods will be put back in place
                </li>
                <li>
                  Oil layer on the kitchen wall will be removed by the kitchen
                  cleaner
                </li>
                <li>
                  Water stains, pan stains, or floor stains in the bathroom will
                  be removed
                </li>
              </ol>

              <h2>
                Materials &amp; Equipment's Used In House Cleaning Services:
              </h2>
              <hr />
              <ol>
                <li>Professional cleaning chemicals</li>
                <li>Single-disc floor scrubber/handheld scrubber</li>
                <li>Vacuum Cleaner</li>
                <li>Microfiber Cloths for dusting</li>
                <li>Mops, Scotch Brite / foam or scrubbers.</li>
                <li>Ladders, bucket, wiper and mugs etc.</li>
              </ol>

              <h2>Benefits Of Booking Us For Home Cleaning Services:</h2>
              <hr />
              <ol>
                <li>
                  Best price guarantee: We offer you the best and lowest price
                  offered in the market.
                </li>
                <li>
                  Five Star Rated Experts: Providing you with the top certified
                  and accomplished practitioners.
                </li>
                <li>
                  Timely Service: Our specialists are committed to delivering
                  timely services.
                </li>
                <li>
                  100% safe chemicals usage: Our Experts use environmentally
                  friendly chemicals
                </li>
              </ol>

              <h2>Safety Precautions Follows In House Cleaning Services:</h2>
              <hr />
              <ol>
                <li>Minimal touch contact &amp; social distancing</li>
                <li>Daily temperature monitoring.</li>
                <li>Wearing masks and gloves.</li>
                <li>Regular sanitization of hands.</li>
                <li>Compliant of the Aarogaya Setu App.</li>
              </ol>
            </div>

            <div className={styles.carouselServices}>
              <div className={styles.carouselServices__title}>
                {carouselServices.title}
              </div>
              <div className={styles.carouselServices__list}>
                {carouselServices.cardItems.map((item) => (
                  <a href={item.landingUrl}>
                    <div>
                      <img src={item.imgUrl} />
                      <span>{item.displayName}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.sectionFAQ}>
              <FaqList faqList={faq} />
            </div>

            <div className={styles.sectionCommunityTalks}>
              <div className={styles.sectionCommunityTalks__title}>
                Community Talks
              </div>
              <CommunityTalksList
                talksList={communityTalks}
                showReplayButton={true}
              />
            </div>
          </div>

          <div className={styles.sectionQuickLinks}>
            <div className={styles.sectionQuickLinks__title}>Quick Links</div>
            <div className={styles.sectionQuickLinks__subsection}>
              <div className={styles.sectionQuickLinks__subtitle}>
                Serving in
              </div>
              <div className={styles.sectionQuickLinks__linksList}>
                <span>
                  <a href={servingIn[0].link}>{servingIn[0].anchorText}</a>
                </span>
                {servingIn.slice(1).map((item, idx) => (
                  <>
                    <span className={styles.sectionQuickLinks__dot}>
                      {" "}
                      &#9679;{" "}
                    </span>
                    <span key={idx}>
                      <a href={item.link}>{item.anchorText}</a>
                    </span>
                  </>
                ))}
              </div>
            </div>
            <div className={styles.sectionQuickLinks__subsection}>
              <div className={styles.sectionQuickLinks__subtitle}>
                Also available in
              </div>
              <div className={styles.sectionQuickLinks__linksList}>
                <span>
                  <a href={alsoAvailableIn[0].link}>
                    {alsoAvailableIn[0].anchorText}
                  </a>
                </span>
                {alsoAvailableIn.slice(1).map((item, idx) => (
                  <>
                    <span className={styles.sectionQuickLinks__dot}>
                      {" "}
                      &#9679;{" "}
                    </span>
                    <span key={idx}>
                      <a href={item.link}>{item.anchorText}</a>
                    </span>
                  </>
                ))}
                <span className={styles.sectionQuickLinks__dot}> &#9679; </span>
                <span className={styles.sectionQuickLinks__seeMore}>
                  <a>See more</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionFooter}>
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
            <img src="/images/instagram_icon_dark.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/images/twitter_icon_dark.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="/images/linkedin_icon_dark.svg" alt="LinkedIn" />
          </a>
          <a href="#">
            <img src="/images/facebook_icon_dark.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/images/youtube_icon_dark.svg" alt="Youtube" />
          </a>
          <a href="#">
            <img src="/images/pinterest_icon_dark.svg" alt="Pinterest" />
          </a>
        </div>
        <div className={styles.sectionFooter__copyrightInfo}>
          <span>&copy; 2022 House Cleaning Expert</span>
        </div>
      </div>
    </>
  );
}
