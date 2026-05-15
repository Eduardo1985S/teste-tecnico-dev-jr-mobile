import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PerfilScreen from './screens/PerfilScreen';
import HabilidadesScreen from './screens/HabilidadesScreen';
import ProjetosScreen from './screens/ProjetosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerStyle: { backgroundColor: '#690597' },
              headerTintColor: '#ffffff',
              tabBarActiveTintColor: '#b05ad8',
              tabBarInactiveTintColor: '#6b1b80',
              tabBarStyle: {
                backgroundColor: '#F8FAFC',
                borderTopColor: '#E2E8F0',
                height: 66,
                paddingBottom: 8,
                paddingTop: 6,
              },
              tabBarIcon: ({ color, size }) => {
                let iconName = 'information-outline';

                if (route.name === 'Perfil') {
                  iconName = 'account-circle';
                } else if (route.name === 'Habilidades') {
                  iconName = 'star-circle';
                } else if (route.name === 'Projetos') {
                  iconName = 'briefcase';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Perfil" component={PerfilScreen} />
            <Tab.Screen name="Habilidades" component={HabilidadesScreen} />
            <Tab.Screen name="Projetos" component={ProjetosScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
});
