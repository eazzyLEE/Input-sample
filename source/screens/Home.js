import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Smartlook from 'smartlook-react-native-wrapper';
import ActivityLoader from '../components/ActivityLoader';
import {Input} from '../components/Input';
import {styles} from './styles';

const SMARTLOOK_API_KEY = '9cad76fdc634d9393052da14addd25ddfdca8614';

const Home = () => {
  const [value, setValue] = useState('');
  const [secured, setSecure] = useState(false);

  useEffect(() => {
    Smartlook.setUserIdentifier('Input test');
    Smartlook.setupAndStartRecording(SMARTLOOK_API_KEY);

    return () => Smartlook.stopRecording();
  }, []);

  const changeInput = value => setValue(value);
  const handleSecureText = () => setSecure(!secured);

  return (
    <View style={styles.background}>
      <ActivityLoader visible={true} />
      <Input
        containerStyle={styles.input}
        label="Sample Input"
        value={value}
        onChangeText={changeInput}
        placeholder="Type here..."
        secureText={secured}
        handleSecureText={handleSecureText}
      />
    </View>
  );
};

export default Home;
