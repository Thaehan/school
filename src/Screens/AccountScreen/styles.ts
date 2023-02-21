import {fontFamilies, fontSizes} from '@Themes/Fonts';
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  logoutButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: width / 3,
  },
  logoutText: {
    color: Colors.white,
    fontSize: fontSizes.lg,
    fontFamily: fontFamilies.primaryBold,
  },
});
