import React, { Fragment } from "react";

interface SubLayoutProps {
  children: JSX.Element;
}
const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};

export default SubLayout;
