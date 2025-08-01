import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.profile}>Profil</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 15,
  },
  profile: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center', 
  },
});
