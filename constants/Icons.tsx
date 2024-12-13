import { Ionicons } from "@expo/vector-icons";

export const icon = {
  index: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="home" size={22} color={color} />
    ) : (
      <Ionicons name="home-outline" size={22} color={color} />
    ),
  discover: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      
      <Ionicons name="notifications" size={20} color={color} />
    ) : (
      <Ionicons name="notifications" size={20} color={color} />
    ),
  saved: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="bookmarks" size={22} color={color} />
    ) : (
      <Ionicons name="bookmarks-outline" size={22} color={color} />
    ),
  settings: ({ color, focused }: { color: string; focused: boolean }) =>
    focused ? (
      <Ionicons name="analytics-outline" size={24} color={color} />
     
    ) : (
      <Ionicons name="analytics-outline" size={24} color={color} />
    ),
    more: ({ color, focused }: { color: string; focused: boolean }) =>
      focused ? (
        
        <Ionicons name="menu-outline" size={24} color={color} />
      ) : (
        <Ionicons name="menu-outline" size={24} color={color} />
      ),
};
