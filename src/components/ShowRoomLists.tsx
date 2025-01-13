import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowRoomLists = ({ txt, viewTxt }: any) => {
    const renderShowroomLists = (title: string, desc: string, img: any) => (
        <View style={{ flexDirection: 'column', }}>
            <Image source={require('../../assets/vehicles/toyota_pic.png')} style={{ width: 152, height: 120, marginRight: 12, marginBottom: 8 }} />
            <View style={styles.container}>
                <Image source={img} style={styles.img} />
                <View>
                    <Text style={styles.titleTxt}>{title}</Text>
                    <Text style={styles.descTxt}>{desc}</Text>
                </View>
            </View>
        </View>
    )
    return (
        <View style={styles.topShowroomsContainer}>
            <View style={styles.topShowroomsSubContainer}>
                <Text style={styles.topShowroomsText}>{txt}</Text>
                <Text style={styles.viewAllTxt}>{viewTxt}</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    {renderShowroomLists('Toyota Motors', '1.2 km away', require('../../assets/vehicles/toyota_logo.png'))}
                    {renderShowroomLists('Toyota Motors', '2 km away', require('../../assets/vehicles/toyota_logo.png'))}
                    {renderShowroomLists('Toyota Motors', '3 km away', require('../../assets/vehicles/toyota_logo.png'))}
                    {renderShowroomLists('Toyota Motors', '4 km away', require('../../assets/vehicles/toyota_logo.png'))}
                    {renderShowroomLists('Toyota Motors', '5 km away', require('../../assets/vehicles/toyota_logo.png'))}
                </View>
            </ScrollView>
        </View>
    )
}

export default ShowRoomLists

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center' },
    topShowroomsContainer: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    topShowroomsSubContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    topShowroomsText: {
        fontSize: 16,
        fontFamily: 'nunito sans',
        fontWeight: '800',
        marginBottom: 8,
    },
    viewAllTxt: { color: '#F04438', fontSize: 12, fontWeight: '500' },
    img: { width: 32, height: 32, marginRight: 12 },
    titleTxt: { fontSize: 12, color: '#615d5d', fontWeight: '600' },
    descTxt: { fontSize: 10, color: '#615d5d', fontWeight: '500' }
})