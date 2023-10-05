import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import Home from '../pages/Home/index';
import Search from '../pages/Search/index';
import Profile from '../pages/Profile/index';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}></Feather>,
                    tabBarLabel: 'Início'
                }}
            />
            <Tab.Screen
                name='search'
                component={Search}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='search' color={color} size={size}></Feather>,
                    tabBarLabel: 'Pesquisar'

                }}
            />
            <Tab.Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name='user' color={color} size={size}></Feather>,
                    tabBarLabel: 'Perfil'

                }}
            />
        </Tab.Navigator>
    )
}