import React from 'react';
import { View, Image, ImageSourcePropType, Text, Pressable } from 'react-native';
import styles from './styles';
import { Action, ReactJsx } from '../../types';
import { ApplicationText } from '../../constants';
import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';
import Button from '../Button';

type Props = {
  actions: Action[];
  imageSrc: ImageSourcePropType;
  onPress: (actionType: string, imageType: string, options: CameraOptions | ImageLibraryOptions) => void;
};

const ImagePicker = (props: Props): ReactJsx => {
  const { actions, imageSrc, onPress } = props;
  const { emptyImagePlaceholder } = ApplicationText;
  const { actionType, imageType, options } = actions[0];

  const onPhotoPress = (): void => {
    onPress(actionType, imageType, options);
  };

  return (
    <>
      <Pressable style={imageSrc ? styles.imageContainer : styles.emptyImage} onPress={onPhotoPress}>
        {imageSrc ? (
          <Image resizeMode='contain' resizeMethod='scale' style={styles.image} source={{ uri: imageSrc }} />
        ) : (
          <Text style={styles.emptyImageText}>{emptyImagePlaceholder}</Text>
        )}
      </Pressable>
      <View style={styles.buttonsContainer}>
        {actions.map((action) => {
          const { title, actionType, imageType, options } = action;
          return <Button key={title} title={title} onPress={() => onPress(actionType, imageType, options)} />;
        })}
      </View>
    </>
  );
};

export default ImagePicker;
