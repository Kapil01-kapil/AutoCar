import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MyTheme from "../../constants/Theme";
const { width, height } = Dimensions.get("window");

const Fullimage = (props) => {
  const { navigation } = props;
  const { image } = props.route.params;

  console.log("Image", image);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#48494E",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}
      >
        <Icon name={"close"} size={30} color={MyTheme.colors.white} />
      </TouchableOpacity>
      <View style={styles.imageOuter}>
        <Image
          source={
            image
              ? { uri: image }
              : require("../../assests/images/no-image.png")
          }
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageOuter: {
    flex: 0.7,
    marginTop: "10%",
  },
  image: {
    width: width,
    flex: 1,
  },
  arrowBack: {
    position: "absolute",
    top: 15,
    left: 15,
    padding: 20,
  },
});
export default Fullimage;
