import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";

// Gerenciador de rotas
export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}