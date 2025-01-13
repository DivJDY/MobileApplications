import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SuccessModal = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../assets/images/success.png')} style={{ width: 180, height: 120, marginRight: 12, marginBottom: 8 }} />
                </View>
                {/* <MaterialCommunityIcons name="check-circle-outline" size={50} style={styles.successIcon} /> */}
                <Text style={styles.successText}>Congratulations!</Text>
                <Text style={styles.successText1}>Your ad is now live</Text>
                {/* <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.buttonText}>See Ad Post</Text>
                </TouchableOpacity> */}
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <LinearGradient
                        colors={['#FF7E5F', '#FD3A84']}
                        style={styles.button}
                    // style={{ backgroundColor: '#f56942', }}
                    >
                        <TouchableOpacity onPress={onClose}>

                            <Text style={styles.buttonText}>See Ad Post</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </View>
        </Modal>
    );
};

export default SuccessModal;


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 32,
    },
    successIcon: {
        fontSize: 50,
        color: 'red',
        marginBottom: 20,
    },
    successText: {
        fontFamily: "Nunito",
        color: '#1E1E1E',
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 10,
    },
    successText1: {
        fontFamily: "Nunito",
        color: '#1E1E1E',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 20
    },
    button: {
        // backgroundColor: 'orange',
        // padding: 15,
        // borderRadius: 5,
        // alignItems: 'center',
        backgroundColor: '#f56942',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});