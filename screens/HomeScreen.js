import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#769656" />
            <Text style={styles.backText}>Giriş Ekranı</Text>
          </TouchableOpacity>
          <Text style={styles.homepage}>Ana Sayfa</Text>
        </View>
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  backText: {
    fontSize: 16,
    color: '#769656',
    marginLeft: 5,
  },
  homepage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  melek: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
