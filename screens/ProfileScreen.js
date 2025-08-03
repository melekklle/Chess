import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.profile}>Profil</Text>

        <View style={styles.profilestyle}>
          <TouchableOpacity onPress={() => Alert.alert('Profil', 'Mel\'in profiline tıkladınız')}>
            <View style={styles.profileRow}>
              <Image 
                source={require("../image/mel.jpeg")}
                style={styles.profileImage}
              />

              <View style={styles.textContainer}>
                <Text style={styles.profileName}>Melek</Text>
                <Text style={styles.profileEmail}>mel@example.com</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profilestyle}>
                  <TouchableOpacity onPress={() => Alert.alert('Profil', 'Mel\'in profiline tıkladınız')}>
                    <View style={styles.profileRow}>
                      <Image 
                        source={require("../image/mel.jpeg")}
                        style={styles.profileImage}
                      />

                      <View style={styles.textContainer}>
                        <Text style={styles.profileName}>Melek</Text>
                        <Text style={styles.profileEmail}>mel@example.com</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
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
  profile: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  profilestyle: {
    alignSelf: 'flex-start',
    backgroundColor: '#769656',
    borderRadius: 10,
    padding: 10,
     marginBottom: 15,
      width: '70%',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  profileEmail: {
    fontSize: 14,
    color: 'white',
  },
});
