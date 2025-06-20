// src/app/(tabs)/(songs)/index.tsx
import { View, Text } from 'react-native';
import { defaultStyles } from '@/styles';

const FavoritesScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Favorites screen</Text>
    </View>
  );
};

export default FavoritesScreen;
