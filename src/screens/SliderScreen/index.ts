import template from './template';
import { useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const SliderScreen = () => {
  const [imageBefore, setImageBefore] = useState(null);
  const [imageAfter, setImageAfter] = useState(null);

  const onButtonPress = (actionType, imageType, options) => {
    const setter = imageType === 'before' ? setImageBefore : setImageAfter;
    const imagePicker = actionType === 'capture' ? launchCamera : launchImageLibrary;
    imagePicker(options).then((res) => {
      setter(res.assets[0].uri);
    });
  };

  return template({ onButtonPress, imageBefore, imageAfter });
};

export default SliderScreen;
