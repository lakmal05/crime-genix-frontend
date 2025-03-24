import { Button, Card, Col, Popconfirm, Popover, Tooltip } from "antd";
import React, { useEffect } from "react";
import { MoreVertical } from "react-feather";
import { Meta, useNavigate } from "react-router-dom";
import { PerpetratorCardDetailsObj } from "../../../util/interfaces/uiNecessaryInterface";
import defaultImage from "../../../assets/images/userImg-2.jpg";
import {
  customToastMsg,
  formatNamesCmnFun,
  handleError,
  popUploader,
} from "../../../util/commonFunctions";
import { useDispatch } from "react-redux";
import { deletePerpetrator } from "../../../service/perpetratorService";
interface PerpetratorsCardCardProps {
  perpetratorDetails: PerpetratorCardDetailsObj;
  loadAll: () => void;
}

export const PerpetratorsCard: React.FC<PerpetratorsCardCardProps> = ({
  perpetratorDetails,
  loadAll,
}) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(perpetratorDetails);
  }, []);

  const content = (
    <div className="d-flex flex-column">
      <Button
        className="menu-view-btn"
        type="text"
        onClick={() => {
          history("/perpetrator-profile", {
            state: { perpetratorId: perpetratorDetails?.id },
          });
        }}
      >
        View Profile
      </Button>

      <Button
        className="menu-view-btn"
        type="text"
        onClick={() => {
          history("/update-perpetrator", {
            state: { perpetratorId: perpetratorDetails?.id },
          });
        }}
      >
        Update
      </Button>
      <Popconfirm
        className="d-flex justify-content-center"
        title="Delete this perpetrator"
        description="Are you sure to delete this perpetrator details?"
        onConfirm={() => {
          handleDeletePerpetrator();
        }}
        okText="Yes"
        cancelText="No"
      >
        {" "}
        <Button className="menu-view-btn" type="text">
          Delete
        </Button>
      </Popconfirm>
    </div>
  );

  const handleDeletePerpetrator = () => {
    popUploader(dispatch, true);
    deletePerpetrator(perpetratorDetails?.id)
      .then((response: any) => {
        popUploader(dispatch, false);
        customToastMsg("Perpetrator deleted successfully", 1);
        loadAll();
      })
      .catch((error) => {
        popUploader(dispatch, false);
        console.log(error);
        handleError(error);
      });
  };

  return (
    <Card
      hoverable
      style={{ width: "100% " }}
      cover={
        <img
          alt="example"
          src={
            perpetratorDetails?.files && perpetratorDetails?.files.length > 0
              ? perpetratorDetails?.files[0]?.fileUrl
              : defaultImage
          }
        />
      }
    >
      {" "}
      <div>
        <div>
          <h6 className="product-sub-title text-truncate d-flex">
            <Tooltip title={perpetratorDetails?.name}>
              Name :{" "}
              {formatNamesCmnFun(
                perpetratorDetails?.name ? perpetratorDetails?.name : ""
              )}
            </Tooltip>
          </h6>

          <h6 className="product-title text-truncate">
            <Tooltip title={perpetratorDetails?.age}>
              Age :{perpetratorDetails?.age}{" "}
            </Tooltip>
          </h6>

          <h6 className="product-title text-truncate">
            <Tooltip title={perpetratorDetails?.gender}>
              Gender :{" "}
              {formatNamesCmnFun(
                perpetratorDetails?.gender ? perpetratorDetails?.gender : ""
              )}
            </Tooltip>
          </h6>
          <h6 className="product-title text-truncate">
            <Tooltip title={perpetratorDetails?.nic}>
              NIC :{perpetratorDetails?.nic}
            </Tooltip>
          </h6>
        </div>
        <div
          className="position-absolute bg-white rounded-5 p-2"
          style={{ top: 10, right: 20 }}
        >
          {" "}
          <Popover placement="rightBottom" content={content}>
            <MoreVertical color="#332321" size={20} />
          </Popover>
        </div>
      </div>
    </Card>
  );
};
