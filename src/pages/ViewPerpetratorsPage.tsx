import "../styles/addPerpetratorsStyles.scss";
import "../styles/common/commonStyles.scss";
import fileUploadBgImage from "../assets/images/ViewPerpetratorsPageBg.png";
import { useNavigate } from "react-router-dom";
import {
  customToastMsg,
  handleError,
  popUploader,
} from "../util/commonFunctions";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import NavBar from "../components/common/NavBar";
import { PerpetratorsCard } from "../components/common/cards/PerpetratorsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { getAllPerpetrators } from "../service/perpetratorService";
import {
  PerpetratorCardDetailsObj,
  PerpetratorDetailsObj,
} from "../util/interfaces/uiNecessaryInterface";

const ViewPerpetratorsPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [perpetratorList, setPerpetratorList] = useState<
    PerpetratorCardDetailsObj[]
  >([]);

  useEffect(() => {
    loadAllPerpetrators();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const loadAllPerpetrators = () => {
    popUploader(dispatch, true);
    getAllPerpetrators()
      .then((response: PerpetratorDetailsObj[]) => {
        let temp: PerpetratorCardDetailsObj[] = [];
        console.log(response);

        Object.keys(response).map((key: any) => {
          let perpetrator: PerpetratorDetailsObj = response[key];
          temp.push({
            id: perpetrator?.id,
            name: perpetrator?.name,
            age: perpetrator?.age,
            gender: perpetrator?.gender,
            nic: perpetrator?.nic,
            files: perpetrator?.files,
          });
        });
        setPerpetratorList(temp);
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
        <div className="w-100 d-flex justify-content-center">
          <div className="mainTextDiv w-90">
            {" "}
            <Row className="d-flex align-items-end">
              <Col xs={24} sm={24} md={19} lg={19} xl={19} xxl={20}>
                <h1
                  data-aos="fade-up"
                  className="font-size-1-2 mainText w-100 font-weight-semi-bold text-center text-lg-start font-family-2"
                >
                  Perpetrators
                </h1>
                <p
                  data-aos="fade-up"
                  className="font-size-5 w-75 font-weight-light align-self-end subText text-center text-lg-start"
                >
                  Harness the power of AI-driven forensic analysis to identify
                  criminals, solve cases faster, and enhance justice with
                  unparalleled accuracy and speed. Upload DNA, input records,
                  and uncover the truth—one match at a time
                </p>
              </Col>
              <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                <Button
                  data-aos="fade-up"
                  className="secondary-button px-4 py-3 align-self-center align-self-lg-end font-size-4 w-100"
                  size="large"
                  type="primary"
                  onClick={() => {
                    history("/add-perpetrators");
                  }}
                >
                  Add Perpetrator
                </Button>
              </Col>
            </Row>
            <Row className="my-5 d-flex justify-content-start">
              {perpetratorList?.map(
                (perpetrator: PerpetratorCardDetailsObj) => {
                  return (
                    <Col
                      data-aos="fade-up"
                      data-aos-delay="300"
                      xs={20}
                      sm={10}
                      md={8}
                      lg={6}
                      xl={5}
                      xxl={4}
                      className="mx-3 my-3"
                    >
                      <PerpetratorsCard
                        perpetratorDetails={perpetrator}
                        loadAll={() => {
                          loadAllPerpetrators();
                        }}
                      />
                    </Col>
                  );
                }
              )}
            </Row>
          </div>
        </div>
        <div className="w-100 h-100">
          <img
            src={fileUploadBgImage}
            className="fileUploadBgImage"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default ViewPerpetratorsPage;
