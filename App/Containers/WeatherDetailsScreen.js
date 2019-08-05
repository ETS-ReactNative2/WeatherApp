import React, { Component } from "react";
import { View, Image } from "react-native";
import { connect } from "react-redux";
import { Images } from "../Themes";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import WeatherDetails from "../Components/WeatherDetails";

// Styles
import styles from "./Styles/WeatherDetailsScreenStyle";

class WeatherDetailsScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.container}>
          <WeatherDetails />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherDetailsScreen);