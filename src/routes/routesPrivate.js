import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLORS} from "../constants/theme.js";

import Main from "../screens/main/main.jsx";
import Services from "../screens/services/services.jsx";
import Schedule from "../screens/schedule/schedule.jsx";

    const Stack = createNativeStackNavigator();

    function RoutesPrivate() {
        return <Stack.Navigator>
            <Stack.Screen name="main" component={Main} 
            options={{
                headerShown: false
            }}/>

            <Stack.Screen name="services" component={Services} 
            options={{
                headerTitle: "Serviços",
                headerTitleAlign: "Center",
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: COLORS.white,
                headerStyle: {
                    backgroundColor: COLORS.blue
                 }
            }}/>

            <Stack.Screen name="schedule" component={Schedule} 
                 options={{
                headerTitle: "Reserva",
                headerTitleAlign: "Center",
                headerShadowVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: COLORS.blue
                
            
            }}/>



        </Stack.Navigator>

    }

    export default RoutesPrivate;