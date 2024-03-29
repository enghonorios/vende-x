import { View } from 'react-native';
import Login from './screens/login'; // Importe o componente de login
import Register from './screens/register';
import Location from './tools/location'; // Importe o componente de localização

const App = () => {
  return (
    <View>
      <Location /> {/* Componente de localização */}
      <Login /> {/* Componente de login */}
      <Register /> {/* Componente de registro */}
    </View>
  );
};

export default App;
