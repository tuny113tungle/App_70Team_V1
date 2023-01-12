import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TrangChu from '../Screen/TrangChu';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrangChu" component={TrangChu} />
      
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator>

      </StackNavigator>
    </NavigationContainer>
  )

};

export default MainNavigator;
