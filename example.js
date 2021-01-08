import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// const BackgroundColorExample = () => {
export default function BackgroundColorExample() {
  const [backgroundColor, setBackgroundColor] = useState('yellow');

  return (
    <View
      style={{ width: '100%', height: '50%', backgroundColor: backgroundColor }}
    >
      <Text>Background color is {backgroundColor}</Text>
      <Button
        title="Set Background Color"
        onPress={() => {
          // backgroundColor = 'orange';
          // setBackgroundColor('orange');
          setBackgroundColor((prevBackgroundColor) => {
            console.log('prev background color: ', prevBackgroundColor);
            if (prevBackgroundColor === 'orange') {
              return 'yellow';
            } else {
              return 'orange';
            }
          });
          console.log('background color: ', backgroundColor);
        }}
      />
    </View>
  );
}
