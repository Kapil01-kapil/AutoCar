/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import {BorderDateTime, BottomBorderInput} from '../../components/Form';
import {FormButton} from '../../components/Button';
import MyTheme from '../../constants/Theme';
import {useSelector, useDispatch} from 'react-redux';
import * as Add_card from '../../store/actions/BestQuotes';
import Toast from 'react-native-simple-toast';
const AddCard = (props) => {
  const {navigation} = props;
  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [date, setDate] = useState('Expiry Date (MM/YY)');
  const [cvv, setCvv] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Toast.show(' AddCard  faile');
      console.log(error);
    }
  }, [error]);
  const authHandler = async () => {
    let action;
    action = Add_card.Add_card(name, cvv, card);
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      Toast.show('successfully Add Card');
      console.log('gf');
      props.navigation.navigate('myCards');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#48494E'}}>
      <SimpleHeader title="Add Card" {...props} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.formOuter}>
          <BottomBorderInput
            placeholder="Name on Card"
            onChangeText={setName}
          />
          <BottomBorderInput
            placeholder="Card Number"
            onChangeText={setCard}
            numeric={'numeric'}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <BorderDateTime
              mode="date"
              onSelect={setDate}
              selectedTime={date}
              name="Date"
              iconName="calendar-month-outline"
              cStyle={{
                width: '60%',
              }}
            />
            <BottomBorderInput
              placeholder="CVV"
              onChangeText={setCvv}
              numeric={'numeric'}
              cStyle={{width: '30%'}}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <FormButton
              cStyle={{marginTop: 30, width: 120}}
              title="Save"
              onPress={authHandler}
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
    paddingHorizontal: 15,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default AddCard;
