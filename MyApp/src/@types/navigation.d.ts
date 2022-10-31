import { Pokemon } from "../screens/Home";

export declare global {
    namespace ReactNavigation {
        interface RootParamsList {
            Home: undefined;
            PokemonPage: Pokemon;
        }
    }
}