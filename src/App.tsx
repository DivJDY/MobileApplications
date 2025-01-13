import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/store';

import HomeScreen from './screens/HomeScreen';
import AppNavigation from './AppNavigator';
// import ServiceListingScreen from './screens/ServiceListingScreen';
// import ServiceDetailsScreen from './screens/ServiceDetailsScreen';
// import BookingScreen from './screens/BookingScreen';
// import PaymentScreen from './screens/PaymentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="ServiceListing" component={ServiceListingScreen} />
          <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} /> */}
      {/* </Stack.Navigator>
      </NavigationContainer> */}
      <AppNavigation />
    </Provider>
  );
};

export default App;
