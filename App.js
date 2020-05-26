/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Platform, ScrollView} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  Header,
  TransitionPresets,
} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {
  Header as RNHeader,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

const USE_NATIVE_STACK = false;

enableScreens(USE_NATIVE_STACK);

const Screen1 = ({navigation}) => (
  <SafeAreaView style={{flex: 1}} edges={['bottom', 'left', 'right']}>
    <RNHeader />
    <Button title="NAVIGATE" onPress={() => navigation.navigate('Screen2')} />
  </SafeAreaView>
);

const Screen2 = () => (
  <SafeAreaView style={{flex: 1}} edges={['bottom', 'left', 'right']}>
    <ScrollView>
      <LearnMoreLinks />
    </ScrollView>
  </SafeAreaView>
);

const Stack = USE_NATIVE_STACK
  ? createNativeStackNavigator()
  : createStackNavigator();

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled: Platform.OS === 'android',
          stackAnimation: Platform.OS === 'android' ? 'default' : 'none',
          header: (props) => (
            <SafeAreaView edges={['left', 'right', 'top']}>
              <Header
                {...props}
                insets={{top: 0, right: 0, bottom: 0, left: 0}}
              />
            </SafeAreaView>
          ),
        }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
