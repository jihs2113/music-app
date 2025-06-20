// src/app/(tabs)/(songs)/index.tsx
import { View, Text } from 'react-native';
import { defaultStyles } from '@/styles';

const ArtistsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Artists screen</Text>
    </View>
  );
};

export default ArtistsScreen;
