import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SuccessModal from '../components/SuccessModal';
import { useNavigation } from '@react-navigation/native';
const ConfirmBookingScreen = () => {
    const navigation: any = useNavigation()
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleSuccess = () => {
        setIsModalVisible(true);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.headerText}>Pay & Confirm</Text>
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Location Details</Text>
                <View style={styles.locationContainer}>
                    <Ionicons name="location" size={20} color="#000" style={styles.locationIcon} />
                    <Text style={styles.locationText}>The Iridium Building, Al Barsha, Dubai, UAE</Text>
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Services added</Text>
                <View style={styles.serviceContainer}>
                    <Image source={require('../../assets/vehicles/toyota_pic3.png')} style={styles.serviceImage} />
                    <View>
                        <Text style={styles.serviceName}>Car Wash</Text>
                        <Text style={styles.serviceName}>Classic Clean AED 150</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Vehicle Details</Text>
                <View style={styles.vehicleContainer}>
                    <Text style={styles.vehicleText}>Lamborghini Aventador</Text>
                    <Text style={styles.vehicleText}>AE 123456</Text>
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Time and Date</Text>
                <View style={styles.timeAndDateContainer}>
                    <Text style={styles.timeAndDateText}>3 March 2024 - 4:00 PM</Text>
                </View>
            </View>

            <View style={styles.paymentSummaryContainer}>
                <Text style={styles.sectionTitle}>Payment Summary</Text>
                <View style={styles.paymentSummaryItem}>
                    <Text style={styles.paymentSummaryLabel}>Car Recovery</Text>
                    <Text style={styles.paymentSummaryValue}>150 AED</Text>
                </View>
                <View style={styles.paymentSummaryItem}>
                    <Text style={styles.paymentSummaryLabel}>Vat (12%)</Text>
                    <Text style={styles.paymentSummaryValue}>18 AED</Text>
                </View>
                <View style={styles.paymentSummaryItem}>
                    <Text style={styles.paymentSummaryLabel}>Delivery charges</Text>
                    <Text style={styles.paymentSummaryValue}>0 AED</Text>
                </View>
                <View style={styles.totalPayable}>
                    <Text style={styles.paymentSummaryLabel}>Total payable amount:</Text>
                    <Text style={styles.paymentSummaryValue}>168 AED</Text>
                </View>
            </View>



            <TouchableOpacity onPress={handleSuccess}>
                <LinearGradient
                    colors={['#FF7E5F', '#FD3A84']}
                    style={styles.confirmWashButton}
                >
                    <Text style={styles.confirmWashText}>Confirm</Text>
                </LinearGradient>
            </TouchableOpacity>

            <SuccessModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />

        </View>
    );
};

export default ConfirmBookingScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '800',
        textAlign: 'center',
        marginLeft: 55
    },
    backIcon: {
        fontSize: 25,
        marginRight: 10,
        marginLeft: 4
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    locationIcon: {
        fontSize: 25,
        marginRight: 10,
    },
    locationText: {
        fontSize: 14,
    },
    serviceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    serviceImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    serviceName: {
        fontSize: 14,
    },
    vehicleContainer: {
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    vehicleText: {
        fontSize: 14,
    },
    timeAndDateContainer: {
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    timeAndDateText: {
        fontSize: 14,
    },
    paymentSummaryContainer: {
        marginTop: 20,
    },
    paymentSummaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    paymentSummaryLabel: {
        fontSize: 14,
    },
    paymentSummaryValue: {
        fontSize: 14,
    },
    totalPayable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    confirmWashButton: {
        marginTop: 20,
        backgroundColor: '#f56942',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
    },
    confirmWashText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
});