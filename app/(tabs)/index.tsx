import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const INITIAL_REGION = {
    latitude: -9.647598360922988,
    longitude: -35.7153720873413,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const navigation = useNavigation();
  const mapRef = useRef<any>();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={focusMap}>
          <View style={{ padding: 10 }}>
            <Text>Focus</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  });

  const focusMap = () => {
    const SP = {
      latitude: -23.619139951675724,
      longitude: -46.68298762558657,
      latitudeDelta: 2,
      longitudeDelta: 2,
    };
    mapRef.current.animateToRegion(SP)
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        zoomEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        ref={mapRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1a1a1a",
  },
});
