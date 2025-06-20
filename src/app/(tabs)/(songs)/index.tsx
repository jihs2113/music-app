// src/app/(tabs)/(songs)/index.tsx
import { View, Text } from 'react-native';
import { defaultStyles } from '@/styles';

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Songs screen</Text>
    </View>
  );
};

export default SongsScreen;
