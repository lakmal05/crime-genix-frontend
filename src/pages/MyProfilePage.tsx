import "../styles/common/commonStyles.scss";
import { useNavigate } from "react-router-dom";
import { customToastMsg, handleError } from "../util/commonFunctions";
import { useEffect, useState } from "react";
import NavBar from "../components/common/NavBar";
import { Col, Row } from "antd";
import UserImg from "../assets/images/userImg.png";
import { Cookies } from "typescript-cookie";
import { authUserDetailsObj } from "../util/interfaces/uiNecessaryInterface";
import moment from "moment";

const MyProfilePage = () => {
  const history = useNavigate();

  const [userDetails, setUserDetails] = useState<authUserDetailsObj>();

  useEffect(() => {
    const authUserString =
      Cookies.get("authUser") && JSON.parse(Cookies.get("authUser") as string);
    setUserDetails(authUserString);
  }, []);

  return (
    <>
      {" "}
      <NavBar pageName="bgNavBar" />
      <div
        className="position-relative"
        style={{
          backgroundColor: "white",
          height: "auto",
        }}
      >
        <div className="w-100 d-flex justify-content-center w-100">
          <div className="mainTextDiv w-90">
            {" "}
            <Row>
              <Col
                xs={24}
                sm={24}
                md={10}
                lg={6}
                xl={5}
                xxl={4}
                className="d-flex justify-content-center justify-content-md-start"
              >
                <img
                  src={UserImg}
                  height={260}
                  width={260}
                  className="rounded-circle border border-dark"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={14}
                lg={18}
                xl={19}
                xxl={20}
                className=" ps-0 ps-lg-5"
              >
                <h1 className="font-size-1-2 mainText font-weight-semi-bold   text-center text-md-start font-family-2 m-0">
                  {userDetails?.firstName + " " + userDetails?.lastName}
                </h1>
                <h1 className="font-size-3 font-weight-semi-bold text-center text-md-start font-family-2 m-0">
                  Police Officer
                </h1>

                <Row className="mt-2 text-center text-md-start">
                  <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Email : {userDetails?.email}{" "}
                    </h5>
                    <h5 className=" font-size-4 font-weight-normal my-3">
                      Joined with crime genix :{" "}
                      {moment(userDetails?.createdAt).format("YYYY-MM-DD")}{" "}
                    </h5>
                  </Col>
                </Row>
              </Col>
            </Row>
            <h5 className=" font-size-4 font-weight-medium mt-5">
              Thank you for join with Crime Genix
            </h5>
            <p className="mt-4">
              At Crime Genix, we are redefining the future of forensic science
              by merging cutting-edge artificial intelligence with advanced DNA
              analysis. Our platform is designed to empower law enforcement
              agencies, forensic teams, and researchers with innovative tools
              that transform DNA evidence into actionable insights. By
              leveraging technology, we aim to enhance the accuracy, efficiency,
              and speed of crime investigations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyProfilePage;
