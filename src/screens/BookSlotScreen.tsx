// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // For vector icons
// const CarWashScreen = () => {
//     const [selectedVehicle, setSelectedVehicle] = useState(null);
//     const [selectedWash, setSelectedWash] = useState(null);

//     const vehicles = [
//         { id: 1, name: 'Lamborghini Aventador', plate: 'AE 123456' },
//         { id: 2, name: 'Nissan Patrol', plate: 'PLATE 12345' },
//     ];

//     const washes = [
//         { id: 1, name: 'Classic Clean', price: 150, time: '35-50 minutes' },
//         { id: 2, name: 'Classic Clean + Interior', price: 250, time: '60-70 minutes' },
//     ];

//     const handleVehicleSelect = (vehicle: any) => {
//         setSelectedVehicle(vehicle);
//     };

/**
 * Set the selected wash in the state.
 * @param {Object} wash The selected wash.
 */
//     const handleWashSelect = (wash: any) => {
//         setSelectedWash(wash);
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.headerText}>Perfect Spot Auto Spa</Text>
//                 <Ionicons name="ios-location" size={24} color="#007bff" style={styles.locationIcon} />
//             </View>

//             <View style={styles.vehicleSection}>
//                 <Text style={styles.vehicleTitle}>Please choose your vehicle</Text>
//                 {vehicles.map((vehicle) => (
//                     <TouchableOpacity
//                         key={vehicle.id}
//                         onPress={() => handleVehicleSelect(vehicle)}
//                         style={{ marginBottom: 5 }}
//                     >
//                         <View style={styles.vehicleItem}>
//                             <View
//                                 style={{
//                                     width: 20,
//                                     height: 20,
//                                     borderRadius: 10,
//                                     backgroundColor: selectedVehicle === vehicle ? '#007bff' : 'transparent',
//                                     borderWidth: 1,
//                                     borderColor: '#007bff',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 {selectedVehicle === vehicle && <Ionicons name="ios-checkmark" size={16} color="#fff" />}
//                             </View>
//                             <Text style={styles.vehicleName}>{vehicle.name}</Text>
//                         </View>
//                         <Text style={styles.vehiclePlate}>{vehicle.plate}</Text>
//                     </TouchableOpacity>
//                 ))}
//                 <TouchableOpacity style={styles.addVehicleButton}>
//                     <Text style={styles.addVehicleText}>+ Add new vehicle</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.carWashSection}>
//                 <Text style={styles.carWashTitle}>Select type of Car wash</Text>
//                 {washes.map((wash) => (
//                     <TouchableOpacity
//                         key={wash.id}
//                         onPress={() => handleWashSelect(wash)}
//                         style={styles.carWashItem}
//                     >
//                         <View>
//                             <Text style={styles.carWashName}>{wash.name}</Text>
//                             <Text style={styles.carWashTime}>{wash.time}</Text>
//                         </View>
//                         <Text style={styles.carWashPrice}>AED {wash.price}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>

//             {selectedWash && (
//                 <TouchableOpacity style={styles.confirmWashButton} onPress={() => { }}>
//                     <Text style={styles.confirmWashText}>Confirm Classic Clean</Text>
//                 </TouchableOpacity>
//             )}
//         </View>
//     );
// };

// export default CarWashScreen;




// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     headerText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     locationIcon: {
//         fontSize: 24,
//         color: '#007bff',
//     },
//     vehicleSection: {
//         marginBottom: 20,
//     },
//     vehicleTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     vehicleItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 5,
//     },
//     vehicleName: {
//         fontSize: 14,
//         marginLeft: 10,
//     },
//     vehiclePlate: {
//         fontSize: 12,
//         color: '#888',
//     },
//     addVehicleButton: {
//         backgroundColor: '#007bff',
//         padding: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     addVehicleText: {
//         color: '#fff',
//     },
//     carWashSection: {
//         marginTop: 20,
//     },
//     carWashTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     carWashItem: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 15,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         marginBottom: 10,
//     },
//     carWashName: {
//         fontSize: 14,
//     },
//     carWashPrice: {
//         fontSize: 14,
//         fontWeight: 'bold',
//     },
//     carWashTime: {
//         fontSize: 12,
//         color: '#888',
//     },
//     confirmWashButton: {
//         backgroundColor: '#007bff',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     confirmWashText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });


// ===============================

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // For vector icons
// import { Calendar } from 'react-native-calendars';
// import SuccessModal from '../components/SuccessModal';
// import { useNavigation } from '@react-navigation/native';

