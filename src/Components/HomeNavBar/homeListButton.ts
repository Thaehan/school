import ScreenNames from '@Constants/ScreenNames';
import {translate} from '@Languages/Translate';
import {IHomeListButton} from '@Types/IHomeListButton';

const homeListButton: IHomeListButton[] = [
  {
    id: 1,
    name: translate('home.Checkin'),
    assetName: 'checkin',
    screenName: ScreenNames.CheckinHistory,
  },
  // {
  //   id: 2,
  //   name: translate('home.Payment'),
  //   assetName: 'payment',
  //   screenName: '',
  // },
  // {
  //   id: 3,
  //   name: translate('home.Tuition'),
  //   assetName: 'tuition',
  //   screenName: '',
  // },
  // {
  //   id: 4,
  //   name: translate('home.InOut2Line'),
  //   assetName: 'inOut',
  //   screenName: '',
  // },
  // {
  //   id: 5,
  //   name: translate('home.InternalAccount2Line'),
  //   assetName: 'internal',
  //   screenName: '',
  // },
];

export default homeListButton;
