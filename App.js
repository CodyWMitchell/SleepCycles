import { StatusBar } from "expo-status-bar";
import * as React from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faHome,
    faClock,
    faCog,
} from "@fortawesome/free-solid-svg-icons";

import Login from "./app/pages/Login";
import Home from "./app/pages/Home";
import Alarms from "./app/pages/Alarms";
import Profile from "./app/pages/Profile";
import SignUp from "./app/pages/SignUp";

const Tab = createBottomTabNavigator();
export const Stack = createNativeStackNavigator();

export const UserContext = React.createContext({
    user: {},
    setUser: () => { },
});

export default function App() {
    const [user, setUser] = React.useState({
        isLoggedIn: false,
        user: null,
        token: null,
    });

    const value = React.useMemo(
        () => ({ user, setUser }),
        [user]
    )

    React.useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    return (
        <UserContext.Provider value={value}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Log-In"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Dashboard"
                            component={Dashboard}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Sign-Up"
                            component={SignUp}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style="light" />
            </SafeAreaProvider>
        </UserContext.Provider>
    );
}

const Dashboard = () => {
    return (
        <Tab.Navigator
            initialRouteName="Login"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = faHome;
                    } else if (route.name === "Alarms") {
                        iconName = faClock;
                    } else if (route.name === "Profile") {
                        iconName = faCog;
                    }

                    // You can return any component that you like here!
                    return (
                        <FontAwesomeIcon
                            icon={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Alarms" component={Alarms} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}