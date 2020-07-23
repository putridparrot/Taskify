import {IconEnum} from "./IconEnum";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import React from "react";
import {
  DateRangeOutlined, FlagOutlined,
  FormatListBulleted,
  FormatListBulletedOutlined, HomeOutlined, PersonOutlineOutlined,
  StarBorderOutlined
} from "@material-ui/icons";

class IconRetriever{
  static map(iconName: string){
    //console.log(`Getting icon for ${iconName}Icon`);
    let icon: IconEnum = IconEnum[iconName + "Icon"];
    let functionComponentElement ;
  //  console.log(`Getting icon for ${icon}`);
    switch (icon) {
      case IconEnum.WbSunnyOutlinedIcon:
        functionComponentElement = React.createElement(WbSunnyOutlinedIcon,null);
        break;
      case IconEnum.StarBorderOutlinedIcon:
        functionComponentElement = React.createElement(StarBorderOutlined,null);
        break;
      case IconEnum.DateRangeOutlinedIcon:
        functionComponentElement = React.createElement(DateRangeOutlined,null);
        break;
      case IconEnum.PersonOutlineOutlinedIcon:
        functionComponentElement = React.createElement(PersonOutlineOutlined,null);
        break;
      case IconEnum.FlagOutlinedIcon:
        functionComponentElement = React.createElement(FlagOutlined,null);
        break;
      case IconEnum.HomeOutlinedIcon:
        functionComponentElement = React.createElement(HomeOutlined,null);
        break;
      case IconEnum.FormatListBulletedIcon:
        functionComponentElement = React.createElement(FormatListBulleted,null);
        break;      
        
    }

    return functionComponentElement;
  }
}

export {IconRetriever}