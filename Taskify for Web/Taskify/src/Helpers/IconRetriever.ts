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
    // console.log(`Getting icon for ${iconName}Icon`);
    const icon: IconEnum = IconEnum[`${iconName}Icon`];
    let functionComponentElement;
    //  console.log(`Getting icon for ${icon}`);
    switch (icon) {
      case IconEnum.WbSunnyOutlinedIcon:
        functionComponentElement = React.createElement(WbSunnyOutlinedIcon, null);
        break;
      case IconEnum.StarBorderOutlinedIcon:
        functionComponentElement = React.createElement(StarBorderOutlined, null);
        break;
      case IconEnum.DateRangeOutlinedIcon:
        functionComponentElement = React.createElement(DateRangeOutlined, null);
        break;
      case IconEnum.PersonOutlineOutlinedIcon:
        functionComponentElement = React.createElement(PersonOutlineOutlined, null);
        break;
      case IconEnum.FlagOutlinedIcon:
        functionComponentElement = React.createElement(FlagOutlined, null);
        break;
      case IconEnum.HomeOutlinedIcon:
        functionComponentElement = React.createElement(HomeOutlined, null);
        break;
      case IconEnum.FormatListBulletedIcon:
        functionComponentElement = React.createElement(FormatListBulleted, null);
        break;
      default:
        break;
    }
    return functionComponentElement;
  }
}

export default IconRetriever;