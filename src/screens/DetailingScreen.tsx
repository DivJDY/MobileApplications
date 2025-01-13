// import React from "react";
// import {
//     View,
//     Text,
//     FlatList,
//     Image,
//     StyleSheet,
//     TouchableOpacity,
//     ScrollView,
//     Alert,
// } from "react-native";

// // Dummy Data
// const data = [
//     {
//         city: "Dubai",
//         services: [
//             { id: "1", name: "A Car Wash & Detailing", distance: "1.2 km away", image: require("../../assets/vehicles/motor.png") },
//             { id: "2", name: "A Car Wash & Detailing", distance: "1.2 km away", image: require("../../assets/vehicles/motor.png") },
//         ],
//     },
//     {
//         city: "Sharjah",
//         services: [
//             { id: "3", name: "B Car Wash & Detailing", distance: "1.2 km away", image: require("../../assets/vehicles/motor.png") },
//             { id: "4", name: "Car Wash Pro", distance: "1.5 km away", image: require("../../assets/vehicles/motor.png") },
//         ],
//     },
//     {
//         city: "Abu Dhabi",
//         services: [
//             { id: "5", name: "Toyota Motors", distance: "1.2 km away", image: require("../../assets/vehicles/motor.png") },
//             { id: "6", name: "Toyota Motors", distance: "1.2 km away", image: require("../../assets/vehicles/motor.png") },
//         ],
//     },
// ];

// export default function DetailingScreen() {
//     const renderHeader = (city, onViewAllPress) => (
//         <View style={styles.headerContainer}>
//             <Text style={styles.headerText}>{city}</Text>
//             <TouchableOpacity onPress={onViewAllPress}>
//                 <Text style={styles.viewAllText}>View all</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     const renderServiceItem = ({ item }) => (
//         <View style={styles.serviceCard}>
//             <Image source={item.image} style={styles.serviceImage} />
//             <Text style={styles.serviceName} numberOfLines={1}>{item.name}</Text>
//             <Text style={styles.serviceDistance}>{item.distance}</Text>
//         </View>
//     );



//     return (
//         <ScrollView style={styles.container}>
//             {data.map((section) => (
//                 <View key={section.city}>
//                     {/* Header */}
//                     {renderHeader(section.city, () => Alert.alert(`View all for ${section.city}`))}
//                     {/* Horizontal List */}
//                     <FlatList
//                         data={section.services}
//                         renderItem={renderServiceItem}
//                         keyExtractor={(item) => item.id}
//                         horizontal
//                         showsHorizontalScrollIndicator={false}
//                         contentContainerStyle={styles.flatListContainer}
//                     />
//                 </View>
//             ))}
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingHorizontal: 16,
//     },
//     headerContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginTop: 16,
//     },
//     headerText: {
//         fontSize: 18,
//         fontWeight: "bold",
//         color: "#000",
//     },
//     viewAllText: {
//         fontSize: 14,
//         fontWeight: "bold",
//         color: "#FF6347", // Orange color for "View all"
//     },
//     flatListContainer: {
//         marginTop: 12,
//         paddingBottom: 8,
//     },
//     serviceCard: {
//         width: 150,
//         marginRight: 12,
//         backgroundColor: "#fff",
//         borderRadius: 8,
//         overflow: "hidden",
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 2, // For Android shadow
//     },
//     serviceImage: {
//         width: "100%",
//         height: 100,
//         resizeMode: "cover",
//     },
//     serviceName: {
//         fontSize: 14,
//         fontWeight: "bold",
//         color: "#000",
//         marginVertical: 4,
//         marginHorizontal: 8,
//     },
//     serviceDistance: {
//         fontSize: 12,
//         color: "#888",
//         marginBottom: 8,
//         marginHorizontal: 8,
//     },
// });


import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import ShowRoomLists from '../components/ShowRoomLists';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useNavigationState } from '@react-navigation/native';



