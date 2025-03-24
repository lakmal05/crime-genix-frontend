import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../assets/images/404_error.png";

const NotFoundPage = () => {
  const history = useNavigate();

  return (
    <div
      className="NotFoundPageContainer py-5 py-lg-0 w-100 d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Row className="contentRow d-flex align-items-center justify-content-center pt-5 pt-lg-0 w-100">
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          xxl={8}
          className="pe-0 pe-md-4"
        >
          <img src={ErrorImage} alt="image " height="auto" width="100%" />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={18}>
          <div className=" text-center">
            <h1 className=" font-weight-medium font-size-1 text-center  primary-color ">
              Page Not Found
            </h1>
            <h6 className="text-center fw-normal mt-3">
              It seems the page you're looking for doesn’t exist or is currently
              unavailable.
            </h6>
            <h6 className="text-center font-size-5 mt-3 fw-light px-5 ">
              This issue can occur for a few reasons: The page has likely been
              removed or is no longer active, the link you've followed may be
              incorrect or outdated, or you may have entered the URL
              inaccurately.
            </h6>
          </div>
        </Col>

        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Button
            size="large"
            type="primary"
            className=" w-100  mt-3 rounded-3 py-2 font-size-4"
            style={{ whiteSpace: "normal", height: "auto" }}
            onClick={() => {
              history("/");
            }}
          >
            Back To Home
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default NotFoundPage;
