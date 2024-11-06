import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Group } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="groups" component={Group} />
      <Stack.Screen name="new" component={NewGroup} />
      <Stack.Screen name="players" component={Players} />
    </Stack.Navigator>
  );
}