// const CarWashScreen = () => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedLocation, setSelectedLocation] = useState(null);
//     const [selectedVehicle, setSelectedVehicle] = useState(null);
//     const [showDatePicker, setShowDatePicker] = useState(false);
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const navigation: any = useNavigation()

// const handleSuccess = () => {
//     setIsModalVisible(true);
// };

//     const locations = [
//         { id: 1, name: 'Perfect Spot Auto Spa', address: 'Deira, Dubai, United Arab Emirates' },
//         { id: 2, name: 'Home Service', address: 'Saved Address: Nasa Bldg. Deira, Dubai, UAE' },
//     ];

//     const vehicles = [
//         { id: 1, name: 'Lamborghini Aventador', plate: 'AE 123456' },
//         { id: 2, name: 'Nissan Patrol', plate: 'PLATE 12345' },
//     ];

//     const handleDateSelect = (date) => {
//         setSelectedDate(date);
//     };

//     const handleLocationSelect = (location) => {
//         setSelectedLocation(location);
//     };

//     const handleVehicleSelect = (vehicle) => {
//         setSelectedVehicle(vehicle);
//     };

//     return (
//         <ScrollView style={styles.container}>
//             {/* <View style={styles.header}>
//                 <Ionicons name="arrow-back" size={24} color="#33363F" style={styles.backIcon} />

//             </View> */}

// <View style={styles.imageContainer}>

//     <Image source={require('../../assets/vehicles/toyota_pic3.png')} style={styles.image} />
//     <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon} >
//         {/* <Ionicons name="arrow-back" size={30} color={'#33363F'} /> */}
//         <Image source={require("../../assets/images/back_arrow.png")} style={{ width: 20, height: 20, }} />
//     </TouchableOpacity>
// </View>

//             <Text style={styles.offerText}>
//                 Special Discounted Offer For Car Wash & Car Wash Premium with Steam At Home.
//             </Text>

//             <View style={styles.dateSection}>
//                 <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} >
//                     <Text style={styles.dateTitle}>Select Date & Time</Text>
//                 </TouchableOpacity>
//                 {showDatePicker && (
//                     <Calendar
//                         onDayPress={handleDateSelect}
//                         markedDates={{ [selectedDate?.dateString]: { selected: true, selectedColor: '#007bff' } }}
//                     />
//                 )}

//                 {selectedDate && !showDatePicker && (
//                     <Text style={styles.selectedDate}>{selectedDate.dateString} - 4:00 PM</Text>
//                 )}
//             </View>

//             <View style={styles.locationSection}>
//                 <Text style={styles.locationTitle}>Please choose preferred location</Text>
//                 {locations.map((location) => (
//                     <TouchableOpacity
//                         key={location.id}
//                         onPress={() => handleLocationSelect(location)}
//                         style={styles.locationItem}
//                     >
//                         <View
//                             style={{
//                                 width: 20,
//                                 height: 20,
//                                 borderRadius: 10,
//                                 backgroundColor: selectedLocation === location ? '#007bff' : 'transparent',
//                                 borderWidth: 1,
//                                 borderColor: '#007bff',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             {selectedLocation === location && (
//                                 <Ionicons name="ios-checkmark" size={16} color="#fff" />
//                             )}
//                         </View>
//                         <Text style={styles.locationName}>{location.name}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>

//             <View style={styles.vehicleSection}>
//                 <Text style={styles.vehicleTitle}>Please choose your vehicle</Text>
//                 {vehicles.map((vehicle) => (
//                     <TouchableOpacity
//                         key={vehicle.id}
//                         onPress={() => handleVehicleSelect(vehicle)}
//                         style={styles.vehicleItem}
//                     >
//                         <View
//                             style={{
//                                 width: 20,
//                                 height: 20,
//                                 borderRadius: 10,
//                                 backgroundColor: selectedVehicle === vehicle ? '#007bff' : 'transparent',
//                                 borderWidth: 1,
//                                 borderColor: '#007bff',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             {selectedVehicle === vehicle && (
//                                 <Ionicons name="ios-checkmark" size={16} color="#fff" />
//                             )}
//                         </View>
//                         <Text style={styles.vehicleName}>{vehicle.name}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <Button title="Show Success Modal" onPress={handleSuccess} />
// <SuccessModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
//         </ScrollView>
//     );
// };

// export default CarWashScreen;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     headerText: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },

