import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import FlexBox from './Flexbox';
import BackgroundColorExample from './example';
import PropTypes from 'prop-types';

// const Post = (props) => {
//   return (
//     <View>
//       <Text>Title: {props.title}</Text>
//       <Text>The body is {props.body}</Text>
//     </View>
//   );
// };

const Post = ({ title, body, shouldShow }) => {
  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>The body is {body}</Text>
      <Button
        title="Bool value"
        onPress={() => console.log('should show: ', shouldShow)}
      />
    </View>
  );
};

Post.defaultProps = {
  body: "I'm the body",
};

Post.propTypes = {
  body: PropTypes.string,
};

const ChildrenPropExample = ({ children, components }) => {
  return (
    <View style={{ backgroundColor: 'yellow' }}>
      <Text>Children Props Example</Text>
      {children}
      {components}
      <Button
        title="Components"
        onPress={() => console.log('components:', components)}
      />
    </View>
  );
};

const DescendantComponent = ({ text, counter }) => {
  return (
    <View>
      <Text>{text}</Text>
      <Text>The counter value is: {counter}</Text>
    </View>
  );
};

const ChildComponent = ({ text, updateValue, counter }) => {
  return (
    <View>
      <DescendantComponent text={text} counter={counter} />
      <Button title="Set text" onPress={() => updateValue('New text')} />
    </View>
  );
};

const ChildB = ({ setCounter }) => {
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => setCounter((prev) => prev + 1)}
      />
    </View>
  );
};

const AncestorToDescendantExample = () => {
  const [text, setText] = useState('Hello world');
  const [counter, setCounter] = useState(0);

  const updateValue = (newValue) => {
    console.log('new value: ', newValue);
    setText(newValue);
  };
  return (
    <View>
      <ChildComponent text={text} updateValue={updateValue} counter={counter} />
      <ChildB setCounter={setCounter} />
      <Button
        title="Decrement"
        onPress={() => setCounter((prev) => prev - 1)}
      />
    </View>
  );
};

export default function App() {
  // let backgroundColor = 'yellow';

  const [textInput, setTextInput] = useState('');
  const [bio, setBio] = useState({ name: '', age: '' });

  const [title, setTitle] = useState('Lesson 2');

  return (
    // <View style={styles.container}>
    //   {/* <BackgroundColorExample />
    //   <TextInput
    //     placeholder="Enter value"
    //     value={textInput}
    //     onChangeText={(text) => setTextInput(text)}
    //   />
    //   <Button
    //     title="Set Entered Color"
    //     onPress={() => setBackgroundColor(textInput)}
    //   />
    //   <Text>My name is {bio.name}</Text>
    //   <Button
    //     title="Set name"
    //     onPress={() => setBio({ ...bio, name: 'Zeyana' })}
    //   /> */}
    //   <Post title={title} body="Hello world" shouldShow />
    //   <Post title={'Lesson 3'} />
    //   <Button title="Set Title" onPress={() => setTitle('New title')} />

    //   <ChildrenPropExample components={<Text>Text component</Text>}>
    //     <Text>Hi there</Text>
    //   </ChildrenPropExample>

    //   <AncestorToDescendantExample />
    // </View>
    <FlexBox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
