import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList, MainTabsParamList } from "../types";
import { colors, typography } from "../theme";

import { LostItemsScreen } from "../screens/LostItemsScreen";
import { FoundItemsScreen } from "../screens/FoundItemsScreen";
import { PostItemScreen } from "../screens/PostItemScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ItemDetailScreen } from "../screens/ItemDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabsParamList>();

const MainTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          ...typography.caption,
          marginBottom: 4,
        },
        tabBarIcon: ({ focused, color }) => {
          let icon = "📦";
          if (route.name === "LostItems") icon = "❌";
          else if (route.name === "FoundItems") icon = "✅";
          else if (route.name === "Post") icon = "📤";
          else if (route.name === "Profile") icon = "ℹ️";

          return <Text style={{ fontSize: 24 }}>{icon}</Text>;
        },
      })}
    >
      <Tab.Screen
        name="LostItems"
        component={LostItemsScreen}
        options={{ title: "Lost Items" }}
      />
      <Tab.Screen
        name="FoundItems"
        component={FoundItemsScreen}
        options={{ title: "Found Items" }}
      />
      <Tab.Screen
        name="Post"
        component={PostItemScreen}
        options={{ title: "Post Item" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Info" }}
      />
    </Tab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabsNavigator} />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetailScreen}
          options={{
            headerShown: true,
            headerTitle: "Item Details",
            headerTitleStyle: {
              ...typography.h3,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
