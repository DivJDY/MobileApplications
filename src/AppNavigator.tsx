import React from 'react';
import { Image, Text } from 'react-native';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import PostScreen from './screens/PostScreen';
import ChatScreen from './screens/ChatScreen';
import UserScreen from './screens/UserScreen';
import TotalDetailingListsScreen from './screens/TotalDetailingListsScreen';
import DetailingScreen from './screens/DetailingScreen';
import BookSlotScreen from './screens/BookSlotScreen';
import ConfirmBookingScreen from './screens/ConfirmBookingScreen';

type RouteName = 'Home' | 'Activity' | 'Post' | 'Chat' | 'User';

const icons: Record<RouteName | 'Default', any> = {
    Home: require('../assets/bottom_nav_img/home.png'),
    Activity: require('../assets/bottom_nav_img/bell.png'),
    Post: require('../assets/bottom_nav_img/add_ring.png'),
    Chat: require('../assets/bottom_nav_img/message_circle.png'),
    User: require('../assets/bottom_nav_img/user_alt.png'),
    Default: require('../assets/bottom_nav_img/user_alt.png'),
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                tabBarIcon: ({ focused }) => {
                    const iconSource = icons[route.name as RouteName] || icons.Default;
                    return (
                        <Image
                            source={iconSource}
                            style={[
                                { marginTop: 10, width: 32, height: 32 },
                                route.name !== 'Post' && {
                                    tintColor: focused ? '#F04438' : '#101828',
                                },
                            ]}
                        />
                    );
                },
                tabBarLabel: ({ focused }) => (
                    <Text
                        style={{
                            color: focused ? '#F04438' : '#101828',
                            fontSize: 12,
                            fontWeight: focused ? '800' : '500',
                            marginTop: 10,
                            fontFamily: 'Nunito Sans',
                            paddingLeft: 4,
                        }}
                    >
                        {route.name}
                    </Text>
                ),
            })}
        >
            {/* Main Tabs */}
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Post" component={PostScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="User" options={{
                // tabBarButton: () => null,
                // tabBarStyle: {
                //     flex: 1, // Ensures the space is reserved for this tab
                // },
            }} component={UserScreen} />
        </Tab.Navigator>
    );
};
// const Stack = createStackNavigator();

// function HomeStackNavigator({ navigation }: any) {
// Hide the tab bar for specific screens dynamically

// const state = useNavigationState((state) => state);

// // Get the currently focused route name
// const currentRouteName = state.routes[state.index].name;
// console.log("currentRouteName", currentRouteName)
// useLayoutEffect(() => {
//     const unsubscribe = navigation.addListener('focus', () => {
//         const routeName = navigation.getState().routes[navigation.getState().index].name;
//         console.log("Current Route Name:", routeName); // Log the route name for debugging

//         if (routeName === 'DetailingScreen' || routeName === 'BookSlotScreen') {
//             navigation.setOptions({
//                 tabBarStyle: { display: 'none' },
//             });
//         } else {
//             navigation.setOptions({
//                 tabBarStyle: { display: 'flex' },
//             });
//         }
//     });

//     return unsubscribe;
// }, [navigation]); // Include navigation in the dependency array

//     return (
//         <Stack.Navigator>
//             <Stack.Screen
//                 name="HomeScreen"
//                 component={HomeScreen}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name="DetailingScreen"
//                 component={DetailingScreen}
//                 options={{
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="TotalDetailingListsScreen"
//                 component={TotalDetailingListsScreen}
//                 options={{
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="BookSlotScreen"
//                 component={BookSlotScreen}
//                 options={{
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="ConfirmBookingScreen"
//                 component={ConfirmBookingScreen}
//                 options={{
//                     headerShown: false,
//                 }}
//             />
//         </Stack.Navigator>
//     );
// }

// function BottomTabNavigator() {
//     const state = useNavigationState((state) => state);
//     const activeRouteName = state?.routes[state?.index]?.name;

//     // Screens where the tab bar should be hidden
//     const hideTabBarScreens = ['DetailingScreen', 'TotalDetailingListsScreen'];
//     return (
//         // <Tab.Navigator
//         //     initialRouteName="Home"
//         //     screenOptions={({ route }) => {
//         //         console.log("route.name", route.name)
//         //         return (
//         //             {
//         //                 headerShown: false,
//         //                 tabBarStyle: {
//         //                     height: 65, // Consistent bottom tab height
//         //                     display: route.name === 'DetailingScreen' || route.name === 'BookSlotScreen' ? 'none' : 'flex',

