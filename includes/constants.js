import {Dimensions} from "react-native";

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;


export const size = {
    heading:(deviceHeight)*.05,
    subHeading:(deviceHeight)*.037,
    title:(deviceHeight)*.035,
    subTitle:(deviceHeight)*.025,
    label:(deviceHeight)*.022,
    text:(deviceHeight)*.017,
    tabText:(deviceHeight)*.015
}

export const borderRadius = 30;