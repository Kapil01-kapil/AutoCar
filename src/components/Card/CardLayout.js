import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MyTheme from "../../constants/Theme";

const CardLayout = (props) => {
  const { name, regNo } = props;
  return (
    <View style={styles.carOuter}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.row}>
          <Text style={styles.head}>Model :</Text>
          <Text style={styles.value}>{name}</Text>
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

      <View style={styles.row}>
        <Text style={styles.head}>Registration no :</Text>
        <Text style={styles.value}>{regNo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carOuter: {
    padding: 15,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "#4D4D4D",
    shadowColor: "#00000020",
    elevation: 2,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  head: {
    color: MyTheme.colors.white,
    fontSize: 15,
    paddingRight: 5,
    fontFamily: "Muli-Light",
  },
  value: {
    color: MyTheme.colors.white,
    fontSize: 13,
    fontFamily: "Muli-Light",
  },
});

export default CardLayout;
