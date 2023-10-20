import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Signup,
  Welcome,
  Home,
  Stepone,
  Steptwo,
  Preview,
  Register,
  OTPScreen,
  SecurityCheck,
  HistoryDetails,
} from "./screen";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/OpenSans-Regular.ttf"),
    light: require("./assets/fonts/OpenSans-Light.ttf"),
    bold: require("./assets/fonts/OpenSans-Bold.ttf"),
    medium: require("./assets/fonts/OpenSans-Medium.ttf"),
    extrabold: require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    semibold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Security Check"
          component={SecurityCheck}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Stepone"
          component={Stepone}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Steptwo"
          component={Steptwo}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Preview"
          component={Preview}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="History Details"
          component={HistoryDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
