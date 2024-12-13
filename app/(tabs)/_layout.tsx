import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '@/components/TabBar';
import TopBar from '@/components/TopBar'; 

const TabLayout = () => {
  return (
    <>
      {/* Add the TopBar component here */}
      <TopBar />
      
      {/* Tab navigation starts here */}
      <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Dashboard",
          }}
        />
        <Tabs.Screen
          name="discover"
          options={{
            title: "Live Alert",
          }}
        />
      
        <Tabs.Screen
          name="settings"
          options={{
            title: "Telemetry",
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