//     backIcon: {
//         position: 'absolute',
//         top: 10,
//         left: 10,
//         fontSize: 24,
//         backgroundColor: '#c4c1c0', paddingHorizontal: 8, paddingVertical: 6


//     },
// imageContainer: {
//     height: 200,
//     marginBottom: 20,
// },
//     image: {
//         flex: 1,
//         width: '100%',
//         resizeMode: 'cover',
//         borderRadius: 10,
//     },
//     offerText: {
//         fontSize: 14,
//         marginBottom: 10,
//     },
//     dateSection: {
//         marginBottom: 20,
//     },
//     dateTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     selectedDate: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     locationSection: {
//         marginBottom: 20,
//     },
//     locationTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     locationItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 5,
//     },
//     locationName: {
//         fontSize: 14,
//         marginLeft: 10,
//     },
//     vehicleSection: {
//         marginBottom: 20,
//     },
//     vehicleTitle: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     vehicleItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 5,
//     },
//     vehicleName: {
//         fontSize: 14,
//         marginLeft: 10,
//     },
//     vehiclePlate: {
//         fontSize: 12,
//         color: '#888',
//     },
// });


import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Alert,
    Platform,
    ScrollView,
    Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const BookSlotScreen = () => {
    const navigation: any = useNavigation();
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [mode, setMode] = useState<"date" | "time">("date"); // Control mode
    // const [selectedVehicleList, setSelectedVehicleList] = useState();
    const [selectedWash, setSelectedWash] = useState<string | null>(null);
    const onChange = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            if (mode === "date") {
                // Set the selected date
                setDate((prevDate) => new Date(selectedDate.setHours(prevDate.getHours(), prevDate.getMinutes())));
                setMode("time"); // Switch to time picker
                setShowPicker(true); // Show time picker
            } else {
                // Set the selected time
                setDate((prevDate) => new Date(prevDate.setHours(selectedDate.getHours(), selectedDate.getMinutes())));
                setMode("date");
                setShowPicker(false); // Hide picker
            }
        } else {
            setShowPicker(false); // User canceled the picker
        }
    };

    const showDatePicker = () => {
        setMode("date");
        setShowPicker(true);
    };

    const locations = [
        { id: "1", label: "Perfect Spot Auto Spa" },
        { id: "2", label: "Home Service" },
    ];

    const vehicles = [
        { id: "1", label: "Lamborghini Aventador", plate: "AE 123456" },
        { id: "2", label: "Nissan Patrol", plate: "PLATE 12345" },
    ];

    const validationSchema = Yup.object().shape({
        selectedLocation: Yup.string().required("Please select a location"),
        selectedVehicle: Yup.string().required("Please select a vehicle"),
        date: Yup.date().required("Please select a date and time"),
    });

    const handleSubmit = (values: any) => {
        Alert.alert("Form Submitted", JSON.stringify(values, null, 2));
        navigation.navigate('ConfirmBookingScreen');
    };

    const vehicles_list = [
        { id: 1, name: 'Lamborghini Aventador', plate: 'AE 123456' },
        { id: 2, name: 'Nissan Patrol', plate: 'PLATE 12345' },
    ];

    const washes = [
        { id: 1, name: 'Classic Clean', price: 150, time: '35-50 minutes', features: ['Eco-chic water wash', 'Premium scratch free micro-fibre towels', 'Luxury wax hand wash'] },
        { id: 2, name: 'Classic Clean + Interior', price: 250, time: '60-70 minutes', features: ['Exterior', 'Interior', 'Water'] },
    ];

    // const handleVehicleSelect = (vehicle) => {
    //     setSelectedVehicleList(vehicle);
    // };

    return (
        <ScrollView style={{ flex: 1 }}>
            <Formik
                initialValues={{
                    selectedLocation: "",
                    selectedVehicle: "",
                    date: date.toISOString(),
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    handleSubmit,
                    setFieldValue,
                    values,
                    errors,
                    touched,
                    handleBlur,
                }) => (
                    <View style={styles.container}>
                        {/* <View style={styles.header}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={24} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Car Wash</Text>
                        </View> */}

                        <View style={styles.imageContainer}>

                            <Image source={require('../../assets/vehicles/toyota_pic3.png')} style={styles.image} />
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon} >
                                {/* <Ionicons name="arrow-back" size={30} color={'#33363F'} /> */}
                                <Image source={require("../../assets/images/back_arrow.png")} style={{ width: 20, height: 20, }} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title}>Car Wash</Text>
                        <Text style={styles.subtitle}>
                            Special Discounted Offer For Car Wash & Car Wash Premium with Steam
                            At Home.
                        </Text>

                        {/* Date & Time Picker */}
                        <Text style={styles.sectionTitle}>Select Date & Time</Text>


                        <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
                            <Text style={styles.dateText}>
                                {date.toLocaleDateString()} -{" "}
                                {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </Text>
                        </TouchableOpacity>

                        {showPicker && (
                            <DateTimePicker
                                value={date}
                                mode={mode}
                                display={Platform.OS === "ios" ? "inline" : "default"}
                                onChange={onChange}
                                minimumDate={new Date()}
                            />
                        )}
                        {errors.date && touched.date && (
                            <Text style={styles.errorText}>{errors.date}</Text>
                        )}

                        {/* Preferred Location */}
                        <Text style={styles.sectionTitle}>
                            Please choose preferred location
                        </Text>
                        {locations.map((location) => (
                            <TouchableOpacity
                                key={location.id}
                                style={[
                                    styles.radioButton,
                                    values.selectedLocation === location.label &&
                                    styles.radioSelected,
                                ]}
                                onPress={() => setFieldValue("selectedLocation", location.label)}
                            >
                                <Text style={styles.radioLabel}>{location.label}</Text>
                                <Icon
                                    name={
                                        values.selectedLocation === location.label
                                            ? "radio-button-on"
                                            : "radio-button-off"
                                    }
                                    size={20}
                                    color="#FF6347"
                                />
                            </TouchableOpacity>
                        ))}
                        {errors.selectedLocation && touched.selectedLocation && (
                            <Text style={styles.errorText}>{errors.selectedLocation}</Text>
                        )}

                        {/* Vehicle Selection */}
                        <Text style={styles.sectionTitle}>Please choose your vehicle</Text>
                        {vehicles.map((vehicle) => (
                            <TouchableOpacity
                                key={vehicle.id}
                                style={[
                                    styles.radioButton,
                                    values.selectedVehicle === vehicle.label &&
                                    styles.radioSelected,
                                ]}
                                onPress={() => setFieldValue("selectedVehicle", vehicle.label)}
                            >
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={styles.radioLabel}>
                                        {vehicle.label}  </Text>
                                    <Text style={styles.plateText}>({vehicle.plate})</Text>
                                </View>
                                <Icon
                                    name={
                                        values.selectedVehicle === vehicle.label
                                            ? "radio-button-on"
                                            : "radio-button-off"
                                    }
                                    size={20}
                                    color="#FF6347"
                                />
                            </TouchableOpacity>
                        ))}
                        {errors.selectedVehicle && touched.selectedVehicle && (
                            <Text style={styles.errorText}>{errors.selectedVehicle}</Text>
                        )}

                        {/* <Text style={styles.sectionTitle}>Please choose your vehicle</Text>
                        {vehicles.map((vehicle) => (
                            <TouchableOpacity
                                key={vehicle.id}
                                style={[
                                    styles.radioButton,
                                    values.selectedVehicle === vehicle.label &&
                                    styles.radioSelected,
                                ]}
                                onPress={() => setFieldValue("selectedVehicle", vehicle.label)}
                            >
                                <Text style={styles.radioLabel}>
                                    {vehicle.label}{" "}
                                    <Text style={styles.plateText}>({vehicle.plate})</Text>
                                </Text>
                                <Icon
                                    name={
                                        values.selectedVehicle === vehicle.label
                                            ? "radio-button-on"
                                            : "radio-button-off"
                                    }
                                    size={20}
                                    color="#FF6347"
                                />
                            </TouchableOpacity>
                        ))}
                        {errors.selectedVehicle && touched.selectedVehicle && (
                            <Text style={styles.errorText}>{errors.selectedVehicle}</Text>
                        )} */}

                        {/* <View style={styles.header1}>
                            <Text style={styles.headerText}>Perfect Spot Auto Spa</Text>
                            <Ionicons name="location" size={24} color="#007bff" style={styles.locationIcon} />
                        </View> */}

                        <View style={styles.vehicleSection}>
                            {/* <Text style={styles.vehicleTitle}>Please choose your vehicle</Text>
                            {vehicles_list.map((vehicle) => (
                                <TouchableOpacity
                                    key={vehicle.id}
                                    onPress={() => handleVehicleSelect(vehicle)}
                                    style={[styles.vehicleItem, selectedVehicleList === vehicle && styles.selectedVehicle]}
                                >
                                    <View>
                                        <Text style={styles.vehicleName}>{vehicle.name}</Text>
                                        <Text style={styles.vehiclePlate}>{vehicle.plate}</Text>
                                    </View>
                                    {selectedVehicleList === vehicle && <Ionicons name="ios-radio-button-on" size={20} color="#fff" />}
                                </TouchableOpacity>
                            ))} */}
                            <TouchableOpacity style={styles.addVehicleButton}>
                                <Text style={styles.addVehicleText}>+ Add new vehicle</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.carWashSection}>
                            <Text style={styles.carWashTitle}>Select type of Car wash</Text>
                            {washes.map((wash) => (
                                <TouchableOpacity
                                    key={wash.id}
                                    style={[
                                        styles.carWashItem,
                                        selectedWash === wash.id && styles.selectedCarWashItem, // Highlight if selected
                                    ]}
                                    onPress={() => setSelectedWash(wash.id)}
                                >
                                    <View>
                                        <Text style={styles.carWashName}>{wash.name}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                                            <Text style={styles.btn1}>Exterior</Text>
                                            <Text style={styles.btn2}>Interior</Text>
                                            <Text style={styles.btn1}>Water</Text>
                                        </View>
                                        {wash.features.map((feature, index) => (
                                            <Text key={index} style={{ fontSize: 12 }}>✓ {feature}</Text>
                                        ))}
                                    </View>
                                    <View>
                                        <Text style={styles.carWashPrice}>AED {wash.price}</Text>
                                        <Text style={styles.carWashTime}>{wash.time}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* <TouchableOpacity style={styles.confirmWashButton}> */}
                        {/* <Text style={styles.confirmWashText}>Confirm Classic Clean</Text> */}
                        {/* </TouchableOpacity> */}
                        <TouchableOpacity onPress={() => handleSubmit()}>
                            <LinearGradient
                                colors={['#FF7E5F', '#FD3A84']}
                                style={styles.confirmWashButton}
                            >
                                <Text style={styles.confirmWashText}>Confirm Classic Clean</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        marginTop: -4,
        fontSize: 18,
        fontWeight: "bold",

    },
    subtitle: {
        fontSize: 14,
        color: "#555",
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
    },
    datePicker: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    dateText: {
        fontSize: 16,
        color: "#333",
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginBottom: 10,
    },
    radioLabel: {
        fontSize: 16,
        color: "#333",
    },
    plateText: {
        fontSize: 14,
        color: "#999",
    },
    backIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 24,
        backgroundColor: '#c4c1c0', paddingHorizontal: 8, paddingVertical: 6


    },
    imageContainer: {
        height: 200,
        marginBottom: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    radioSelected: {
        borderColor: "#FF6347",
        backgroundColor: "#FFF5F0",
    },
    submitButton: {
        backgroundColor: "#FF6347",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    submitText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: -6,
        marginBottom: 10,
        fontWeight: '700'

    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    locationIcon: {
        fontSize: 24,
        color: '#007bff',
    },
    vehicleSection: {
        marginBottom: 20,
    },
    vehicleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    vehicleItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    vehicleName: {
        fontSize: 14,
        // marginLeft: 10,
    },
    vehiclePlate: {
        fontSize: 12,
        color: '#888',
    },
    selectedVehicle: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
    },
    addVehicleButton: {
        borderColor: "#FF6347",
        backgroundColor: "#ffece6",
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    addVehicleText: {
        color: '#FF6347',
        fontWeight: '800',
        fontSize: 14
    },
    carWashSection: {
        marginTop: 20,
    },
    carWashTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    carWashItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    selectedCarWashItem: {
        borderColor: "#FF6347", // Highlighted border color
        backgroundColor: "#ffece6", // Optional: Change background color
    },
    carWashName: {
        fontSize: 14,
    },
    carWashPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    carWashTime: {
        fontSize: 12,
        color: '#888',
    },
    btn1: { color: '#fff', backgroundColor: 'green', padding: 4, fontSize: 10, fontWeight: '700', borderRadius: 4, marginRight: 8 },
    btn2: { color: 'red', borderColor: 'red', borderWidth: 1, paddingHorizontal: 4, paddingVertical: 2, fontSize: 10, fontWeight: '700', borderRadius: 4, marginRight: 8 },

    confirmWashButton: {
        marginTop: 10,
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

export default BookSlotScreen;
