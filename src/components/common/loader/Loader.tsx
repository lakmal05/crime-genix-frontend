import "../../../styles/loaderStyles.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../slices/rootReducer";
import loaderImg from "../../../assets/images/loader-2.gif";

const Loader = () => {
  const selectIsLoading = (state: RootState) => state.loader.isLoader;

  const isLoading = useSelector(selectIsLoading);

  // const pageHeight = document.documentElement.scrollHeight;

  const bodyLoaderStyle = {
    height: `100%`,
    zIndex: 999999999,
  };
  return (
    <>
      {isLoading && (
        <section className="body_loader " style={bodyLoaderStyle}>
          <div className={"loader-parent"}>
            <div className="loader">
              <div className="lineDiv"></div>
              <img src={loaderImg} height="200px" className="loaderImg" />
              <div className="lineDiv"></div>
              <hr />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Loader;