type Service = {
    id: string;
    image: any;
    name: string;
    distance: string;
};

type CitySection = {
    city: string;
    services: Service[];
};

const data: CitySection[] = [
    {
        city: 'Dubai',
        services: [
            { id: '1', image: require("../../assets/vehicles/toyota_pic3.png"), name: 'A Car Wash & Detailing', distance: '1.2 km away' },
            { id: '2', image: require("../../assets/vehicles/toyota_pic1.png"), name: 'A Car Wash & Detailing', distance: '2 km away' },
            { id: '3', image: require("../../assets/vehicles/toyota_pic2.png"), name: 'A Car Wash & Detailing', distance: '2 km away' },
        ],
    },
    {
        city: 'Sharjah',
        services: [
            { id: '1', image: require("../../assets/vehicles/toyota_pic2.png"), name: 'A Car Wash & Detailing', distance: '2 km away' },
            { id: '2', image: require("../../assets/vehicles/toyota_pic2.png"), name: 'B Car Wash & Detailing', distance: '1.2 km away' },
            { id: '3', image: require("../../assets/vehicles/toyota_pic2.png"), name: 'Car Wash & Detailing', distance: '1.5 km away' },
        ],
    },
    // {
    //     city: 'Abu Dhabi',
    //     services: [
    //         { id: '5', image: require("../../assets/vehicles/motor.png"), name: 'Toyota Motors', distance: '1.2 km away' },
    //         { id: '6', image: require("../../assets/vehicles/motor.png"), name: 'Toyota Motors', distance: '2 km away' },
    //     ],
    // },
];

const DetailingScreen = () => {

    const navigation: any = useNavigation()

    const renderService = ({ item }: { item: Service }) => (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('BookSlotScreen')}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.distance}>{item.distance}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderCitySection = ({ item }: { item: CitySection }) => (
        <View style={styles.section}>
            <View style={styles.header}>
                <Text style={styles.city}>{item.city}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("TotalDetailingListsScreen")}>
                    <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={item.services}
                horizontal
                keyExtractor={(service) => service.id}
                renderItem={renderService}
                showsHorizontalScrollIndicator={false}
            // contentContainerStyle={styles.horizontalList}
            />
            {/* <ShowRoomLists txt="Abu Dubai" viewTxt="View All" /> */}

        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {/* Text on the Left */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} />
                </TouchableOpacity>
                <Text style={styles.text}>Car Wash & Detailing</Text>

                {/* Icons on the Right */}
                <View style={styles.iconContainer}>
                    {/* Search Icon */}
                    <TouchableOpacity style={styles.iconButton} onPress={() => Alert.alert("Search pressed")}>
                        {/* <Ionicons name="search-outline" size={24} color="#000" /> */}
                        <Ionicons name="search" size={24} color="#000" />
                    </TouchableOpacity>

                    {/* Filter Icon */}
                    <TouchableOpacity style={styles.iconButton} onPress={() => Alert.alert("Filter pressed")}>
                        {/* <Ionicons name="filter-outline" size={24} color="#000" /> */}
                        <Ionicons name="filter" size={24} color="#000" style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.city}
                    renderItem={renderCitySection}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.verticalList}
                />
            </View>
            <View style={{ marginLeft: -15, marginTop: -15 }}>
                <ShowRoomLists txt="Abu Dubai" viewTxt="View All" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 16
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Space between text and icons

    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    iconContainer: {
        flexDirection: "row", // Arrange icons horizontally
    },
    iconButton: {
        marginLeft: 16, // Space between icons
    },
    verticalList: {
        paddingVertical: 16,
    },
    section: {
        flex: 1,
        marginBottom: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    city: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        fontSize: 14,
        color: '#007BFF',
    },
    horizontalList: {
        // paddingLeft: 8,
    },
    card: {
        width: 150,
        marginRight: 16,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    distance: {
        fontSize: 12,
        color: '#888',
    },

});

export default DetailingScreen;
