import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SimpleHeader} from '../../components/Header';
import {
  SimpleInput,
  BasicDropDown,
  InputWithImage,
  DateTimePicker,
} from '../../components/Form';
import {FormButton} from '../../components/Button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {api_url} from '../../api/Api';
import axios from 'axios';
import {ThanksModal} from '../../components/Modal';
import {useSelector, useDispatch} from 'react-redux';
import * as BestQuote from '../../store/actions/BestQuotes';
import Toast from 'react-native-simple-toast';
var serrviceslist = [];
const PlaceEnquiry = (props) => {
  const [carMake, setCarMake] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [service, setService] = useState(serrviceslist);
  const [comment, setComment] = useState(null);
  const [time, setTime] = useState('Time');
  const [date, setDate] = useState('date');
  const [city, setCity] = useState(null);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const Token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      Toast.show(' Place Enquiry faile');
      console.log(error);
    }
  }, [error]);
  const onQuerySubmit = async () => {
    let action;

    if (carMake == '') {
      Toast.show('carMake is empty', Toast.LONG);
    } else if (carModel == '') {
      Toast.show('carMake is empty', Toast.LONG);
    } else if (comment == '') {
      Toast.show('comment is empty', Toast.LONG);
    } else {
      action = BestQuote.Place_a_Inquiry_Screen(
        carMake,
        carModel,
        date,
        comment,
      );

      setError(null);
      setIsLoading(true);
      try {
        await dispatch(action);
        handleSubmit();
        console.log('gf');
        Toast.show('successfully Place Enquiry');
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = () => {
    setModal(!modal);
    setTimeout(() => props.navigation.navigate('bestQuotes'), 3000);
    setTimeout(() => setModal(false), 3000);
  };

  useEffect(() => {
    console.log('Token', Token);
    getServices();
  }, []);
  const getServices = () => {
    let config = {
      headers: {Authorization: `Bearer ${Token}`},
    };
    axios
      .get(`${api_url}customer/services?limit=3`, config)
      .then((response) => {
        serrviceslist = [];
        const dataValue = response.data.data;
        console.log(response.data.data);

        setService(serrviceslist);
        dataValue.forEach((item, index) => {
          serrviceslist.push({
            label: item.name,
            value: item.id,
          });
        });
        console.log('serrviceslist', serrviceslist);
      })

      .catch((err) => true);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#48494E',
      }}>
      <ScrollView style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.formOuter}>
            <SimpleInput placeholder="Car Make" onChangeText={setCarMake} />
            <SimpleInput placeholder="Car Model" onChangeText={setCarModel} />
            <BasicDropDown
              name={'Select Services'}
              items={serrviceslist}
              onSelect={setService}
              value={service}
            />
            <SimpleInput
              placeholder="Comments"
              onChangeText={setComment}
              multiline={true}
              numberOfLines={5}
              inputStyle={{textAlignVertical: 'top'}}
              cStyle={{borderRadius: 10}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <DateTimePicker
                mode="date"
                onSelect={setDate}
                selectedTime={date}
                name="Date"
                iconName="calendar-month-outline"
                cStyle={{borderRadius: 10, width: '48%'}}
              />

              <DateTimePicker
                mode="time"
                onSelect={setTime}
                selectedTime={time}
                name="Time"
                iconName="clock-outline"
                cStyle={{borderRadius: 10, width: '48%'}}
              />
            </View>
            <SimpleInput placeholder="City" onChangeText={setCity} />
            <FormButton
              title="Find Quotes"
              onPress={onQuerySubmit}
              cStyle={{width: 120}}
            />
          </View>
        </View>
      </ScrollView>
      {modal && <ThanksModal modal={modal} setModal={setModal} />}
    </View>
  );
};

const styles = StyleSheet.create({
  formOuter: {
    marginTop: hp('8%'),
    width: wp('80%'),
    alignItems: 'center',
    paddingBottom: 50,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default PlaceEnquiry;
