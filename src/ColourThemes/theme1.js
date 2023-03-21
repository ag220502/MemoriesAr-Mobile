import AsyncStorage from "@react-native-async-storage/async-storage";
const saveTheme = async () => {
    try {
        const id = await AsyncStorage.getItem('userId');
    } catch (e) {
        console.log(e);
    }
};

saveTheme()

const darkColor = "#202A44";
const lightColor = "#F5F6FA";
const textDarkColor = "#202A44";
const textLightColor = "#F5F6FA";
const textMidColor = "#919191";
const midColor="#919191";
const shadowColor="#000";
const whiteColor="#FFFFFF";
const blackColor="#000";
const Color={
    darkColor,
    lightColor,
    textDarkColor,
    textLightColor,
    textMidColor,
    midColor,
    shadowColor,
    whiteColor,
    blackColor
};

export default Color