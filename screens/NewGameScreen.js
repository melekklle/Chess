import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert, SafeAreaView, ScrollView, Text } from 'react-native';

export default function NewGameScreen() {
  const renderSquare = (row, col) => {
    const isBlack = (row + col) % 2 === 1;
    return (
      <TouchableOpacity
        key={`${row}-${col}`}
        style={[styles.square, { backgroundColor: isBlack ? '#769656' : '#eeeed2' }]}
        onPress={() => Alert.alert('Kare Tıklandı', `Satır: ${row + 1}, Sütun: ${col + 1}`)}
      />
    );
  };

  const rows = [];
  for (let row = 0; row < 8; row++) {
    const cols = [];
    for (let col = 0; col < 8; col++) {
      cols.push(renderSquare(row, col));
    }
    rows.push(
      <View key={row} style={{ flexDirection: 'row' }}>
        {cols}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.homepage}>Yeni Oyun</Text>
        <View style={styles.board}>{rows}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 15,
    alignItems: 'center',
  },
  homepage: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
    marginBottom: 15,
  },
  board: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 50,
    height: 50,
  },
});
