import tw from "twrnc";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page: [tw`h-full w-full`],
    gradient: [tw`w-full h-full`],
    sectionContainer: [
        tw`bg-slate-900 rounded-lg p-3 text-lg mb-1 opacity-85 w-95 border-solid border-white border`,
    ],
    sectionContainerNoBG: [tw`rounded-lg p-3 text-lg mb-1 w-95`],
    loginPage: [tw`bg-indigo-900 h-full items-center justify-center`],
    innerView: [tw`w-full h-full items-center my-2`],
    text: [tw`text-white text-base dropdown-small`],
    heading: [tw`text-white text-2xl py-4 drop-shadow-2xl`],
    subheading: [tw`text-white text-lg`],
    errorText: [tw`text-red-500 text-xl mb-2`],
    input: [tw`bg-white w-4/5 rounded mb-3 p-2 text-lg`],
    alarmContainer: [
        tw`bg-slate-900 rounded-lg p-3 text-lg mb-1 opacity-75 w-95 border-solid border-white border`,
    ],
    alarmTitle: [tw`text-white text-xl`],
    alarmSubtitle: [tw`text-white text-sm`],
    featureImage: [tw`h-50 w-60 mt-12`],
    featureImageContainer: [tw`w-full h-60 justify-bottom items-center`],
    bottomAlignedContainer: [tw`align-bottom`],
});
