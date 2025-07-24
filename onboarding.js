import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import onboarding from '../Assests/onboarding.png'
import Button from '../Components/Button'


export default function Onboarding({ navigation }) {
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View style={{ alignItems: 'center' }} >
                    <Image source={onboarding}
                        style={styles.image}
                    />
                </View >
                <View style={styles.container}>
                    <Text style={styles.text1}>Fall in love with </Text>
                    <Text style={styles.text1}>Coffee in Blissful </Text>
                    <Text style={styles.text1}>Delight! </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text2}>Welcome to our coffee corner, where</Text>
                    <Text style={styles.text2}>every cup is a delightful for you.</Text>
                </View>
                <View style={{ padding: 10, paddingBottom: 25 }}>
                    <Button
                        text={'Get Started'}
                        fontSize={18}
                        color={'white'}
                        navigation={navigation}
                        screenName="HomePage"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',

    },
    image: {
        height: 400,
        width: '100%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    text1: {
        fontSize: 32,
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'light',
    },

})