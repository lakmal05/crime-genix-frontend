import "../styles/addPerpetratorsStyles.scss";
import "../styles/common/commonStyles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import {
  customToastMsg,
  formatNamesCmnFun,
  handleError,
  popUploader,
} from "../util/commonFunctions";
import { useEffect, useState } from "react";
import { Carousel, Col, Row } from "antd";
import NavBar from "../components/common/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { getPerpetratorDetailsById } from "../service/perpetratorService";
import { useDispatch } from "react-redux";
import { PerpetratorDetailsObj } from "../util/interfaces/uiNecessaryInterface";
import defaultImage from "../assets/images/userImg-2.jpg";
import parser from "html-react-parser";
import moment from "moment";

const PerpetratorProfilePage = () => {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [perpetratorId, setPerpetratorId] = useState("");
  const [perpetratorDetails, setPerpetratorDetails] =
    useState<PerpetratorDetailsObj>();

  useEffect(() => {
    const { state } = location;
    if (state && state.perpetratorId) {
      const { perpetratorId } = state;
      console.log(perpetratorId, "1010101010101011");
      setPerpetratorId(perpetratorId);
      getPerpetratorDetails(perpetratorId);
    }
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const getPerpetratorDetails = (perpetratorId: number) => {
    popUploader(dispatch, true);
    getPerpetratorDetailsById(perpetratorId)
      .then((response) => {
        setPerpetratorDetails(response);
        popUploader(dispatch, false);
      })
      .catch((error) => {
        popUploader(dispatch, false);
        console.log(error);
        handleError(error);
      });
  };

  return (
    <>
      <NavBar pageName="bgNavBar" />
      <div
        className="position-relative"
        style={{
          backgroundColor: "white",
          height: "auto",
        }}
      >
        {perpetratorDetails && (
          <div className="w-100 d-flex justify-content-center">
            <div className="mainTextDiv w-90">
              {" "}
              <h1
                data-aos="fade-up"
                className="font-size-1-2 w-100 my-0 p-0 mainText  font-weight-semi-bold text-center text-lg-start font-family-2"
              >
                {formatNamesCmnFun(perpetratorDetails?.name)}
              </h1>
              <h1
                data-aos="fade-up"
                className="font-size-3 my-0 p-0 text-gray  font-weight-semi-bold text-center text-lg-start font-family-2"
              >
                Perpetrators
              </h1>
              <p
                data-aos="fade-up"
                className="font-size-5 w-100 mt-3 font-weight-light align-self-end subText text-center text-lg-start"
              >
                Harness the power of AI-driven forensic analysis to identify
                criminals, solve cases faster, and enhance justice with
                unparalleled accuracy and speed. Upload DNA, input records, and
                uncover the truth—one match at a time
              </p>
              <Row data-aos="fade-up" data-aos-delay="300" className="my-5">
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={6}
                  xxl={7}
                  className="w-100"
                >
                  <div className="object-fit-cover d-flex justify-content-center justify-content-xl-start justify-content-lg-start justify-content-md-start">
                    {perpetratorDetails?.files ? (
                      <Carousel autoplay style={{ height: 500, width: 400 }}>
                        {perpetratorDetails?.files.map((img, index) => (
                          <div
                            key={index}
                            className="d-flex justify-content-center"
                          >
                            <img
                              src={img?.fileUrl}
                              alt={"image"}
                              className="object-fit-cover"
                              width="80%"
                              height="auto"
                            />
                          </div>
                        ))}
                      </Carousel>
                    ) : (
                      <img
                        src={defaultImage}
                        alt="placeholder"
                        className="object-fit-cover"
                        width="80%"
                        height="auto"
                      />
                    )}
                    {/* <img
                      src={defaultImage}
                      alt={"image"}
                      className="object-fit-cover"
                      width="80%"
                      height="auto"
                    /> */}
                  </div>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={16}
                  xl={18}
                  xxl={17}
                  className="pb-5"
                >
                  <h5 className=" font-size-4 font-weight-normal my-3">
                    Full Name : {formatNamesCmnFun(perpetratorDetails?.name)}{" "}
                  </h5>
                  <h5 className=" font-size-4 font-weight-normal my-3">
                    Age : {perpetratorDetails?.age}{" "}
                  </h5>
                  <h5 className=" font-size-4 font-weight-normal my-3">
                    Gender : {formatNamesCmnFun(perpetratorDetails?.gender)}{" "}
                  </h5>
                  <h5 className=" font-size-4 font-weight-normal my-3">
                    NIC Number : {perpetratorDetails?.nic}{" "}
                  </h5>
                  <h5 className=" font-size-4 font-weight-normal my-3">
                    Added profile to the Crime genix at :{" "}
                    {moment(perpetratorDetails?.createdAt).format("YYYY-MM-DD")}{" "}
                  </h5>
                  <p className=" font-size-4 font-weight-normal mt-5">
                    {parser(
                      perpetratorDetails?.description
                        ? perpetratorDetails?.description
                        : ""
                    )}{" "}
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  xxl={24}
                  className="p-3 rounded-4"
                  style={{ backgroundColor: "#D9D9D9" }}
                >
                  <h5 className=" font-size-4 font-weight-semi-bold my-1">
                    Past Criminal Recodes
                  </h5>
                  <p className=" font-size-4 font-weight-normal mt-2">
                    {parser(
                      perpetratorDetails?.pastCriminalRecords
                        ? perpetratorDetails?.pastCriminalRecords
                        : ""
                    )}{" "}
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default PerpetratorProfilePage;
