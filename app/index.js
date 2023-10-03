import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions={"60%"} />
          ),
          headerRight: () => {
            return (
              <ScreenHeaderBtn iconUrl={images.profile} dimensions={"100%"} />
            );
          },
          headerTitle: "",
        }}
      />
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.viewContainer}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  viewContainer: {
    flex: 1,
    padding: SIZES.medium,
  },
});
