import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Anunciar from './pages/anunciar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Namebar from './pages/Namebar'
import Selectyourimage from './pages/Selectyourimage';
import Description from './pages/Description';
import ChoiseImage from './pages/ChoiseImage';
import CameraScreen from './pages/CameraScreen'
import Location from './pages/Location';
import SendModal from './Components/SendModal';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name = "anunciar" component={Anunciar} options={{ headerShown: false }}/>
        <Stack.Screen name = "nomebar" component={Namebar} options={{ headerShown: false }}/>
        <Stack.Screen name = "description" component={Description} options={{ headerShown: false }}/>
        <Stack.Screen name = "selectyourimage" component={Selectyourimage} options={{ headerShown: false }}/>
        <Stack.Screen name = "choiseImage" component={ChoiseImage} options={{ headerShown: false }}/>
        <Stack.Screen name = "camerascreen" component={CameraScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "location" component={Location} options={{ headerShown: false }}/>
        <Stack.Screen name = "sendmodal" component={SendModal} options={{ headerShown: false }}/>
        
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}


