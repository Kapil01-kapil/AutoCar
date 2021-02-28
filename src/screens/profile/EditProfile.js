import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { ImageSelector, InputWithImage } from "../../components/Form";
import MyTheme from "../../constants/Theme";
import { SimpleInput, BasicDropDown } from "../../components/Form";
import Icon from "react-native-vector-icons/Ionicons";
import { SimpleHeader } from "../../components/Header";

const EditProfile = (props) => {
  const { navigation } = props;
  let [name, setName] = useState(null);
  let [email, setEmail] = useState(null);
  let [phone, setPhone] = useState(null);
  let [address, setAddress] = useState(null);
  let [city, setCity] = useState(null);
  let [age, setAge] = useState(null);
  let [gender, setGender] = useState(null);
  let [isImagePicker, setImagePicker] = useState(false);
  let [imagepath, setImagepath] = useState(false);

  let imageUrl = imagepath && imagepath.slice(-20);

  const genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: MyTheme.colors.primaryDark }}>
      <SimpleHeader title="Update Profile" {...props} />
      <KeyboardAwareScrollView
        style={{
          flex: 1,
          padding: 10,
          paddingVertical: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ paddingBottom: 15 }}>
          <SimpleInput
            placeholder={"Name"}
            onChangeText={setName}
            placeholderColor={"#ffffff80"}
            inputStyle={{ color: MyTheme.colors.white }}
          />
          <SimpleInput
            placeholder={"Age"}
            placeholderColor={"#ffffff80"}
            inputStyle={{ color: MyTheme.colors.white }}
            onChangeText={setAge}
            maxlength={3}
            numeric="numeric"
          />
          <BasicDropDown
            name={"Gender"}
            items={genderOption}
            onSelect={setGender}
            value={gender}
          />
          <SimpleInput
            placeholder={"Phone"}
            placeholderColor={"#ffffff80"}
            inputStyle={{ color: MyTheme.colors.white }}
            onChangeText={setPhone}
            numeric="numeric"
            maxlength={10}
          />
          <SimpleInput
            placeholder={"Email"}
            placeholderColor={"#ffffff80"}
            inputStyle={{ color: MyTheme.colors.white }}
            onChangeText={setEmail}
          />
          <SimpleInput
            placeholder={"Address"}
            placeholderColor={"#ffffff80"}
            inputStyle={{ color: MyTheme.colors.white }}
            onChangeText={setAddress}
          />
          <SimpleInput
            placeholder={"City"}
            placeholderColor={"#ffffff80"}
            inputStyle={{ color: MyTheme.colors.white }}
            onChangeText={setCity}
          />
          <TouchableOpacity onPress={() => setImagePicker(true)}>
            <InputWithImage
              placeholder={"Select Proof"}
              placeholderColor={"#ffffff80"}
              inputStyle={{ color: MyTheme.colors.white }}
              value={imageUrl && imageUrl}
              editable={false}
              imagePath={require("../../assests/images/no-image.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>

        <ImageSelector
          modalVisible={isImagePicker}
          title="Choose Picture"
          modalHide={setImagePicker}
          setImage={setImagepath}
          circle={false}
          crop={true}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carOuter: {
    borderRadius: 5,
    padding: 15,
    backgroundColor: MyTheme.colors.backgroundWhite,
    marginBottom: 20,
  },
  text: {
    color: "#444141",
    fontSize: 17,
    marginBottom: 8,
  },
  radioBtn: {
    justifyContent: "center",
  },
  submitBtn: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: MyTheme.colors.white,
    padding: 20,
  },
  submit: {
    backgroundColor: MyTheme.colors.yellow,
    padding: 10,
    color: MyTheme.colors.primaryDark,
    textAlign: "center",
    marginTop: 25,
    fontFamily: "MontserratBold",
  },
});

export default EditProfile;
