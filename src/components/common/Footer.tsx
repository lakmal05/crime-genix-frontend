import "../../styles/common/Footer/footer.scss";
import "../../styles/common/commonStyles.scss";
import linkdin from "../../assets/images/icons/linkedin_icon.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const history = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      <footer className="footerMain">
        <div className="footer-inner container-fluid align-items-center">
          <div className="up-section d-flex justify-content-center align-items-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="1000"
              className="font-size-2 text-center text-white"
            >
              Ensuring Safety with <br />
              Intelligent Crime Analysis
            </h2>
          </div>

          {/* up section */}
          <div className="row mt-5 down-section-footer-last d-flex w-100 justify-content-between ">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul data-aos="fade-up" data-aos-delay="1000">
                <li className="text-uppercase first-li ">Navigation</li>
                <li
                  onClick={() => {
                    history("/");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Home{" "}
                </li>
                <li
                  onClick={() => {
                    history("/view-perpetrators");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Perpetrators{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul data-aos="fade-up" data-aos-delay="1000">
                <li className="text-uppercase first-li">What We Do</li>
                <li>Enhancing Security</li>
                <li>Empowering Investigations</li>
                <li>Leveraging AI & DNA Analysis</li>
                <li>Supporting Law Enforcement</li>
                <li>Driving Innovation in Forensics</li>
                <li>Building Safer Communities</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul data-aos="fade-up" data-aos-delay="1000">
                <li className="text-uppercase first-li">LEGAL</li>
                <li>General Info</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-item">
              <ul data-aos="fade-up" data-aos-delay="1000">
                <li className="text-uppercase first-li">CONTACT US</li>
                <li>lakmaljayawardhana59@gmail.com</li>
                <li>+94 75 5646498</li>

                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/lakmal-jayawardhana-10268430a/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img width={35} src={linkdin} alt="linkdin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down-section mt-4 d-flex justify-content-center align-items-center w-100">
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="mt-2 mb-2 all-right-reserved"
            >
              {new Date().getFullYear()} © Crime Genix. All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
