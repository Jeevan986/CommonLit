import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';


//Screen names
const homeName = "Home";
const libraryName = "Library";
const downloadsName = "Downloads";
const bookDetailsName = "Details"

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={"Home"} component= {HomeScreen}/>
    <HomeStack.Screen name={bookDetailsName} component = {BookDetailsScreen}/>
  </HomeStack.Navigator>
);

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === libraryName) {
              iconName = focused ? 'library' : 'library-outline';

            } else if (rn === downloadsName) {
              iconName = focused ? 'download' : 'download-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#487c84',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeStackScreen} options={{title: "Home", headerShown:false}}/>
        <Tab.Screen name={libraryName} component={LibraryScreen} />
        <Tab.Screen name={downloadsName} component={DownloadsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;