import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

//LEMBRAR DE ARRUMAR A PORRA DA FONTE

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./../src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./../src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./../src/assets/fonts/Poppins-SemiBold.ttf'),
})
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
