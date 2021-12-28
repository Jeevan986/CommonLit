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
import quizScreen from './screens/quizScreen';
import downloadedBookScreen from './screens/downloadedBookScreen';


//Screen names
const homeName = "Inicio";
const libraryName = "Biblioteca";
const downloadsName = "Descargar";
const bookDetailsName = "Detalles";
const quizScreenName = "Examen";
const downloadedBookScreenName = "DownloadedBook"

//Tabs
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const DownloadsStack= createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name={"Inicio "} component= {HomeScreen}/>
    <HomeStack.Screen name={bookDetailsName} component = {BookDetailsScreen}/>
    <HomeStack.Screen name={quizScreenName} component = {quizScreen}/>
  </HomeStack.Navigator>
);

const LibraryStackScreen = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen name={"Biblioteca "} component= {LibraryScreen}/>
    <LibraryStack.Screen name={bookDetailsName} component = {BookDetailsScreen}/>
    <LibraryStack.Screen name={quizScreenName} component = {quizScreen}/>
  </LibraryStack.Navigator>
);

const DownloadsStackScreen = () => (
  <DownloadsStack.Navigator>
    <DownloadsStack.Screen name={"Descargar "} component= {DownloadsScreen}/>
    <DownloadsStack.Screen name={downloadedBookScreenName} component = {downloadedBookScreen}/>
  </DownloadsStack.Navigator>
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

        <Tab.Screen name={homeName} component={HomeStackScreen} options={{title: "Inicio", headerShown:false}}/>
        <Tab.Screen name={libraryName} component={LibraryStackScreen} options={{title: "Biblioteca", headerShown:false}}/>
        <Tab.Screen name={downloadsName} component={DownloadsStackScreen} options={{title: "Descargar", headerShown:false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;