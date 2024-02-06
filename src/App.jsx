import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Pressable,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import StartScreen from './ui/screens/StartScreen';
import ExpenseScreen from './ui/screens/ExpenseScreen';
import OwedScreen from './ui/screens/OwedScreen';
import CurrencyScreen from './ui/screens/CurrencyScreen';
import SummaryScreen from './ui/screens/SummaryScreen';
import SettingScreen from './ui/screens/SettingScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                  <Icon name='cog' color={'white'} size={26}/>
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
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Start"
      screenOptions={{
        tabBarActiveTintColor: '#89F8C7',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#006c4c',
        tabBarInactiveBackgroundColor: '#006c4c',
        tabBarShowLabel: true,
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {padding: 2},
      }}
      >
      <Tab.Screen
        name="Start"
        component={StartScreen}
        options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="bank" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={ExpenseScreen}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: ({color}) => (
            <Icon name="cash" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Owed"
        component={OwedScreen}
        options={{
          tabBarLabel: 'Owed',
          tabBarIcon: ({color}) => (
            <Icon name="clipboard-alert" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Currency"
        component={CurrencyScreen}
        options={{
          tabBarLabel: 'Currency',
          tabBarIcon: ({color}) => (
            <Icon name="currency-usd" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Summary"
        component={SummaryScreen}
        options={{
          tabBarLabel: 'Summary',
          tabBarIcon: ({color}) => (
            <Icon name="chart-box-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
