import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/bianca.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Bianca Luisa</Text>
      <Text style={styles.role}>Desenvolvedora Mobile Jr.</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre mim</Text>
        <Text style={styles.sectionText}>
          Sou apaixonada por tecnologia e desenvolvimento mobile. Meu foco é criar aplicativos simples, acessíveis e funcionais em React Native, com interface clara e navegação intuitiva.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 26,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#6c0694',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: '#475569',
    marginTop: 12,
  },
  section: {
    marginTop: 32,
    width: '100%',
    backgroundColor: '#690597',
    borderRadius: 16,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#faeafd',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#f0dff7',
  },
});
