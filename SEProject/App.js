import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login,Signup,Welcome,Home,Stepone,Steptwo,Preview,Register } from './screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
          />

<Stack.Screen
          name="Stepone"
          component={Stepone}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
          name="Steptwo"
          component={Steptwo}
          options={{
            headerShown: false
          }}
          />
          
          <Stack.Screen
          name="Preview"
          component={Preview}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

