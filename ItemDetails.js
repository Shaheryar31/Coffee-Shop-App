import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import detail from '../Assests/detail.png';
import maskIcon1 from '../Assests/maskIcon1.png';
import maskIcon2 from '../Assests/maskIcon2.png';
import maskIcon3 from '../Assests/maskIcon3.png';
import Icon from 'react-native-vector-icons/AntDesign';
import SizeButton from '../Components/SizeButton';
import Button from '../Components/Button';


export default function ItemDetails({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Image  */}
                <View>
                    <Image source={detail} style={styles.image} />
                </View>
                {/* content */}
                <View style={styles.content}>
                    <Text style={styles.title}>Caffe Mocha</Text>
                    <Text style={styles.options}>Ice/Hot </Text>
                    {/* iconsContainer */}
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity>
                            <View style={styles.maskIconBox}>
                                <Image source={maskIcon1} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.maskIconBox}>
                                <Image source={maskIcon2} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.maskIconBox}>
                                <Image source={maskIcon3} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Rating Container */}
                    <View style={styles.ratingContainer}>
                        <Icon name="star" size={20} color="#FBBE21" />
                        <Text style={styles.rating} >4.8</Text>
                        <Text style={styles.reviews}>(230)</Text>
                    </View>
                </View>
                {/* DashedLine */}
                <View style={styles.dashedLine} />
                {/* Description Text */}
                <View style={styles.descriptionContent}>
                    <Text style={styles.descriptionText}>Description</Text>
                    <Text style={styles.descriptionPraph}>A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo..
                        <Text style={styles.descriptionReadmore}> Read More</Text>
                    </Text>
                </View>
                {/* Size Text  */}
                <Text style={styles.sizeText} >Size</Text>
                {/* Size Button  */}
                <SizeButton />
                <View style={styles.container}>
                    <View>
                        <Text>Price</Text>
                        <Text style={styles.priceText}>$ 4.53</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            text={'Buy Now'}
                            fontSize={18}
                            color={'white'}
                            style={styles.button}
                            navigation={navigation}
                            screenName="Order"
                        />
                    </View>
                </View>
                <View style={{ paddingBottom: 5 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        margin: 17,
        borderRadius: 16,
    },
    content: {
        paddingLeft: 22,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    options: {
        fontSize: 14,
        color: '#888',
        marginVertical: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    rating: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    reviews: {
        marginLeft: 4,
        fontSize: 12,
        color: '#888',
    },
    maskIconBox: {
        height: 44,
        width: 44,
        borderRadius: 12,
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        margin: 25,
        gap: 16,
        alignSelf: 'flex-end',
        position: 'absolute',
        paddingRight: 24,
    },
    dashedLine: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CCC',
        marginVertical: 16,
        marginHorizontal: 38,
    },
    descriptionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    descriptionPraph: {
        marginVertical: 8,
        fontSize: 14,
        lineHeight: 20,
    },
    descriptionReadmore: {
        color: '#C67C4E',
        fontWeight: 'bold',
        fontSize: 14,
    },
    descriptionContent: {
        paddingLeft: 22,
    },
    sizeText: {
        fontSize: 16,
        marginVertical: 8,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 22,
    },
    priceText: {
        color: '#C67C4E',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    container: {
        margin: 24,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        marginLeft: 34,
        marginRight: 24,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },


})