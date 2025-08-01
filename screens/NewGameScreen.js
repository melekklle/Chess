import React from 'react';
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

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

  return <View style={styles.board}>{rows}</View>;
}

const styles = StyleSheet.create({
  board: { alignSelf:'center', marginTop:20 },
  square: { width:40, height:40 },
});
