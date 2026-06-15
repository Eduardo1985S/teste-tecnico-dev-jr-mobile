import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Linking
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const dadosHabilidades = [
    {
        id: '1',
        icon: 'react',
        texto: 'Minha experiência com React vai além de simplesmente criar componentes. Eu foco na arquitetura da aplicação e na eficiência do código.',
    },
    {
        id: '2',
        icon: 'git-alt',
        texto: 'Meu conhecimento em Git vai além do básico do dia a dia. Estou confortável utilizando recursos avançados quando o projeto exige organização e correções cirúrgicas.',
    },
    {
        id: '3',
        icon: 'html5',
        texto: 'Domino o HTML para a estruturação dos meus sistemas e potencializo com o dinamismo do JavaScript.',
    },
    {
        id: '4',
        icon: 'css3-alt',
        texto: 'O CSS moderno é uma ferramenta extremamente poderosa, e eu o utilizo para criar interfaces responsivas, rápidas e visualmente incríveis.',
    },
    {
        id: '5',
        icon: 'cloud',
        texto: 'Minha experiência em nuvem garante o armazenamento e a segurança dos bancos de dados e servidores que desenvolvo.',
    },
];

const { width } = Dimensions.get('window');

export default function HabilidadesScreen() {
    const abrirGithub = async () => {
        const url = 'https://github.com/NathaliaNascimentoReis';
        const suportado = await Linking.canOpenURL(url);

        if (suportado) {
            await Linking.openURL(url);
        } else {
            console.log(`Não foi possível abrir o link: ${url}`);
        }
    };

    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.icon}>
                <FontAwesome5 name={item.icon} size={30} color="#2f5a56ff" />
            </View>
            <Text style={styles.infoTexto}>{item.texto}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.background} contentContainerStyle={styles.container}>
            <View style={styles.tituloDiv}>
                <FontAwesome5 name="brain" size={24} color="#386d68" />

                <Text style={styles.titulo}>Minhas Habilidades</Text>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.lista}>
                <FlatList
                    data={dadosHabilidades}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>

            <TouchableOpacity onPress={abrirGithub} activeOpacity={0.7}>
                <View style={styles.cardGithub}>
                    <FontAwesome5 name="github" size={50} color="#386d68" />
                    <View style={styles.infos}>
                        <View style={styles.camposInfo}>
                            <Text style={styles.boldText}>Veja mais no meu perfil do github!</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#eff9f8ff',
    },
    container: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    tituloDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#386d68',
        alignSelf: 'center',
    },
    linha: {
        width: '100%',
        height: 1,
        backgroundColor: '#386d68',
        marginTop: 10,
        marginBottom: 20,
    },
    lista: {
        width: '100%',
    },
    flatListContainer: {
        paddingHorizontal: 20,
        paddingRight: 40,
        gap: 15,
    },
    card: {
        width: width * 0.75,
        height: 220,
        marginTop: 20,
        backgroundColor: '#c5e6e3ff',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 12,
        padding: 12,
        borderColor: '#91bebbff',
        borderWidth: 2,
        marginRight: 15,
        alignItems: 'center',
    },
    infoTexto: {
        color: '#386d68',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 20,
        marginBottom: 5,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    icon: {
        alignItems: 'center',
        marginBottom: 8,
    },
    cardGithub: {
        width: width * 0.75,
        height: 140,
        marginTop: 20,
        backgroundColor: '#c5e6e3ff',
        justifyContent: 'center',
        gap: 10,
        borderRadius: 12,
        padding: 12,
        borderColor: '#91bebbff',
        borderWidth: 2,
        marginRight: 15,
        alignItems: 'center',
    },
    infos: {
        flex: 1,
        gap: 5,
    },
    camposInfo: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#284e4aff',
        lineHeight: 20,
        marginRight: 5,
        textAlign: 'center',
    },
});
