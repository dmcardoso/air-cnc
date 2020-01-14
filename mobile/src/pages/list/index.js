import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Text, AsyncStorage, Image, StyleSheet} from 'react-native';
import logo from '../../assets/logo.png';
import SpotList from "../../components/spot-list";

function List(props) {
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs => {
            const techsArray = storageTechs.split(',').map(tech => tech.trim());

            setTechs(techsArray);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 32,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: Platform.OS === 'android' ? 35 : 0,
    }
});

export default List;