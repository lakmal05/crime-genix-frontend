import "./styles/common/commonStyles.scss";
import { ConfigProvider } from "antd";
import Routes from "./Routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#009990",
          },
          components: {
            Button: {
              defaultBg: "#009990",
              defaultBorderColor: "#009990",
              defaultColor: "#ffffff",
              defaultHoverBorderColor: "#00459B",
              defaultHoverColor: "#ffff",
              defaultActiveBorderColor: "#00459B",
              defaultActiveColor: "#fff",
              defaultActiveBg: "#00459B",
              defaultHoverBg: "#00459B",
            },
          },
        }}
      >
        <Routes />
      </ConfigProvider>
    </>
  );
}

export default App;
