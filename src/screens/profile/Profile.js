import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MyTheme from '../../constants/Theme';
import {ProfileHeader} from '../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ProfileDetail} from '../../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import * as Profiles from '../../store/actions/Profile';
const Profile = (props) => {
  const {navigation} = props;
  let [isImagePicker, setImagePicker] = useState(false);
  let [imagepath, setImagepath] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const Profile = useSelector((state) => state.Profile.Profile);
  const dispatch = useDispatch();
  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(Profiles.Profile());
      console.log('kapil', Profile);
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useEffect(() => {
    console.log('kapil', Profile);
    setIsLoading(true);
    loadProducts().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProducts]);
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <ProfileHeader title="Profile" {...props} />
      <ScrollView style={{flex: 1, paddingTop: 20}}>
        <View style={styles.topProfileSection}>
          <View style={styles.profileOuter}>
            {/* <View style={styles.profileImage}>
              {imagepath ? (
                <Image
                  source={{uri: imagepath}}
                  resizeMode={'cover'}
                  style={styles.image}
                />
              ) : (
                <Image
                  source={require('../../assests/images/dummy.png')}
                  resizeMode={'cover'}
                  style={styles.image}
                />
              )}
            </View> */}
            <View style={styles.editIconWrapper}>
              <TouchableOpacity>
                <View style={styles.editIcon}>
                  <Icon
                    name="md-create"
                    size={16}
                    color={MyTheme.colors.white}
                  />
                </View>
              </TouchableOpacity>
            </View>
            {/* <ImageSelector
              modalVisible={isImagePicker}
              title="Choose Picture"
              modalHide={setImagePicker}
              setImage={setImagepath}
              crop={true}
              circle={true}
            /> */}
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.bottomPart}>
            <View style={[styles.row, styles.btnOuter]}>
              <TouchableOpacity style={styles.btnTextOuter}>
                <Text style={styles.btnInfo}>Information</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnTextOuter}
                onPress={() => navigation.navigate('myCars')}>
                <Text style={styles.btnCar}>My Cars</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.personalDetails}>
              <ProfileDetail heading="Full Name" value={Profile.name} />
              <ProfileDetail heading="Mobile Number" value={Profile.phone} />
              <ProfileDetail heading="Email Address" value={Profile.email} />
              <ProfileDetail heading="Address" value={Profile.address} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  topProfileSection: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  profileOuter: {
    alignItems: 'center',
  },
  profileImage: {
    height: 100,
    width: 100,
    overflow: 'hidden',
    marginBottom: 0,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  editIconWrapper: {
    position: 'absolute',
    bottom: 40,
    right: -15,
  },
  editIcon: {
    height: 25,
    width: 25,
    padding: 5,
    backgroundColor: MyTheme.colors.primaryDark,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  bottomPart: {
    width: wp('80%'),
  },
  btnOuter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  btnTextOuter: {
    width: '45%',
  },
  btnCar: {
    padding: 10,
    textAlign: 'center',
    borderRadius: 30,
    backgroundColor: '#4d4d4d',
    elevation: 5,
    shadowColor: '#000',
    color: '#c5c5c5',
    fontFamily: 'Poiret',
  },
  btnInfo: {
    backgroundColor: MyTheme.colors.primary,
    textAlign: 'center',
    padding: 10,
    borderRadius: 30,
    color: MyTheme.colors.white,
    elevation: 5,
    shadowColor: '#000',
    fontFamily: 'Poiret',
  },
  personalDetails: {
    padding: 15,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Profile;
