import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

const ActivityLoader = ({visible = false, imageComponent}) => {
  if (!visible) return null;
  return (
    <Modal
      visible={true}
      transparent={true}
      statusBarTranslucent
      style={{flex: 1}}>
      <View style={styles.containerStyle}>
        <View style={styles.indicatorViewStyle}>
          {imageComponent || <ActivityIndicator size={'large'} />}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  indicatorViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 30,
    width: 30,
  },
});

export default ActivityLoader;
