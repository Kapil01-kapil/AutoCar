import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import MyTheme from '../../constants/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ThanksModal = (props) => {
  const {heading, text, onPress, modal, setModal} = props;
  return (
    <Modal isVisible={true} transparent>
      <View
        style={styles.loaderOuter}>
        <View style={styles.starOuter}>
          <Image
            source={require('../../assests/images/star.png')}
            style={styles.starImage}
          />
          <Text style={styles.text}>{heading ? heading : 'Thank you!'}</Text>

          <Text style={styles.starText}>
            {text ? text : "for placing the enquiry quotes will be sent shortly. Sit back & relax we'll notify you!"}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loaderOuter: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontFamily: 'Poiret',
    marginHorizontal: 15,
  },
  starText: {
    color: '#000',
    fontSize: 14,
    letterSpacing: 0.9,
    textAlign: 'center',
    marginTop: 5,
    flexWrap: 'wrap',
    width: wp('60%'),
    lineHeight: 22,
    fontFamily: 'Muli-SemiBold',
  },
  starImage: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  starOuter: {
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: wp('60%'),
    padding: 20,
  },
});
export default ThanksModal;
