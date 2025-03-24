import "../styles/login/loginStyles.scss";
import "../styles/common/commonStyles.scss";
import fileUploadBgImage from "../assets/images/fileUploadBgImage.png";
import { useNavigate } from "react-router-dom";
import {
  customToastMsg,
  handleError,
  popUploader,
} from "../util/commonFunctions";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Radio,
  Row,
  Upload,
  UploadProps,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import NavBar from "../components/common/NavBar";
import { useDispatch } from "react-redux";
import * as constants from "../util/constants";
import { Cookies } from "typescript-cookie";
import axios from "axios";
import { DNASequencePredictionDataObj } from "../util/interfaces/uiNecessaryInterface";
import AOS from "aos";
import "aos/dist/aos.css";

const DNAUploadPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [fileType, setFileType] = useState<string>("File");
  const [DNASequence, setDNASequence] = useState<string>("");
  const [aiPredictedDetails, setAiPredictedDetails] =
    useState<DNASequencePredictionDataObj>();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [form] = Form.useForm();

  const { Dragger } = Upload;

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const handleFileRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e?.target?.result;
      if (content) {
        setDNASequence(content.toString());
        console.log("File Content:", content);
      }
    };
    reader.readAsText(file);
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    showUploadList: false,
    beforeUpload: (file) => {
      handleFileRead(file);
      setUploadedFile(file);
      message.success(`${file.name} file uploaded successfully.`);
      return false;
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
      const file = e.dataTransfer.files[0];
      handleFileRead(file);
      setUploadedFile(file);
    },
  };

  const getDNASequencePrediction = async () => {
    let isValidate = false;

    DNASequence === "" && fileType === "File"
      ? customToastMsg("Please select DNA sequence file", 2)
      : DNASequence === "" && fileType === "Input"
      ? customToastMsg("Please enter DNA sequence", 2)
      : (isValidate = true);

    if (isValidate) {
      popUploader(dispatch, true);

      const payload = {
        dna_sequence: DNASequence,
      };

      let access_token = Cookies.get(constants.ACCESS_TOKEN);
      await axios
        .post(`http://localhost:5000/predict`, payload, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          setDNASequence("");
          popUploader(dispatch, false);
          setAiPredictedDetails(res?.data?.predictions);
          history("/dna-result", {
            state: {
              aiPredictedDataObj: res?.data?.predictions,
              DNASequence: DNASequence,
            },
          });
        })
        .catch((err) => {
          popUploader(dispatch, false);
          handleError(err);
        });
    }
  };

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
        <div className="w-100 d-flex justify-content-center">
          <div className="mainTextDiv w-90">
            {" "}
            <h1
              data-aos="fade-up"
              className="font-size-1-2 mainText  font-weight-semi-bold   text-center text-lg-start font-family-2 mt-5 mt-lg-0 w-100"
            >
              Unlock the Truth
            </h1>
            <p
              data-aos="fade-up"
              className="font-size-5 subText font-weight-light align-self-end  text-center text-lg-start"
            >
              Harness the power of AI-driven forensic science to uncover
              identities, solve mysteries, and bring justice—faster, smarter,
              and with unparalleled accuracy
            </p>
            <Form
              data-aos="fade-up"
              data-aos-delay="300"
              form={form}
              layout="vertical"
              className="mt-5 d-flex flex-column align-items-center w-100"
            >
              {/* <Row>
                <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={5}></Col>
                <Col xs={24} sm={24} md={24} lg={18} xl={18} xxl={19}></Col>
              </Row> */}
              <Form.Item
                className="align-self-start w-100 ps-5 ps-lg-0"
                name="fileType"
                label={
                  <span className="font-size-4">Choose Upload Method</span>
                }
              >
                <Radio.Group
                  name="fileType"
                  value={fileType}
                  onChange={(e) => {
                    setFileType(e.target?.value);
                  }}
                  defaultValue={fileType}
                >
                  <div className="w-100 mb-5">
                    <Radio value="File" className="font-size-4">
                      <span className="font-size-4 font-weight-normal">
                        File Upload
                      </span>
                      <div className="text-muted small mt-0 position-absolute">
                        Upload a DNA sequence file
                      </div>
                    </Radio>
                  </div>
                  <div className="w-100 mt-4">
                    <Radio value="Input" className="font-size-4">
                      <span className="font-size-4 font-weight-normal">
                        Manual Input
                      </span>
                      <div className="text-muted small mt-0 position-absolute">
                        Enter the DNA sequence manually
                      </div>
                    </Radio>
                  </div>
                </Radio.Group>
              </Form.Item>
              {fileType === "File" && (
                <Form.Item
                  name="DNASequence"
                  className="w-75 mt-5 bg-white rounded-4"
                >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Upload your DNA sequence file
                    </p>
                    <p className="ant-upload-hint my-0">
                      Drag and drop your file here or click to browse.
                    </p>
                    <p className="ant-upload-hint mt-0">
                      Supported file formats: .txt, .csv, .fasta.
                    </p>
                  </Dragger>
                  {uploadedFile && (
                    <p className="text-center mt-2">
                      <strong>Uploaded File:</strong> {uploadedFile.name}
                    </p>
                  )}
                </Form.Item>
              )}
              {fileType === "Input" && (
                <Form.Item name="DNASequence" className="w-75 mt-5">
                  <Input
                    size="large"
                    id="DNASequence"
                    name="DNASequence"
                    value={DNASequence}
                    placeholder="Enter your DNA sequence"
                    className="rounded-4 p-3"
                    type="text"
                    onChange={(e) => setDNASequence(e.target.value)}
                  />
                </Form.Item>
              )}
            </Form>
            <Row className="pb-4 d-flex justify-content-center">
              <Button
                className="px-4 py-3 font-size-4"
                size="large"
                type="default"
                onClick={getDNASequencePrediction}
              >
                Get DNA Prediction
              </Button>
            </Row>
            <p className="font-size-4 font-weight-light text-center mx-5 px-0 px-lg-5 mt-5 mb-5">
              Our AI-powered forensic tool analyzes DNA samples to match genetic
              markers with databases. Ensuring accuracy, speed, and security in
              criminal investigations. Your uploaded data is encrypted and
              processed securely.
            </p>
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
export default DNAUploadPage;
