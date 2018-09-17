import {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import React from "react";

export default class Header extends Component {
    render() {
        return (
            <View style={{}}>
                <View style={{backgroundColor: "blue", width: "100%", height: 50}}>
                    <Text style={{fontSize: 20, color: "white", padding: 10}}>Fanyu Wallet</Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({

});