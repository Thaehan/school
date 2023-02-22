import {fontFamilies, fontSizes} from '@Themes/Fonts';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

// const {width} = Dimensions.get('window');

export default StyleSheet.create({
  logoutButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    borderRadius: 10,
  },
  logoutText: {
    color: Colors.white,
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.primaryBold,
  },
});
