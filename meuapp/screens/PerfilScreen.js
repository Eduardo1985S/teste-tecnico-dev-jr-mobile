import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Perfil</Text>
            <Image
                source={{
                    uri: 'https://i.pinimg.com/736x/0e/53/de/0e53dee842f7e54849b82442685ac980.jpg',
                }}
                style={styles.foto}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7fdffff',
        width: '100%',
    },
    foto: {
        width: 60,
        height: 40,
        borderRadius: 15,
    },
});
