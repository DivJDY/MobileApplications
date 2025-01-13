import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShowRoomLists from '../components/ShowRoomLists';


// Get screen width
const screenWidth = Dimensions.get('window').width;
const HomeScreen = ({ navigation }: any) => {

    const handleIconPress = (screenName: string) => {
        // navigation.navigate(screenName);
        console.log("=========", screenName)
        navigation.navigate('DetailingScreen');
    };

    const renderVehicleImageShow = (txt: string, img: any, onClick: () => void) => (

        <TouchableOpacity style={{ marginRight: 12 }} onPress={onClick} activeOpacity={0.92}>
            <View style={[styles.gridItem, styles.cardShadow]}>
                <Image source={img} style={styles.gridIcon} />
                <Text style={styles.gridLabel}>{txt}</Text>
            </View>
        </TouchableOpacity>
    )


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.topBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../assets/images/location.png')} style={{ width: 18, height: 21 }} />

                        <Text style={styles.locationText}>Delhi</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Image source={require('../../assets/images/search.png')} style={{ width: 18, height: 21, }} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', margin: 12 }}>

                    {renderVehicleImageShow('Motor', require('../../assets/vehicles/motor.png'), () => handleIconPress('Cars'))}
                    {renderVehicleImageShow('Motor Bikes', require('../../assets/vehicles/motor_bike.png'), () => handleIconPress('Cars'))}
                    {renderVehicleImageShow('Showrooms', require('../../assets/vehicles/show_room.png'), () => handleIconPress('Cars'))}
                </View>
                <View style={{ flexDirection: 'row', margin: 12 }}>
                    {renderVehicleImageShow('Parts & Accessories', require('../../assets/vehicles/parts_accessories.png'), () => handleIconPress('Cars'))}
                    {renderVehicleImageShow('Number Plates', require('../../assets/vehicles/number_plate.png'), () => handleIconPress('Cars'))}
                    {renderVehicleImageShow('Car Service', require('../../assets/vehicles/car_service.png'), () => handleIconPress('Cars'))}
                </View>
                <View style={{ flexDirection: 'row', margin: 12 }}>
                    {renderVehicleImageShow('Car Wash', require('../../assets/vehicles/car_wash.png'), () => handleIconPress('Cars'))}
                    {renderVehicleImageShow('Car Recovery', require('../../assets/vehicles/car_recovery.png'), () => handleIconPress('Cars'))}
                    {renderVehicleImageShow('Boats', require('../../assets/vehicles/boats.png'), () => handleIconPress('Cars'))}
                </View>


                <View style={styles.adBanner}>
                    <Image source={require('../../assets/images/slide.png')} style={{ width: 380, height: 156, }} />
                </View>

                <ShowRoomLists txt="Top Showrooms" viewTxt="View All" />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    topBar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    locationText: {
        marginLeft: 8,
        fontWeight: 'bold',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginRight: 12,
    },
    cardShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android
    },
    // gridItem: {
    //     alignItems: 'center',
    //     flexDirection: 'column',
    //     backgroundColor: '#fff',
    //     width: 118,
    //     height: 88,
    //     paddingTop: 2,
    //     marginBottom: -10,
    //     borderRadius: 12,
    // },
    gridItem: {
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: (screenWidth - 48) / 3, // Subtract margins and divide by 3
        height: 88,
        paddingTop: 2,
        marginBottom: -10,
        borderRadius: 12,
    },
    gridIcon: {
        marginTop: -5,
        width: 80,
        height: 80,
    },
    gridLabel: {
        marginTop: -8,
        fontSize: 10,
        color: '#101828',
        fontWeight: '700',
        fontFamily: 'Nunito Sans',
    },
    adBanner: {
        marginTop: 16,
        marginBottom: 8,
        marginHorizontal: 12,
    },
    adImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },

});

export default HomeScreen;