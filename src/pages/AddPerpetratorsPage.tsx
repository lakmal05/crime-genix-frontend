import "../styles/addPerpetratorsStyles.scss";
import "../styles/common/commonStyles.scss";
import fileUploadBgImage from "../assets/images/AddPerpetratorsPageBG.png";
import { useNavigate } from "react-router-dom";
import {
  countDescription,
  customToastMsg,
  handleError,
  popUploader,
} from "../util/commonFunctions";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  GetProp,
  Input,
  message,
  Radio,
  Row,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { desMaxLimit } from "../util/validation";
import ImgCrop from "antd-img-crop";
import NavBar from "../components/common/NavBar";
import { uploadFiles } from "../service/mediaService";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPerpetrator } from "../service/perpetratorService";
import { useDispatch } from "react-redux";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface FileUploadObject {
  id: string;
  path: string;
}

const AddPerpetratorsPage = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [NICNumber, setNICNumber] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [pastCriminalRecords, setPastCriminalRecords] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  //image upload states
  const [perpetratorProfileImgs, setPerpetratorProfileImgs] = useState<
    FileUploadObject[]
  >([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  //DNA sequence upload states
  const [fileType, setFileType] = useState<string>("File");
  const [DNASequence, setDNASequence] = useState<string>("");
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

  //------------image upload part--------------
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  const customRequest = async (file: any, onSuccess: any, onError: any) => {
    let temp: FileUploadObject[] = [];

    try {
      const formData = new FormData();
      formData.append("file", file.file);
      formData.append("resizeOption", "false");
      const response = await uploadFiles(formData);

      console.log(response);

      const newFile = {
        ...file.file,

        uid: response?.id,
        name: "image.png",
        status: "done",
        url: response?.file_url,
      };

      setFileList((prevFileList) =>
        prevFileList.map((f) => (f.uid === file.file.uid ? newFile : f))
      );

      temp.push({
        id: response?.id,
        path: response?.file_url,
      });

      setPerpetratorProfileImgs((prevImgs) => [...prevImgs, ...temp]);

      setIsUploading(true);
      onSuccess();
    } catch (error: any) {
      onError(error.message || "Upload failed");
    }
  };

  const handleAddPerpetrator = () => {
    let isValidate: boolean = false;
    fullName === ""
      ? customToastMsg("Please enter full name", 2)
      : // : contactNo === ""
      // ? customToastMsg("Please enter contact number", 2)
      age === ""
      ? customToastMsg("Please enter age", 2)
      : NICNumber === ""
      ? customToastMsg("Please enter NIC number", 2)
      : gender === ""
      ? customToastMsg("Please select gender of perpetrator ", 2)
      : description === ""
      ? customToastMsg("Please enter description about perpetrator ", 2)
      : pastCriminalRecords === ""
      ? customToastMsg("Please enter past criminal recodes of perpetrator ", 2)
      : perpetratorProfileImgs.length <= 0
      ? customToastMsg("Please upload at least one image of perpetrator", 2)
      : DNASequence === ""
      ? customToastMsg("Please upload DNA sequence of perpetrator", 2)
      : (isValidate = true);

    if (isValidate) {
      popUploader(dispatch, true);

      const imageIds = perpetratorProfileImgs.map((item) => item.id);

      const payload = {
        name: fullName,
        // contactNo: contactNo,
        age: parseInt(age),
        nic: NICNumber,
        description: description,
        pastCriminalRecords: pastCriminalRecords,
        gender: gender,
        fileIds: imageIds,
        dna: DNASequence,
      };

      createPerpetrator(payload)
        .then((response: any) => {
          popUploader(dispatch, false);
          customToastMsg("Perpetrator profile created successfully", 1);
          history("/view-perpetrators");
        })
        .catch((error) => {
          popUploader(dispatch, false);
          console.log(error);
          handleError(error);
        });
    }
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
            <h1
              data-aos="fade-up"
              className="font-size-1-2 mainText font-weight-semi-bold   text-center text-lg-start font-family-2"
            >
              Add Perpetrators To System
            </h1>
            <p
              data-aos="fade-up"
              className="font-size-5  subText font-weight-light align-self-end  text-center text-lg-start"
            >
              Harness the power of AI-driven forensic analysis to identify
              criminals, solve cases faster, and enhance justice with
              unparalleled accuracy and speed. Upload DNA, input records, and
              uncover the truth—one match at a time
            </p>
            <Form
              data-aos="fade-up"
              data-aos-delay="300"
              form={form}
              layout="vertical"
              className="mt-5 d-flex flex-column align-items-center w-100"
            >
              <Row className="w-100">
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="fullName"
                    label={
                      <span className="font-size-4">Perpetrator Full Name</span>
                    }
                  >
                    <Input
                      size="large"
                      id="fullName"
                      name="fullName"
                      value={fullName}
                      placeholder="Enter perpetrator's full name"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="age"
                    label={<span className="font-size-4">Age</span>}
                  >
                    <Input
                      size="large"
                      id="age"
                      name="age"
                      value={age}
                      placeholder="Enter perpetrator's age"
                      className="rounded-4 p-3"
                      type="number"
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="NICNumber"
                    label={<span className="font-size-4">NIC Number</span>}
                  >
                    <Input
                      size="large"
                      id="NICNumber"
                      name="NICNumber"
                      value={NICNumber}
                      placeholder="Enter perpetrator's nic number"
                      className="rounded-4 p-3"
                      type="text"
                      onChange={(e) => setNICNumber(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  {/* <Form.Item
                    name="contactNo"
                    label={<span className="font-size-4">Contact No</span>}
                  >
                    <Input
                      size="large"
                      id="contactNo"
                      name="contactNo"
                      value={contactNo}
                      placeholder="Enter perpetrator's contact no"
                      className="rounded-4 p-3"
                      type="number"
                      onChange={(e) => setContactNo(e.target.value)}
                    />
                  </Form.Item> */}
                  <Form.Item
                    className="align-self-start w-100 ps-5 ps-lg-0"
                    name="gender"
                    label={<span className="font-size-4">Gender</span>}
                  >
                    <Radio.Group
                      name="gender"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target?.value);
                      }}
                    >
                      <Radio value="male" className="font-size-4 me-5">
                        <span className="font-size-4 font-weight-normal">
                          Male
                        </span>
                      </Radio>

                      <Radio value="female" className="font-size-4">
                        <span className="font-size-4 font-weight-normal">
                          Female
                        </span>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
                  <Form.Item
                    name="description"
                    label={<span className="font-size-4">Description</span>}
                  >
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-end">
                        {countDescription(description) > desMaxLimit ? (
                          <span className="text-count text-danger">
                            {countDescription(description)} of {desMaxLimit}{" "}
                            Characters
                          </span>
                        ) : (
                          <span className="text-count text-muted">
                            {countDescription(description)} of {desMaxLimit}{" "}
                            Characters
                          </span>
                        )}
                      </div>
                      <CKEditor
                        onChange={(event: any, editor: any) => {
                          const data = editor.getData();
                          setDescription(data);
                        }}
                        config={{
                          toolbar: {
                            items: [
                              "heading",
                              "|",
                              "bold",
                              "italic",
                              "underline",
                              "strikethrough",
                              "|",
                              "bulletedList",
                              "numberedList",
                              "|",
                              "alignment",
                              "|",
                              "indent",
                              "outdent",
                              "|",
                              "fontColor",
                              "fontSize",
                              "fontBackgroundColor",
                              "|",
                              "undo",
                              "redo",
                              "|",
                              "cut",
                              "copy",
                              "paste",
                              "|",
                              "removeFormat",
                              "|",
                              "blockQuote",
                              "horizontalLine",
                              "|",
                              "code",
                              "|",
                              "specialCharacters",
                              "|",
                            ],
                          },
                        }}
                        editor={ClassicEditor}
                        data={description}
                        onReady={(editor: any) => {}}
                      />
                    </div>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    name="pastCriminalRecords"
                    label={
                      <span className="font-size-4">Past Criminal Records</span>
                    }
                  >
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-end">
                        {countDescription(pastCriminalRecords) > desMaxLimit ? (
                          <span className="text-count text-danger">
                            {countDescription(pastCriminalRecords)} of{" "}
                            {desMaxLimit} Characters
                          </span>
                        ) : (
                          <span className="text-count text-muted">
                            {countDescription(pastCriminalRecords)} of{" "}
                            {desMaxLimit} Characters
                          </span>
                        )}
                      </div>
                      <CKEditor
                        onChange={(event: any, editor: any) => {
                          const data = editor.getData();
                          setPastCriminalRecords(data);
                        }}
                        config={{
                          toolbar: {
                            items: [
                              "heading",
                              "|",
                              "bold",
                              "italic",
                              "underline",
                              "strikethrough",
                              "|",
                              "bulletedList",
                              "numberedList",
                              "|",
                              "alignment",
                              "|",
                              "indent",
                              "outdent",
                              "|",
                              "fontColor",
                              "fontSize",
                              "fontBackgroundColor",
                              "|",
                              "undo",
                              "redo",
                              "|",
                              "cut",
                              "copy",
                              "paste",
                              "|",
                              "removeFormat",
                              "|",
                              "blockQuote",
                              "horizontalLine",
                              "|",
                              "code",
                              "|",
                              "specialCharacters",
                              "|",
                            ],
                          },
                        }}
                        editor={ClassicEditor}
                        data={pastCriminalRecords}
                        onReady={(editor: any) => {}}
                      />
                    </div>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="ps-0 ps-md-3">
                  <Form.Item
                    className="align-self-start w-100 ps-5 ps-lg-0"
                    name="perpetratorProfileImgs"
                    label={
                      <span className="font-size-4">
                        Upload Perpetrator's Images
                      </span>
                    }
                  >
                    <ImgCrop rotationSlider>
                      <Upload
                        name="perpetratorProfileImgs"
                        //@ts-ignore
                        customRequest={(
                          file: any,
                          onSuccess: any,
                          onError: any
                        ) => {
                          customRequest(file, onSuccess, onError);
                        }}
                        listType="picture-card"
                        fileList={fileList}
                        multiple={false}
                        onChange={onChange}
                        onPreview={onPreview}
                      >
                        {fileList.length < 5 && "+ Upload"}
                      </Upload>
                    </ImgCrop>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} className="pe-0 pe-md-3">
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
                      className="w-100 mt-5 bg-white rounded-4"
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
                </Col>
              </Row>
            </Form>
            <Row className="my-5 pb-5 d-flex justify-content-end">
              <Button
                className="px-4 py-3 align-self-center align-self-lg-end font-size-4 w-25"
                size="large"
                type="default"
                onClick={handleAddPerpetrator}
              >
                Add Perpetrator
              </Button>
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
export default AddPerpetratorsPage;
