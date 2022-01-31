
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function LandingPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>RELIVE</Text>
      <View style={styles.getstarted}>
        <Button onPress={() => navigation.navigate("UploadingPage")} title='Get Started' color="#841584"></Button>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}