//         //                     // display: route.name === 'Post' || route.name === 'BookSlotScreen' ? 'none' : 'flex',
//         //                 },
//         //                 tabBarIcon: ({ focused }) => {
//         //                     const iconSource = icons[route.name as RouteName] || icons.Default;
//         //                     return (
//         //                         <Image
//         //                             source={iconSource}
//         //                             style={[
//         //                                 { marginTop: 10, width: 32, height: 32 },
//         //                                 route.name !== 'Post' && {
//         //                                     tintColor: focused ? '#F04438' : '#101828',
//         //                                 },
//         //                             ]}
//         //                         />
//         //                     );
//         //                 },
//         //                 tabBarLabel: ({ focused }) => (
//         //                     <Text
//         //                         style={{
//         //                             color: focused ? '#F04438' : '#101828',
//         //                             fontSize: 12,
//         //                             fontWeight: focused ? '800' : '500',
//         //                             marginTop: 10,
//         //                             fontFamily: 'Nunito Sans',
//         //                             paddingLeft: 4,
//         //                         }}
//         //                     >
//         //                         {route.name}
//         //                     </Text>
//         //                 ),
//         //             })
//         //     }
//         //     }
//         // >



//         < Tab.Navigator
//             initialRouteName="Home"
//             screenOptions={({ route }) => ({
//                 headerShown: false, // Disable header for all tabs
//                 tabBarStyle: hideTabBarScreens.includes(activeRouteName)
//                     ? { display: 'none' } // Completely hide tab bar
//                     : { height: 65 }, // Default tab bar style

//                 tabBarIcon: ({ focused }) => {
//                     const iconSource = icons[route.name as RouteName] || icons.Default;
//                     return (
//                         <Image
//                             source={iconSource}
//                             style={[
//                                 { marginTop: 10, width: 32, height: 32 },
//                                 route.name !== 'Post' && {
//                                     tintColor: focused ? '#F04438' : '#101828', // Highlight icon for active tab
//                                 },
//                             ]}
//                         />
//                     );
//                 },
//                 tabBarLabel: ({ focused }) => (
//                     <Text
//                         style={{
//                             color: focused ? '#F04438' : '#101828', // Highlight label for active tab
//                             fontSize: 12,
//                             fontWeight: focused ? '800' : '500',
//                             marginTop: 10,
//                             fontFamily: 'Nunito Sans',
//                             paddingLeft: 4,
//                         }}
//                     >
//                         {route.name}
//                     </Text>
//                 ),
//             })
//             }
//         >
//             <Tab.Screen name="Home" component={HomeScreen} />
//             <Tab.Screen name="Activity" component={ActivityScreen} />
//             <Tab.Screen name="Post" component={PostScreen} />
//             <Tab.Screen name="Chat" component={ChatScreen} />
//             <Tab.Screen name="User" component={UserScreen} />
//             <Tab.Screen name="DetailingScreen"
//                 options={{
//                     tabBarButton: () => null, // Completely hide the tab button for this screen
//                 }}
//                 // options={{
//                 //     tabBarButton: () => null,
//                 //     tabBarIcon: () => null,
//                 //     tabBarStyle: { height: 0, display: 'none' }, // Hide tab bar completely for this screen
//                 // }} 
//                 component={DetailingScreen} />
//             <Tab.Screen name="TotalDetailingListsScreen" options={{
//                 tabBarButton: () => null,
//                 tabBarIcon: () => null,
//                 tabBarStyle: { display: 'none' }, // Explicitly hide tab bar for this screen
//             }} component={TotalDetailingListsScreen} />
//             <Tab.Screen name="BookSlotScreen" component={BookSlotScreen} />
//             <Tab.Screen name="ConfirmBookingScreen" component={ConfirmBookingScreen} />
//         </Tab.Navigator>
//     );
// }

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* Main Tabs */}
                <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />

                {/* Screens that shouldn't appear in the tab bar */}
                <Stack.Screen name="DetailingScreen" component={DetailingScreen} />
                <Stack.Screen name="TotalDetailingListsScreen" component={TotalDetailingListsScreen} />
                <Stack.Screen name="BookSlotScreen" component={BookSlotScreen} />
                <Stack.Screen name="ConfirmBookingScreen" component={ConfirmBookingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


// function AppNavigation() {
//     return (
//         <NavigationContainer>
//             <BottomTabNavigator />
//         </NavigationContainer>
//     );
// }

export default AppNavigation;

