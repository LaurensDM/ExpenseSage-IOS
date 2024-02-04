/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


import {
  Pressable,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Icon, PaperProvider } from 'react-native-paper';
import StartScreen from './ui/screens/StartScreen';
import ExpenseScreen from './ui/screens/ExpenseScreen';
import OwedScreen from './ui/screens/OwedScreen';
import CurrencyScreen from './ui/screens/CurrencyScreen';
import SummaryScreen from './ui/screens/SummaryScreen';
import SettingScreen from './ui/screens/SettingScreen';

export default function App() {

  //  const colorScheme = useColorScheme();
   const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerStyle: {backgroundColor: '#006c4c'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            statusBarStyle: 'auto',
            statusBarColor: '#006c4c',
          }}>
            
          <Stack.Screen
            name="Main"
            component={Main}
            options={({navigation}) => ({
              title: 'ExpenseSage',
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Settings')}>
                  <MaterialCommunityIcons name="cog" color="white" size={20} />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              title: 'Settings',
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
      activeColor="white"
      inactiveColor="black"
      shifting={false}
      barStyle={{backgroundColor: '#006c4c'}}>
      <Tab.Screen
        name="Start"
        component={StartScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon source="bank" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: ({color}) => (
            <Icon source="cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Owed"
        component={OwedScreen}
        options={{
          tabBarLabel: 'Owed',
          tabBarIcon: ({color}) => (
            <Icon source="clipboard-alert" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{
          tabBarLabel: 'Currency',
          tabBarIcon: ({color}) => (
            <Icon source="currency-usd" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarLabel: 'Summary',
          tabBarIcon: ({color}) => (
            <Icon source="chart-box-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
