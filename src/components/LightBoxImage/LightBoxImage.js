/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const LightboxImage = (props) => {
  const {data} = props;
  console.log("data =>" ,data);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.navigation.navigate('fullimage', {
          image: data ? data.imagePath : null,
        })
      }>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={
          data
            ? {uri: data.imagePath}
            : require('../../assests/images/no-image.png')
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
  },
  image: {
    height: 80,
    width: width * 0.4,
    borderRadius: 10,
  },
});
export default LightboxImage;
