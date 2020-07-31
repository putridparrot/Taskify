import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import React, { ReactElement } from "react";
import {
  DateRangeOutlined,
  FlagOutlined,
  FormatListBulleted,
  HomeOutlined,
  PersonOutlineOutlined,
  StarBorderOutlined
} from "@material-ui/icons";
import IconEnum from "./IconEnum";

class IconRetriever {
  static map(iconName: string): ReactElement {
    // console.log(`Getting icon for ${iconName}`);
    const icon: IconEnum = IconEnum[iconName];
    let functionComponentElement;
    //  console.log(`Getting icon for ${icon}`);
    switch (icon) {
      case IconEnum.MyDay:
        functionComponentElement = React.createElement(WbSunnyOutlinedIcon, null);
        break;
      case IconEnum.Important:
        functionComponentElement = React.createElement(StarBorderOutlined, null);
        break;
      case IconEnum.Planned:
        functionComponentElement = React.createElement(DateRangeOutlined, null);
        break;
      case IconEnum.AssignedToYou:
        functionComponentElement = React.createElement(PersonOutlineOutlined, null);
        break;
      case IconEnum.Flagged:
        functionComponentElement = React.createElement(FlagOutlined, null);
        break;
      case IconEnum.Tasks:
        functionComponentElement = React.createElement(HomeOutlined, null);
        break;
      default:
        functionComponentElement = React.createElement(FormatListBulleted, null);
        break;
    }
    return functionComponentElement;
  }
}

export default IconRetriever;