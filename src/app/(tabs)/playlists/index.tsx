// src/app/(tabs)/(songs)/index.tsx
import { View, Text } from 'react-native';
import { defaultStyles } from '@/styles';

const PlaylistsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Playlists screen</Text>
    </View>
  );
};

export default PlaylistsScreen;
