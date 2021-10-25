import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SmartlookSensitiveComponent} from 'smartlook-react-native-wrapper/lib/commonjs';

const Input = ({
  containerStyle,
  handleSecureText,
  label,
  onChangeText,
  placeholder,
  secureText,
  value,
}) => {
  const buttonTitle = secureText ? 'SHOW' : 'HIDE';

  return (
    <SmartlookSensitiveComponent isSensitive={true}>
      <View style={containerStyle}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.container, styles.inputGrid]}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#B6B6B6"
            secureTextEntry={secureText}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.toggleView}
            onPress={handleSecureText}>
            <Text style={styles.toggleTitle}>{buttonTitle}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SmartlookSensitiveComponent>
  );
};

export {Input};

const styles = StyleSheet.create({
  label: {
    color: '#01020F',
    marginLeft: 25,
  },
  container: {
    marginHorizontal: 25,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#000000',
    height: 52,
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    color: '#000000',
  },
  inputGrid: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleView: {
    position: 'absolute',
    right: 10,
  },
  toggleTitle: {
    color: '#000000',
    fontSize: 13,
  },
});
