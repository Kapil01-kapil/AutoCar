import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyTheme from '../../constants/Theme';

const Home = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#48494E' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../../assests/images/logo.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
        <Text style={styles.subText}>Complete car care solutions !!</Text>

        <TouchableOpacity
          style={styles.textOuter}
          onPress={() => navigation.navigate('tab', { screen: 'enquiry' })}>
          <Text style={styles.linkText}>Place a Enquiry</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textOuter}
          onPress={() =>
            navigation.navigate('tab', {
              screen: 'enquiry',
              params: {
                screen: 'bestQuotes',
              },
            })
          }>
          <Text style={styles.linkText}>Best Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textOuter}
          onPress={() => navigation.navigate('tab', { screen: 'myInquries' })}>
          <Text style={styles.linkText}>Inquiry Status</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textOuter}
          onPress={() => navigation.navigate('tab', { screen: 'profile' })}>
          <Text style={styles.linkText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: hp('20%'),
    width: wp('80%'),
    marginTop: hp('10%'),
  },
  subText: {
    color: MyTheme.colors.white,
    paddingTop: hp('5%'),
    fontSize: 20,
    marginBottom: hp('8%'),
    fontFamily: 'Poiret',
  },

  linkText: {
    borderRadius: 30,
    backgroundColor: '#4D4D4D',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: MyTheme.colors.white,
    width: wp('80%'),
    textAlign: 'center',
    elevation: 5,
    shadowColor: MyTheme.colors.black,
    fontFamily: 'Muli-Light',
  },
  textOuter: {
    marginBottom: 20,
  },
});

export default Home;
