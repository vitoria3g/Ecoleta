import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';
export default function App() {
  /*Faz a aplicação carregar as fontes*/
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium, 
    Ubuntu_700Bold
  });
  /*Espera as a fontes carregarem*/
  if(!fontsLoaded){
    return <AppLoading/> //se a funte não estiver carregada então retorna uma telinha de carregamento
  }
  /*se não carregar fica o logo de carregamento*/
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes/>
    </>
  );
}

