import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const PaymentCard = (props) => {
  const { type, card } = props;
  return (
    <TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={styles.row}>
          <Image
            source={require("../../assests/images/card.png")}
            resizeMode="contain"
            style={styles.icon}
          />
          <View>
            <Text style={styles.type}>{type ? type : "Personal"}</Text>
            <Text style={styles.no}>{card ? card : "123****79789"}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={props.delete}>
          <Image
            style={{ width: 30, height: 30, resizeMode: "stretch" }}
            source={{
              uri:
                "https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 35,
    width: 35,
    marginRight: 15,
  },
  type: {
    fontSize: 10,
    color: "#c5c5c5",
    fontFamily: "Muli",
  },
  no: {
    fontSize: 10,
    color: "#c5c5c5",
    fontFamily: "Muli",
  },
});
export default PaymentCard;
