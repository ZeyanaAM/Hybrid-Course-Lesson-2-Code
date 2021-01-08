import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Box = ({ value, customStyle }) => {
  return (
    <View style={customStyle ? [styles.box, customStyle] : styles.box}>
      <Text style={{ textAlign: 'center' }}>{value}</Text>
    </View>
  );
};

const Boxes = ({ boxType, boxStyle }) => {
  return (
    <View style={[styles.halfScreen, boxStyle, styles.flexStyle]}>
      <Box value={boxType} />
      <Box value={1} customStyle={styles.customBox} />
      <Box value={2} customStyle={styles.customBox2} />
      <Box value={3} />
      <Box value={4} />
    </View>
  );
};

const FlexDirectionExample = () => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Text>Hi</Text>
      <Text>Hello</Text>
      <Text>Hey</Text>
    </View>
  );
};

export default function FlexBox() {
  return (
    <View style={styles.container}>
      <Boxes boxType="row" boxStyle={styles.rowExample} />
      <Boxes boxType="col" boxStyle={styles.colExample} />
      {/* <FlexDirectionExample /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    // minWidth: 50,
    // minHeight: 50,
    width: 200,
    height: 50,
    justifyContent: 'center',

    // flex: 1,
    // flexGrow: 1,
    flexShrink: 1,
    // flexBasis: '10%',
  },

  customBox: {
    // backgroundColor: "yellow",
    // alignSelf: "flex-end",
    flexShrink: 5,
    // flexGrow: 3,
    // flex: 3,
    // flexBasis: 100,
    // width: 100,
  },

  customBox2: {
    // backgroundColor: "yellow",
    // alignSelf: 'flex-end',
    // flex: 5,
    // flexShrink: 3,
    // flexGrow: 5,
  },

  container: {
    flex: 1,
    // width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  halfScreen: {
    flex: 0.45,
    width: '100%',
  },

  rowExample: {
    backgroundColor: 'orange',
    flexDirection: 'row',
  },

  colExample: {
    backgroundColor: '#0273B2',
    flexDirection: 'column',
  },

  flexStyle: {
    // flexWrap: 'wrap',
    alignItems: 'center',
    // alignContent: 'space-around',
    // justifyContent: 'center',
  },
});
