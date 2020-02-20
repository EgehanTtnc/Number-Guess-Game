import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')}
                    source={{uri: 'https://pbs.twimg.com/profile_images/438756755397300224/kp8rmJes_400x400.jpeg'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <BodyText style={styles.bodyTextIp}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
            <MainButton onPress={props.onRestart}>
                NEW GAME
            </MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 200
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight:{
        color: colors.primary
    },
    bodyTextIp: {
        fontSize: 20,
        marginVertical: 15,
        textAlign: "center"
    }
});

export default GameOverScreen;