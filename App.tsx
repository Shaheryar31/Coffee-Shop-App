import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './Screens/onboarding';
import HomePage from './Screens/HomePage';
import ItemDetails from './Screens/ItemDetails';
import OrderScreen from './Screens/OrderScreen';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          options={{headerShown: false}}
          component={Onboarding}
        />
        <Stack.Screen
          name="HomePage"
          options={{headerShown: false}}
          component={HomePage}
        />  
        <Stack.Screen
          name="Detail"
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="hearto" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
          component={ItemDetails}
        />
        <Stack.Screen
          name="Order"
          options={{headerShown: true, headerTitleAlign: 'center'}}
          component={OrderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 10, // Space from the right edge
  },
});
export default App;
