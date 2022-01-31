import React, { useState, useEffect } from "react";
import {  Modal, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';


const ModalBox = ({ route }) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(true);
  useEffect(() => {
    let timerId = setInterval(() => {
      navigation.navigate("ProgressPage",{imguri:route.params.grayimage})
    }, 1500); return () => clearTimeout(timerId);
  }, []);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your colorized image has been successfully saved.</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default ModalBox;