import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { PokemonPage } from '../screens/PokemonPage';

// Criação de instância desestrutirando em Navigator e Screen
const { Navigator, Screen } = createNativeStackNavigator();

// Listagem de rotas para o gerenciador
export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
            name="home" 
            component={Home}
            />
            <Screen 
            name="pokemonPage" 
            component={PokemonPage}
            />
        </Navigator>
    )
}