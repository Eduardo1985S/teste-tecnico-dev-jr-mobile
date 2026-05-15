import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const skills = [
  'React Native',
  'JavaScript',
  'Git e GitHub',
  'Comunicação em equipe',
  'Testes básicos',
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.skillCard}>
            <Text style={styles.skillText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#690597',
    marginBottom: 22,
  },
  list: {
    paddingBottom: 28,
  },
  skillCard: {
    backgroundColor: '#690597',
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: 14,
    marginBottom: 16,
  },
  skillText: {
    fontSize: 16,
    color: '#ffffff',
  },
});
