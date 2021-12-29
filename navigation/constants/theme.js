import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
//secondary: '#1E90FF',
export const COLORS = {
    primary: "#252c4a",
    secondary: '#4d4e4f',
    accent: '#3498db',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "#487c84"
}


export const SIZES = {
    base: 10,
    width,
    height
}