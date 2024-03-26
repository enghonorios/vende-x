import { LocationObject, PermissionStatus, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { styles } from '../styles';

export default function App() {
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);
  const [permissao, setPermissao] = useState<PermissionStatus | null>(null);

  async function pedindoPermissaoLocalizacao() {
    const { status } = await requestForegroundPermissionsAsync();
    setPermissao(status);
    if (status === PermissionStatus.GRANTED) {
      try {
        const posicaoAtual = await getCurrentPositionAsync();
        setLocalizacao(posicaoAtual);
        console.log("localizacao:", posicaoAtual);
      } catch (error) {
        console.error("erro ao obter a posição", error);
      }
    }
  }

  useEffect(() => {
    pedindoPermissaoLocalizacao();
  }, []);

  return (
    <View style={styles.container}>
      {/* Conteúdo aqui */}
    </View>
  );
}



