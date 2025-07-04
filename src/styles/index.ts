import { colors, fontSize } from '@/constants/tokens';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  text: {
    fontSize: fontSize.base,
    color: colors.text
  }
});

export const utilsStyles = StyleSheet.create({
  itemSeperator: {
    borderColor: colors.textMuted,
    borderWidth: StyleSheet.harlineWidth,
    opacity: 0.3
  }
});
