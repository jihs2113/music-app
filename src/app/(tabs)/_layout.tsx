// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { Tabs } from 'expo-router';

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerStyle: { backgroundColor: '#f5f5f5' },
//         headerShadowVisible: false,
//         tabBarStyle: {
//           backgroundColor: '#f5f5f5',
//           borderTopWidth: 0,
//           elevation: 0,
//           shadowOpacity: 0
//         },
//         tabBarActiveTintColor: '#6200ee',
//         tabBarInactiveTintColor: '#666666'
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Today's Habits",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="calendar-today"
//               size={size}
//               color={color}
//             />
//           )
//         }}
//       />
//       <Tabs.Screen
//         name="streaks"
//         options={{
//           title: 'Streaks',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="chart-line"
//               size={size}
//               color={color}
//             />
//           )
//         }}
//       />
//       <Tabs.Screen
//         name="add-habit"
//         options={{
//           title: 'Add Habit',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="plus-circle"
//               size={size}
//               color={color}
//             />
//           )
//         }}
//       />
//     </Tabs>
//   );
// }

import { Tabs } from 'expo-router';
import { colors, fontSize } from '@/constants/tokens';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome6,
  Ionicons
} from '@expo/vector-icons';

const TabsNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: '500'
        },
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8
        },
        tabBarBackground: () => {
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }}
          />;
        }
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoties',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: 'Playlists',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              size={28}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: 'Songs',
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-sharp" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: 'Artists',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-line" size={20} color={color} />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsNavigation;
