import { unknownTrackImageUri } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Track, useActiveTrack } from 'react-native-track-player';
import { Entypo } from '@expo/vector-icons';

export type TrackListItemProps = {
  track: Track;
  onTrackSelect: (track: Track) => void;
};

export const TrackListItem = ({
  track,
  onTrackSelect: handleTrackSelect
}: TrackListItemProps) => {
  const isActiveTrack = useActiveTrack()?.url === track.url;

  return (
    <TouchableHighlight onPress={() => handleTrackSelect(track)}>
      <View style={styles.trackItemContainer}>
        <FastImage
          source={{
            uri: track.artwork ?? unknownTrackImageUri,
            priority: FastImage.priority.normal
          }}
          style={{
            ...styles.trackArtworkImage,
            opacity: isActiveTrack ? 0.6 : 1
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Track title + artist */}
        <View style={{ width: '100%' }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text
            }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={styles.trackArtistText}>
              {track.artist}
            </Text>
          )}
        </View>

        <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
        {/* ...표시 */}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 20
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: '600',
    maxWidth: '90%'
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSIze: 14,
    marginTop: 4
  }
});
