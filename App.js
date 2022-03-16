import React from 'react'
import Home from './components/Home'
import Payment from './components/Payment'
import More from './components/More'
import Account from './components/Account'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const sampleTabNavigation = createBottomTabNavigator(
);



export default class App extends React.Component {
    render() {

        return (

            <NavigationContainer >
                <sampleTabNavigation.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = "home";
                            } else if (route.name === 'Payment') {
                                iconName = "card";
                            } else if (route.name === 'More') {
                                iconName = 'apps';
                            } else if (route.name === 'Account') {
                                iconName = "person";
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        tabBarActiveTintColor: '#0075FF',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: [
                            {
                              "display": "flex"
                            },
                            null
                          ]
                        
                    }}>
                    <sampleTabNavigation.Screen name="Home" component={Home} />
                    <sampleTabNavigation.Screen name="Payment" component={Payment} />
                    <sampleTabNavigation.Screen name="More" component={More} />
                    <sampleTabNavigation.Screen name="Account" component={Account} />
                    
                </sampleTabNavigation.Navigator>
            </NavigationContainer>
        );
    }
}