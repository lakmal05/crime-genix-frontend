import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import mainDNAImage from "../assets/images/mainImage02.jpg";
import face3D from "../assets/images/3d_face.gif";
import processImg01 from "../assets/images/processImg01.png";
import processImg02 from "../assets/images/processImg02.png";
import processImg03 from "../assets/images/processImg03.png";
import processImg04 from "../assets/images/processImg04.png";
import processArrow from "../assets/images/processArrow.png";
import logoImg from "../assets/images/Logo/Logo.png";
import DNAAnimation from "../assets/images/DNA_animation04.gif";
import DNAVideo from "../assets/videos/video02.mp4";
import "../styles/homePageStyles.scss";
import "../styles/common/commonStyles.scss";
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const history = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div>
      <MainLayout>
        <div>
          <div
            className="position-relative"
            style={{
              backgroundColor: "white",
              height: "auto",
            }}
          >
            <div className="containerBox d-flex flex-column">
              <div className="mainTextDiv mt-5">
                {" "}
                <p
                  data-aos="fade-up"
                  data-aos-delay="600"
                  className="font-size-5 text-white font-weight-light align-self-end subText text-center text-lg-start"
                >
                  Unleashing the Power of Artificial Intelligence to Detect
                  Criminals and Solve Cases Faster, Smarter, and More Accurately
                </p>
                <h1
                  data-aos="fade-up"
                  className="font-size-1 text-white font-weight-semi-bold  mainText text-center text-lg-start font-family-2"
                >
                  Revolutionizing Justice with AI-Powered DNA Analysis
                </h1>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="subTextDiv align-self-center align-self-lg-end d-flex flex-column p-3 rounded-3"
              >
                {" "}
                <p className="font-size-4 text-white font-weight-light w-100 text-center text-lg-start">
                  From DNA to detailed profiles, Crime Genix empowers law
                  enforcement with cutting-edge forensic solutions
                </p>
                <Button
                  className="secondary-button px-4 py-3 align-self-center align-self-lg-end font-size-4"
                  size="large"
                  type="primary"
                  onClick={() => {
                    history("/dna-upload");
                  }}
                >
                  Get Start With Crime Genix
                </Button>
              </div>
            </div>
            <div className="w-100 image-container">
              <img src={mainDNAImage} className="mainDNAImage" />
            </div>
          </div>
          <div>
            <div className="containerBox my-5 mx-3 mx-lg-0 text-center text-lg-start">
              <h1
                data-aos="fade-up"
                data-aos-delay="1000"
                className="font-size-2 font-weight-semi-bold  mainText font-family-2"
              >
                Crime Genix
              </h1>
              <Row className="my-5 d-flex justify-content-center">
                <Col md={8} lg={8} xl={5} xxl={4} className="mb-5 mb-lg-0">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    style={{ cursor: "pointer" }}
                    width="100%"
                    height="auto"
                    src={logoImg}
                    alt="logo"
                  />
                </Col>
                <Col md={24} lg={16} xl={19} xxl={20} className=" ps-0 ps-lg-5">
                  <h5
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-weight-medium"
                  >
                    Who We Are
                  </h5>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-size-3"
                  >
                    At Crime Genix, we are redefining the future of forensic
                    science by merging cutting-edge artificial intelligence with
                    advanced DNA analysis. Our platform is designed to empower
                    law enforcement agencies, forensic teams, and researchers
                    with innovative tools that transform DNA evidence into
                    actionable insights. By leveraging technology, we aim to
                    enhance the accuracy, efficiency, and speed of crime
                    investigations.
                  </p>
                  <h5
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-weight-medium mt-4"
                  >
                    Our Mission
                  </h5>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-size-3"
                  >
                    Our mission is to provide accessible, ethical, and powerful
                    solutions that simplify forensic investigations, helping to
                    solve crimes faster while upholding the highest standards of
                    data privacy and security.
                  </p>
                </Col>
                <Col md={24} className="mt-0 mt-lg-2">
                  {" "}
                  <h5
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-weight-medium"
                  >
                    Our Vision
                  </h5>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-size-3"
                  >
                    We envision a world where justice is swift and precise,
                    driven by technologies that make advanced forensic tools
                    accessible to every region, from urban centers to
                    resource-limited communities.
                  </p>
                  <h5
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-weight-medium mt-4"
                  >
                    Our Approach
                  </h5>
                  <ul className="font-size-3 text-start">
                    <li data-aos="fade-up" data-aos-delay="1000">
                      Innovation-Driven: We are committed to developing
                      state-of-the-art solutions that push the boundaries of
                      forensic capabilities.
                    </li>
                    <li data-aos="fade-up" data-aos-delay="1000">
                      Collaboration-Centric: Working closely with law
                      enforcement agencies and forensic experts, we ensure our
                      platform meets the real-world needs of investigators.
                    </li>
                    <li data-aos="fade-up" data-aos-delay="1000">
                      Ethics-First: Data privacy, ethical AI use, and
                      transparent processes are at the core of everything we do.
                    </li>
                  </ul>
                  <h5
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-weight-medium mt-4"
                  >
                    Our Commitment
                  </h5>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-size-3"
                  >
                    We are committed to continuous innovation, ensuring our
                    platform evolves with the latest technological advancements
                    and forensic science breakthroughs. By prioritizing ethical
                    practices and global accessibility, Crime Genix is not just
                    a tool but a trusted partner in the pursuit of justice
                  </p>
                </Col>
              </Row>
            </div>
          </div>
          <div className="position-relative d-flex align-items-center justify-content-center videoContainerDiv">
            <video
              autoPlay
              loop
              muted
              controls={false}
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
              }}
            >
              <source src={DNAVideo} type="video/mp4" />
            </video>
            <div className="gradientOverlay"></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="1000"
              className="position-absolute d-flex flex-column align-items-center justify-content-center text-center"
              style={{ zIndex: 1 }}
            >
              {" "}
              <h1 className="font-size-1 text-white font-weight-semi-bold w-75 mainText">
                Crime Genix
              </h1>
              <h1 className="font-size-2 text-white font-weight-semi-bold w-75">
                Unveiling Identities And Solving Crimes
              </h1>
              <p className="font-size-4 text-white font-weight-medium w-50">
                Revolutionizing Crime Investigation with AI and DNA
              </p>
              <p className="font-size-5 text-white font-weight-light w-50">
                CrimeGenix deciphers DNA to reveal crucial suspect traits,
                aiding faster and smarter crime-solving. Advanced AI transforms
                forensic data into accurate visual profiles
              </p>
            </div>
          </div>
          <div>
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={16}
                xl={16}
                xxl={16}
                className="d-flex justify-content-center"
                style={{ zIndex: 2 }}
              >
                <div className="containerBox mx-3 mx-lg-0 mt-5 mb-0 mb-lg-5  text-center text-lg-start ">
                  <h1
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-size-2 font-weight-semi-bold  mainText font-family-2 w-100 mb-4 mt-4"
                  >
                    Why Choose Crime Genix
                  </h1>

                  <ul className="font-size-3 text-start">
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Comprehensive Tools: From DNA analysis to suspect
                      visualization, we offer an all-in-one platform tailored to
                      forensic needs.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      AI-Powered Insights: Our platform uses advanced algorithms
                      to predict traits such as age, gender, and ethnicity,
                      providing investigators with critical leads.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Global Standards: We comply with international data
                      privacy laws, ensuring your information is secure and
                      responsibly managed.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      User-Centric Design: Our intuitive interface makes it easy
                      for users with varying technical expertise to operate the
                      system effectively.{" "}
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Localized Solutions: Designed to address the unique
                      challenges of developing regions, our platform bridges the
                      gap in forensic technology.
                    </li>
                  </ul>

                  <h1
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className="font-size-2 font-weight-semi-bold  mainText font-family-2 mb-4 mt-5"
                  >
                    Crime Genix Gives
                  </h1>

                  <ul className="font-size-3 text-start">
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Advanced DNA Analysis: Predict physical traits like age,
                      gender, skin tone, and ancestry.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Suspect Profile Visualization: Use AI to generate visual
                      profiles based on DNA predictions.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Real-Time Matching: Quickly compare crime scene DNA with
                      suspect profiles.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      User-Friendly Interface: Intuitive design tailored for
                      forensic teams and law enforcement.
                    </li>
                    <li
                      data-aos="fade-up"
                      data-aos-delay="1000"
                      className="my-2"
                    >
                      Data Security: Ensures compliance with global data privacy
                      standards.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={8}
                xxl={8}
                className=" d-flex justify-content-center align-items-center"
              >
                <img
                  src={DNAAnimation}
                  alt="DNA"
                  width="100%"
                  height="auto"
                  className="DNAAnimation"
                />
              </Col>
            </Row>
          </div>
          <div className="manGifBg">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              {" "}
              <img
                width="auto"
                style={{ maxWidth: "100%" }}
                height="512px"
                src={face3D}
                alt="DNA"
                className="face3D"
              />
            </div>
            <Row
              className="containerBox mx-3 mx-lg-0 position-absolute my-5 text-white justify-content-between h-100 text-center text-lg-start"
              style={{ top: 0 }}
            >
              <Col xs={24} sm={24} md={24} lg={8} xl={7} xxl={9}>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="font-size-2 font-weight-semi-bold  font-family-2"
                >
                  Advanced DNA Analysis & AI-Driven Suspect Profiling
                </h1>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="font-size-3 font-weight-medium  font-family-2"
                >
                  Unlock the Power of Genetics
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="font-size-4 mt-5"
                >
                  Our cutting-edge DNA analysis technology extracts crucial
                  physical traits from genetic material, including
                </p>
                <ul className="font-size-4 text-start">
                  <li data-aos="fade-up" data-aos-delay="1000">
                    Age Estimation – Predict an individual's approximate age
                    range.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="1000">
                    Gender Identification – Determine the biological sex with
                    high accuracy.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="1000">
                    Skin Tone & Ancestry Mapping – Reconstruct ethnic background
                    and complexion traits.
                  </li>
                </ul>
              </Col>

              <Col
                xs={24}
                sm={24}
                md={24}
                lg={8}
                xl={7}
                xxl={8}
                className="align-self-end mb-5 pb-5"
              >
                <h1
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="font-size-2 font-weight-semi-bold  font-family-2"
                >
                  AI-Generated Suspect Visualization
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  className="font-size-4 mt-5"
                >
                  With advanced artificial intelligence, our system translates
                  DNA predictions into detailed suspect renderings, assisting
                  law enforcement in
                </p>
                <ul className="font-size-4 text-start">
                  <li data-aos="fade-up" data-aos-delay="1000">
                    Generating realistic facial composites based on genetic
                    markers.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="1000">
                    Refining search parameters by matching visual profiles with
                    witness descriptions.
                  </li>
                  <li data-aos="fade-up" data-aos-delay="1000">
                    Enhancing investigative accuracy and reducing false leads.
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          <div className="containerBox mx-3 mx-lg-0 my-5">
            <h1
              data-aos="fade-up"
              data-aos-delay="1000"
              className="font-size-2 font-weight-semi-bold  mainText font-family-2"
            >
              How Crime Genix Works From DNA to Digital Identity
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000" className="font-size-3">
              CrimeGenix leverages cutting-edge forensic science and AI to
              transform DNA evidence into detailed suspect profiles. By
              analyzing genetic markers, our system predicts key physical traits
              and generates realistic visual representations, revolutionizing
              criminal investigations.
            </p>
            <ul>
              {" "}
              <li data-aos="fade-up" data-aos-delay="1000" className="my-4">
                <h5 className="font-weight-medium">
                  {" "}
                  DNA Extraction & Analysis
                </h5>
                <p className="font-size-3">
                  Collected DNA samples undergo advanced sequencing to decode
                  genetic markers linked to physical traits.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="1000" className="my-4">
                <h5 className="font-weight-medium">
                  {" "}
                  Trait Prediction & Profiling
                </h5>
                <p className="font-size-3">
                  AI-driven algorithms analyze DNA to predict characteristics
                  like age, gender, skin tone, and ancestry.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="1000" className="my-4">
                <h5 className="font-weight-medium"> Suspect Visualization</h5>
                <p className="font-size-3">
                  The system generates a realistic facial composite based on the
                  predicted traits, aiding law enforcement in investigations.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="1000" className="my-4">
                <h5 className="font-weight-medium">
                  {" "}
                  Faster, Smarter, More Accurate
                </h5>
                <p className="font-size-3">
                  CrimeGenix accelerates investigations with forensic precision,
                  bridging the gap between evidence and justice.
                </p>
              </li>
              <li data-aos="fade-up" data-aos-delay="1000" className="my-4">
                <h5 className="font-weight-medium">
                  {" "}
                  Smart Identification & Investigation
                </h5>
                <p className="font-size-3">
                  Profiles are compared with existing databases, narrowing down
                  suspects and improving case-solving efficiency.
                </p>
              </li>
            </ul>
            <Button
              data-aos="fade-up"
              data-aos-delay="1000"
              className="px-4 py-4 my-3 font-size-4"
              size="large"
              type="default"
              onClick={() => {
                history("/dna-upload");
              }}
            >
              Get Start With Crime Genix
            </Button>
            <Row className="d-flex align-items-center justify-content-center">
              <Col
                xs={12}
                sm={9}
                md={5}
                lg={5}
                xl={5}
                xxl={4}
                className="d-flex align-items-center px-2 px-sm-5 px-md-3 px-xl-5"
              >
                <img
                  data-aos="fade-right"
                  data-aos-delay="1200"
                  width="100%"
                  height="auto"
                  src={processImg01}
                  alt="processImg"
                />
              </Col>
              <Col
                xs={24}
                sm={2}
                md={1}
                lg={1}
                xl={1}
                xxl={1}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  data-aos="fade-right"
                  data-aos-delay="1250"
                  width="100%"
                  height="auto"
                  src={processArrow}
                  alt="processImg"
                  className="processArrowImg"
                />
              </Col>
              <Col
                xs={12}
                sm={9}
                md={5}
                lg={5}
                xl={5}
                xxl={4}
                className="d-flex align-items-center px-2 px-sm-5 px-md-3 px-xl-5"
              >
                <img
                  data-aos="fade-right"
                  data-aos-delay="1300"
                  width="100%"
                  height="auto"
                  src={processImg02}
                  alt="processImg"
                />
              </Col>
              <Col
                xs={24}
                sm={2}
                md={1}
                lg={1}
                xl={1}
                xxl={1}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  data-aos="fade-right"
                  data-aos-delay="1350"
                  width="100%"
                  height="auto"
                  src={processArrow}
                  alt="processImg"
                  className="processArrowImg"
                />
              </Col>
              <Col
                xs={12}
                sm={9}
                md={5}
                lg={5}
                xl={5}
                xxl={4}
                className="d-flex align-items-center px-2 px-sm-5 px-md-3 px-xl-5"
              >
                {" "}
                <img
                  data-aos="fade-right"
                  data-aos-delay="1400"
                  width="100%"
                  height="auto"
                  src={processImg03}
                  alt="processImg"
                />
              </Col>
              <Col
                xs={24}
                sm={2}
                md={1}
                lg={1}
                xl={1}
                xxl={1}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  data-aos="fade-right"
                  data-aos-delay="1450"
                  width="100%"
                  height="auto"
                  src={processArrow}
                  alt="processImg"
                  className="processArrowImg"
                />
              </Col>
              <Col
                xs={12}
                sm={9}
                md={5}
                lg={5}
                xl={5}
                xxl={4}
                className="d-flex align-items-center px-2 px-sm-5 px-md-3 px-xl-5"
              >
                {" "}
                <img
                  data-aos="fade-right"
                  data-aos-delay="1500"
                  width="100%"
                  height="auto"
                  src={processImg04}
                  alt="processImg"
                />
              </Col>
            </Row>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center w-100 textBar my-5 py-5">
            <div className="text-loop">
              <h1 className="iterableText">
                <span className="secondary-color">Analyze.</span>{" "}
                <span className="primary-color">Visualize.</span>{" "}
                <span className="text-dark">Solve.</span>{" "}
                <span className="secondary-color">
                  Revolutionizing Crime Investigations.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default HomePage;
