import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';


export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View styles={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What is your focus?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress ={( ) =>addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
   padding: 20,
   marginTop:5,

    flex: 1,
  marginRight: spacing.sm,
  color:'#fff',
  },
  inputContainer: {
    //   flex:0.5,
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
