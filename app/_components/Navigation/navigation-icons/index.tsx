import React from "react";
import { NavIcon } from "../../_constants/types";

interface Props {
  id: NavIcon;
}

const NavigaitonIcon: React.FC<Props> = ({ id }) => {
  switch (id) {
    case "dashboardIcon":
      return <div>Hello</div>;
    default:
      return null;
  }
};

export default NavigaitonIcon;
