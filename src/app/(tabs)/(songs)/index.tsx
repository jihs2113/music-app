// src/app/(tabs)/(songs)/index.tsx
import { View, ScrollView } from 'react-native';
import { defaultStyles } from '@/styles';
import { TracksList } from '@/components/TracksList';

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
