import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SimpleInput } from "../../components/Form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { SimpleHeader } from "../../components/Header";
import MyTheme from "../../constants/Theme";
import { FormButton } from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/Auth";
import Toast from "react-native-simple-toast";
const ResetPassword = (props) => {
  const [email, setEmaiil] = useState(null);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error) {
      Toast.show(" Please enter a valid email");
      console.log(error);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    action = authActions.resetEmail(email);

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);

      console.log("gf");
      props.navigation.navigate("forgot");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#48494E" }}>
      <SimpleHeader title="Reset Password" {...props} />
      <KeyboardAwareScrollView behavior="padding" style={{ flex: 1 }}>
        <View style={styles.formOuter}>
          <Text style={styles.head}>Enter email id </Text>
          <SimpleInput placeholder={"Email"} onChangeText={setEmaiil} />
          {isLoading && <ActivityIndicator size={"large"} color={"white"} />}
          <FormButton
            title="Submit"
            cStyle={{ width: 120 }}
            CTextStyle={{
              backgroundColor: MyTheme.colors.primary,
              fontSize: 18,
            }}
            onPress={authHandler}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formOuter: {
    paddingTop: "20%",
    width: "100%",
    paddingHorizontal: "10%",
    alignItems: "center",
  },
  head: {
    color: MyTheme.colors.white,
    textAlign: "center",
    fontFamily: "Muli",
    fontSize: 16,
    marginBottom: 15,
  },
});
export default ResetPassword;
