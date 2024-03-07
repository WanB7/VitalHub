// Imports Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Componentes
import { Login } from './src/screens/Login/Login';
import { Register } from './src/screens/Register/Register';
import {EmailCode} from './src/screens/EmailCode/EmailCode'
import {RecoverPassword} from './src/screens/RecoverPassword/RecoverPassword'
import {RedefinePassword} from './src/screens/RedefinePassword/RedefinePassword'
import { Profile } from './src/screens/Profile/Profile';

// Import das Fonts
import { useFonts } from 'expo-font';
import { MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_400Regular,Quicksand_500Medium, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home/Home';
import { InsertMedicalRecord } from './src/screens/InsertMedicalRecord/InsertMedicalRecord';
import SelectClinic from './src/screens/SelectClinic/SelectClinic';
import { SelectDoctor } from './src/screens/SelectDoctor/SelectDoctor';
import { SelectDate } from './src/screens/SelectDate/SelectDate';
import { Main } from './Main/Main.js';

// Instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  // Instancia das fonts usando useFonts
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,MontserratAlternates_500Medium,Quicksand_500Medium,Quicksand_600SemiBold, Quicksand_400Regular
  })

  // Validacao carregamento da font
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    // Navegação
    // Container
    // StackNavigation
    // StackSecreen

    // Envolve a estrutura da navegação
    <NavigationContainer>
      <StatusBar  />
      {/* componente para navegação */}
      <Stack.Navigator screenOptions ={{
        headerShown: false
      }}>

        {/* <Stack.Screen
        // nome da tela
        name='Navigation'
        // componente que sera renderizado
        component={Navigation}
        // titulo da pagina
        options={{title: 'Navigation'}}
        /> */}

        <Stack.Screen
        name='Login'
        component={Login}
        options={{title: 'Login'}}
        />

        <Stack.Screen
        name='Main'
        component={Main}
        />

        <Stack.Screen
        name='Profile'
        component={Profile}
        options={{title: 'Profile'}}
        />

        <Stack.Screen
        name='Register'
        component={Register}
        options={{title: 'Register'}}
        />

        <Stack.Screen
        name='EmailCode'
        component={EmailCode}
        options={{title: 'EmailCode'}}
        />

        <Stack.Screen
        name='RecoverPassword'
        component={RecoverPassword}
        options={{title: 'RecoverPassword'}}
        />

        <Stack.Screen
        name='RedefinePassword'
        component={RedefinePassword}
        options={{title: 'RedefinePassword'}}
        />

        <Stack.Screen
        name='InsertMedicalRecord'
        component={InsertMedicalRecord}
        options={{title: 'InsertMedicalRecord'}}
        />

        <Stack.Screen
        name='Home'
        component={Home}
        options={{title: 'Home'}}
        />

        <Stack.Screen
        name='SelectClinic'
        component={SelectClinic}
        options={{title: 'SelectClinic'}}
        />

        <Stack.Screen
        name='SelectDoctor'
        component={SelectDoctor}
        options={{title: 'SelectDoctor'}}
        />

        <Stack.Screen
        name='SelectDate'
        component={SelectDate}
        options={{title: 'SelectDate'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
