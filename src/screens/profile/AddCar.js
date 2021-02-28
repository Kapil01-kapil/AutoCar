import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import {BorderInput, BorderDropDown} from '../../components/Form';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import AsyncStorage from '@react-native-community/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import * as BestQuote from '../../store/actions/BestQuotes';
import * as Auth from '../../store/actions/Auth';
import Toast from 'react-native-simple-toast';
const AddCar = (props) => {
  const {navigation} = props;
  const addCars = useSelector((state) => state.BestQuotes.QuoteDetail);
  const userId = useSelector((state) => state.auth.userId);
  const [vin, setVin] = useState(null);
  const [engine, setEngine] = useState(null);
  const [regNo, setRegNo] = useState(null);
  const [model, setModel] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState('');

  const authHandler = async () => {
    let action;
    action = BestQuote.Add_car(regNo, userId.id, vin, engine, model);

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      Toast.show('successfully Add Car');
      console.log('gf');
      props.navigation.navigate('myCars');
      // props.navigation.navigate("Dreawer");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (error) {
      Toast.show(' Please enter a valid add car');
      console.log(error);
    }
  }, [error]);

  const carModal = [
    {
      label: '2019',
      value: '2019',
    },
    {
      label: '2018',
      value: '2018',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title="Car Details" {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.formOuter}>
          <BorderInput title="Add Vin" onChangeText={setVin} />
          <BorderInput
            title="Engine Number"
            onChangeText={setEngine}
            numeric={'numeric'}
          />
          <BorderInput
            title="Registration number"
            onChangeText={setRegNo}
            numeric={'numeric'}
          />
          <BorderDropDown
            title="Select Model"
            items={carModal}
            name={'Select Modal'}
            onSelect={setModel}
            value={model}
          />
          <View style={{alignItems: 'center'}}>
            <FormButton
              onPress={authHandler}
              cStyle={{marginTop: 30, width: 120}}
              title="Save"
              CTextStyle={{backgroundColor: MyTheme.colors.primary}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formOuter: {
    padding: 30,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default AddCar;
