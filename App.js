import { Pressable, StyleSheet } from "react-native";
import StartScreen from "./src/ui/screens/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpenseScreen from "./src/ui/screens/ExpenseScreen";
import { Icon, PaperProvider } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingScreen from "./src/ui/screens/SettingScreen";
import OwedScreen from "./src/ui/screens/OwedScreen";
import { useState } from "react";
import CurrencyScreen from "./src/ui/screens/CurrencyScreen";
import SummaryScreen from "./src/ui/screens/SummaryScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerStyle: { backgroundColor: "#006c4c" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={({ navigation }) => ({
              title: "ExpenseSage",
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate("Settings")}>
                  <MaterialCommunityIcons name="cog" color="white" size={26} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              title: "Settings",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

function Main() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Start"
      activeColor="green"
      inactiveColor="white"

      barStyle={{ backgroundColor: "#006c4c" }}
    >
      <Tab.Screen
        name="Start"
        component={StartScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bank" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          tabBarLabel: "Expenses",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Owed"
        component={OwedScreen}
        options={{
          tabBarLabel: "Owed",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-alert"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{
          tabBarLabel: "Currency",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="currency-usd"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarLabel: "Summary",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chart-box-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
