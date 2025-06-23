import { FlatList, FlatListProps, View } from 'react-native';
import { TrackListItem } from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
  return (
    <FlatList
      data={[]}
      ItemSepaeratorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork
          }}
        />
      )}
      {...flatlistProps}
    />
  );
};
