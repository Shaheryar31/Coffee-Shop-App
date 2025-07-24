import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import EditsButtons from '../Components/EditsButtons'
import orderPic1 from '../Assests/orderPic1.png';
import Counter from '../Components/Counter';
import DiscountButton from '../Components/DiscountButton';
import Wallet from '../Assests/Wallet.png';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from '../Components/Button'
import DeliverPickButton from '../Components/DeliverPickButton';

export default function OrderScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                {/* Here I call dynamic DeliverPickButton (File Name is "DeliverPickButton" ) */}
                <DeliverPickButton />
                <View style={styles.container}>
                    {/* here is main Text , loaction, Address */}
                    <Text style={styles.deliveryAddText}>Delivery Address</Text>
                    <Text style={styles.area}>Jl. Kpg Sutoyo</Text>
                    <Text style={styles.address}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
                </View>
                {/* Here Edit & Add Button / which is dynamic Button (file Name "EditsButton") */}
                <View style={styles.editAddContainer}>
                    <EditsButtons
                        iconsName={'edit'}
                        iconColor={'black'}
                        iconSize={14}
                        buttontext={'Edit Address'}
                    />
                    <EditsButtons
                        iconsName={'filetext1'}
                        iconColor={'black'}
                        iconSize={14}
                        buttontext={'Add Note'}
                    />
                </View>
                {/* Here is dashedLine */}
                <View style={styles.dashedLine} />
                {/* Here is checkOutProduct Container */}
                <View style={styles.checkOutProduct}>
                    <View style={styles.row}>
                        <Image source={orderPic1} />
                        <View style={styles.textContainer}>
                            <Text style={styles.productName}>Caffe Mocha</Text>
                            <Text style={styles.productDetail}>Deep Foam</Text>
                        </View>
                        <Counter />
                    </View>
                </View>
                {/* Here is MiddashedLine */}
                <View style={styles.middashedLine} />
                {/* Here is DiscountButton (This button is dynamic. File Name is DiscountButton,js) */}
                <View style={styles.discountButtonContainer}>
                    <DiscountButton />
                </View>
                {/* Here is Payment Summary Container */}
                <View style={styles.paymentMethod}>
                    <Text style={styles.paySummary}>Payment Summary</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.textPrice}>Price</Text>
                        <Text style={styles.paySummary}>$ 4.53</Text>
                    </View>
                    <View style={styles.deliveryContainer}>
                        <Text style={styles.deliveryText}>Delivery Fee</Text>
                        <Text style={styles.discountFee}>$ 2.0</Text>
                        <Text style={styles.paySummary}>$ 1.0</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    {/* Here is Wallet Section */}
                    <View style={styles.walletContainer}>
                        <Image source={Wallet} />
                        <View style={styles.cash_wallet_text}>
                            <Text style={styles.cashtext}>Cash/Wallet</Text>
                            <Text style={styles.moneytext}>$ 5.53</Text>
                        </View>
                        <Icon name='down' style={styles.icon} />
                    </View>
                    {/* Here I call dynamic Button */}
                    <View style={styles.button}>
                        <Button
                            text={'Order'}
                            fontSize={18}
                            color={'white'}
                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
        marginTop: 12,
    },
    deliveryAddText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    area: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'semibold',
        paddingTop: 16,
    },
    address: {
        paddingTop: 4,
        color: '#A2A2A2',
    },
    editAddContainer: {
        flexDirection: 'row',
        paddingTop: 24,
        paddingLeft: 20,
    },
    dashedLine: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CCC',
        marginVertical: 16,
        marginHorizontal: 38,
    },
    checkOutProduct: {
        marginHorizontal: 24,
        justifyContent: 'space-between',
    },
    textContainer: {
        justifyContent: 'center',
        paddingLeft: 16,
        flex: 1,
    },
    productName: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    productDetail: {
        color: '#A2A2A2',
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensures space between elements
    },
    middashedLine: {
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: '#F9F2ED',
        opacity: 1,
        marginVertical: 16,
    },
    discountButtonContainer: {
        marginHorizontal: 20,
    },
    paymentMethod: {
        paddingLeft: 22,
        paddingTop: 24,
    },
    paySummary: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',

    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingRight: 24,
        paddingTop: 16,
    },
    textPrice: {
        fontSize: 16,
        color: 'black',
    },
    deliveryContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 32,
    },
    deliveryText: {
        fontSize: 16,
        color: 'black',
        flex: 1,
    },
    discountFee: {
        fontSize: 16,
        color: 'black',
        textDecorationLine: 'line-through',
        marginRight: 8,
    },
    walletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingLeft: 24,
    },
    cash_wallet_text: {
        flex: 1,
        marginHorizontal: 16,
    },
    cashtext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    moneytext: {
        fontSize: 12,
        color: '#C67C4E',
        fontWeight: 'bold',
        paddingTop: 4,
    },
    icon: {
        color: 'black',
        justifyContent: 'center',
        paddingRight: 26,
        fontSize: 22,
    },
    button: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 8,
        marginBottom: 8,
    },
    bottom: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        paddingTop: 16,
        borderRadius: 16,
    },
})