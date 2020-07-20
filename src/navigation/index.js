import React from "react";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import {PrimaryNavigator} from './primaryNatigation';
console.log(PrimaryNavigator);

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return(
		<Stack.Navigator
			screenOptions={{
				gestureEnabled: true,
				stackPresentation: "modal",
			}}
		>
			<Stack.Screen
				name="primaryStack"
        component={PrimaryNavigator}
        options={{
          headerShown: false,
        }}
			/>
		</Stack.Navigator>
	)
}

export const RootNavigator = ((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref => props.setNavRef(ref)}>
      <RootStack />
    </NavigationContainer>
  )
})