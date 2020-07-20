import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import PostScreen from '../screens/post-screen/post-screen';
import PostDetailsScreen from '../screens/post-details-screen/post-details-screen';

const Stack = createNativeStackNavigator();

export function PrimaryNavigator() {
	return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Post" component={PostScreen}
        options={{
          title: "Posts",
        }}
      />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen}
        options={{
          title: "Post Detail",
        }}
      />
    </Stack.Navigator>
	)
}