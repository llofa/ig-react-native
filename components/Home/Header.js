import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    // Wrap the Application in black
    <View style={styles.container}>
      {/* Logo Container */}
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </TouchableOpacity>
      {/* Icons Container */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/plus-2-math.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/like.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>30</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/fb-messenger.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },

  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
