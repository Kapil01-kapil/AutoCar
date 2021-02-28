//==>>>> Porps Required <<<=== //

// title (name) :> set modal title e.g choose image
// modalVisible (boolean) :> check modal is true or false
// modalHide (function) :> set false for modal hide or true e.g modalHide(false)
// crop (boolean) :> for enable or disable crop
// setImage (obj) :> for sending the data/path of image,

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MyTheme from '../../constants/Theme';
const ImageSelector = (props) => {
  //console.log("imageSelector props", this.props);
  const [isImage, setImages] = useState(initialState);
  //Camera image picker
  // const openCamera = () => {
  //   let crop = props.crop;
  //   let circle = props.circle;

  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: crop,
  //     useFrontCamera: true,
  //     cropperCircleOverlay: circle,
  //   }).then((image) => {
  //     //console.log('Camera Image ===>', image);
  //     props.setImage(image.path);
  //     props.modalHide(false);
  //   });
  // };

  // // function isitem_image() {
  // //   let options = {
  // //     title: 'You can choose one image',
  // //     maxWidth: 256,
  // //     maxHeight: 256,
  // //     noData: true,
  // //     mediaType: 'photo',
  // //     storageOptions: {
  // //       skipBackup: false,
  // //     },
  // //   };
  // //   ImagePicker.launchImageLibrary(options, (response) => {
  // //     debugger;
  // //     if (response.uri) {
  // //       setitem_image(response);
  // //       //  setitem_image(response.uri);
  // //       console.log(response.uri);
  // //     }
  // //   });
  // // }
  // //Gallery Image Picker
  // const openGallery = () => {
  //   let crop = props.crop;
  //   let circle = props.circle;
  //   ImagePicker.openPicker({
  //     cropping: crop,
  //     cropperCircleOverlay: circle,
  //   }).then((image) => {
  //     //console.log('Gallery Images ===>', image);
  //     props.setImage(image.path);
  //     props.modalHide(false);
  //   });
  // };
  return (
    <Modal isVisible={props.modalVisible} style={styles.modalConatiner}>
      <View style={styles.modalBody}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
          }}>
          {props.title}
        </Text>
        <View style={styles.buttonWrapper}>
          {/* <View style={styles.btn}>
            <TouchableOpacity onPress={openGallery} title="Gallary">
              <Icon
                name="md-images"
                size={45}
                color={MyTheme.colors.primary}
                style={{marginBottom: 4}}
              />
              <Text style={{textAlign: 'center', fontSize: 16}}>Gallery</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.btn}>
            <TouchableOpacity onPress={openCamera} title="Camera">
              <Icon
                name="ios-camera"
                size={45}
                color={MyTheme.colors.primary}
                style={{marginLeft: 5, marginBottom: 4}}
              />
              <Text style={{textAlign: 'center', fontSize: 16}}>Camera</Text>
            </TouchableOpacity>
          </View> */}
        </View>
        <TouchableOpacity
          // onPress={() => props.modalHide(false)}
          style={styles.cancelBtn}
          title="Cancel">
          {/* <Icon name="md-close-circle" /> */}
          <Text style={{textAlign: 'center', fontSize: 16}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  modalConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 0,
    margin: 0,
  },
  modalBody: {
    backgroundColor: 'white',
    paddingTop: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    textAlign: 'center',
    width: '100%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignContent: 'stretch',
    width: Dimensions.get('window').width,
  },
  btn: {
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  cancelBtn: {
    backgroundColor: '#f7f7f7',
    padding: 12,
    justifyContent: 'center',
  },
});
