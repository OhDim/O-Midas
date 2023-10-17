import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Home from '../pages/Home/index';
import Search from '../pages/Search/index';
import Profile from '../pages/Profile/index';
import Cupons from '../pages/Cupons/index';
import Login from '../pages/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: '#4c4c4c',
            tabBarStyle: {
                borderTopWidth: 0,
                backgroundColor: '#101010',
                //rgba(34,36,40,1)
            }
          })}>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}></Feather>,
                    tabBarLabel: 'Início',
                    tabBarLabelStyle:{
                        fontFamily: "Poppins-SemiBold"
                    }
                }}
            />
            <Tab.Screen
                name='search'
                component={Search}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='search' color={color} size={size}></Feather>,
                    tabBarLabel: 'Pesquisar',
                    tabBarLabelStyle:{
                        fontFamily: "Poppins-SemiBold"
                    }
                }}
            />
            <Tab.Screen
                name='cupons'
                component={Cupons}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='percent' color={color} size={size}></Feather>,
                    tabBarLabel: 'Cupons',
                    tabBarLabelStyle:{
                        fontFamily: "Poppins-SemiBold"
                    }
                }}
            />
            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='user' color={color} size={size}></Feather>,
                    tabBarLabel: 'Perfil',
                    tabBarLabelStyle:{
                        fontFamily: "Poppins-SemiBold"
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export function Auth(props) {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Login' component={Login}></Stack.Screen>
                <Stack.Screen name='TabRoutes' component={TabRoutes}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}
