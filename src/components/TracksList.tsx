import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItem } from './TrackListItem';
import { Track } from 'react-native-track-player';

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
  const handleTrackSelect = (track: Track) => {
    console.log(track);
  };

  return (
    <FlatList
      data={[]}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSepaeratorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem track={track} onTrackSelect={handleTrackSelect} />
      )}
      {...flatlistProps}
    />
  );
};
