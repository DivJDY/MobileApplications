import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For vector icons
import LinearGradient from 'react-native-linear-gradient'; // For gradient buttons
import { useNavigation } from '@react-navigation/native';

const VehicleDetailingScreen = () => {
    const navigation: any = useNavigation();
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.locationText}>Dubai</Text>
                <Ionicons name="search" size={24} color="#000" />
                <Ionicons name="filter" size={24} color="#000" style={styles.iconSpacing} />
                <Ionicons name="heart-outline" size={24} color="#000" />
            </View>

            {/* Results Text */}
            <Text style={styles.resultsText}>Showing 200 results in Dubai</Text>

            {/* Premium Card */}
            <View style={styles.card}>
                <Image
                    source={require("../../assets/vehicles/toyota_pic1.png")}
                    style={styles.cardImage}
                />
                <LinearGradient
                    colors={['#FF7E5F', '#FD3A84']}
                    // style={styles.callButtonGradient}
                    style={styles.premiumTag}
                >
                    <Text style={styles.tagText}>Premium</Text>
                </LinearGradient>
                <Text style={styles.priceText}>AED 150</Text>
                <Text style={styles.title}>Car Detailing</Text>
                <Text style={styles.description}>
                    Special Discounted Offer For Ceramic Coating At & Interior Detailing With Steam At Home.
                </Text>
                <Text style={styles.location}>
                    Location: Deira, Dubai, United Arab Emirates
                </Text>
                <Text style={styles.postDetails}>
                    Posted on: 14/3/24 | Posted By: A Car Wash & Detailing
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.chatButton}>
                        <Text style={styles.chatButtonText}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                        <LinearGradient
                            colors={['#FF7E5F', '#FD3A84']}
                            style={styles.callButtonGradient}
                        >
                            <Text style={styles.callButtonText}>Call</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Featured Card */}
            <View style={styles.card}>
                <Image
                    source={require("../../assets/vehicles/toyota_pic3.png")}
                    style={styles.cardImage}
                />
                <View style={styles.featuredTag}>
                    <Text style={styles.tagText}>Featured</Text>
                </View>
            </View>

            {/* Footer Navigation */}
            {/* <View style={styles.footer}>
                <Ionicons name="home" size={28} color="#FF7E5F" />
                <Ionicons name="time-outline" size={28} color="#000" />
                <TouchableOpacity>
                    <Ionicons name="add-circle" size={48} color="#FF7E5F" />
                </TouchableOpacity>
                <Ionicons name="chatbubble-ellipses-outline" size={28} color="#000" />
                <Ionicons name="person-outline" size={28} color="#000" />
            </View> */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: 8 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    locationText: { flex: 1, textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
    iconSpacing: { marginHorizontal: 10 },
    resultsText: { margin: 10, fontSize: 16, fontWeight: 'bold' },
    card: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        padding: 10,
    },
    cardImage: { width: '100%', height: 200, borderRadius: 10 },
    premiumTag: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: '#f56942',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
    },
    featuredTag: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: '#3B82F6',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
    },
    tagText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
    priceText: { fontSize: 24, fontWeight: 'bold', color: '#FF7E5F', marginTop: 10 },
    title: { fontSize: 18, fontWeight: 'bold', marginVertical: 5 },
    description: { fontSize: 14, color: '#555' },
    location: { fontSize: 14, color: '#777', marginVertical: 5 },
    postDetails: { fontSize: 12, color: '#AAA' },
    buttonContainer: { flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' },
    chatButton: {
        // flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
        marginRight: 5,
        alignItems: 'center',
        borderColor: '#F04438',
        borderWidth: 1,
        width: 170
    },
    chatButtonText: { color: '#000', fontWeight: 'bold' },
    callButton: { width: 170, },
    callButtonGradient: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    callButtonText: { color: '#fff', fontWeight: 'bold' },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
});

export default VehicleDetailingScreen;
