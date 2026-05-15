import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet, Alert, Linking } from 'react-native';

export default function ProjetosScreen() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!email || !message) {
      Alert.alert('Preencha o e-mail e a mensagem para enviar.');
      return;
    }

    Alert.alert('Contato enviado.', `Obrigado! Em breve respondo pelo e-mail ${email}.`);
    setEmail('');
    setMessage('');
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() => Alert.alert('Não foi possível abrir o link.'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <View style={styles.card}>
        <Text style={styles.projectName}>App de Portfólio</Text>
        <Text style={styles.projectDescription}>
          App com navegação por abas, telas de perfil, habilidades e contato desenvolvido em React Native.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.projectName}>Lista de Habilidades</Text>
        <Text style={styles.projectDescription}>
          Projeto que demonstra layout responsivo, FlatList e formulário de contato com campo de mensagem.
        </Text>
      </View>

      <Text style={[styles.title, styles.sectionMargin]}>Contato</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.contactLabel}>E-mail:</Text>
        <Text style={styles.contactText}>bianca.l.silva13@aluno.senai.br</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactLabel}>GitHub:</Text>
        <Text style={styles.link} onPress={() => openLink('https://github.com/biancaluisat')}>
          github.com/biancaluisat
        </Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactLabel}>LinkedIn:</Text>
        <Text style={styles.link} onPress={() => openLink('https://www.linkedin.com/in/biancateodoro')}>
          linkedin.com/in/biancateodoro
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Mensagem"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Enviar contato" onPress={handleSend} color="#690597" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 28,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#690597',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#690597',
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
  },
  projectName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  projectDescription: {
    color: '#ffffff',
    lineHeight: 20,
  },
  sectionMargin: {
    marginTop: 24,
  },
  contactInfo: {
    marginBottom: 16,
  },
  contactLabel: {
    fontWeight: '700',
    color: '#1E293B',
  },
  contactText: {
    color: '#334155',
  },
  link: {
    color: '#690597',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    backgroundColor: '#F8FAFC',
  },
  textArea: {
    height: 140,
    textAlignVertical: 'top',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
});
