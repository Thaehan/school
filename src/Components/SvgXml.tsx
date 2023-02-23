import React from 'react';
import {SvgXml as SvgXmlRaw, SvgProps} from 'react-native-svg';

import CalendarIcon from '@Assets/Svg/Calendar.svg';
import LogoIcon from '@Assets/Svg/Logo.svg';
import BackIcon from '@Assets/Svg/BackIcon.svg';
import NotificationIcon from '@Assets/Svg/NotificationIcon.svg';
import ArrowBackIcon from '@Assets/Svg/ArrowBack.svg';
import ArrowNextIcon from '@Assets/Svg/ArrowNext.svg';
import NextArrowColorIcon from '@Assets/Svg/NextArrowColor.svg';
import SettingIcon from '@Assets/Svg/SettingIcon.svg';
import HomeFocus from '@Assets/Svg/HomeFocus.svg';
import HomeUnfocus from '@Assets/Svg/HomeUnfocus.svg';
import AccountFocus from '@Assets/Svg/AccountFocus.svg';
import AccountUnfocus from '@Assets/Svg/AccountUnfocus.svg';
import InfoIcon from '@Assets/Svg/InfoIcon.svg';
import SettingInfoIcon from '@Assets/Svg/SettingInfoIcon.svg';
import QAIcon from '@Assets/Svg/QAIcon.svg';
import LogoutIcon from '@Assets/Svg/LogoutIcon.svg';

interface ISVGProps extends SvgProps {
  xml: any;
}

export default function SvgXml(props: ISVGProps) {
  return <SvgXmlRaw {...props} xml={props.xml} />;
}

export {
  LogoutIcon,
  CalendarIcon,
  LogoIcon,
  BackIcon,
  NotificationIcon,
  ArrowBackIcon,
  ArrowNextIcon,
  NextArrowColorIcon,
  SettingIcon,
  HomeFocus,
  HomeUnfocus,
  AccountFocus,
  AccountUnfocus,
  QAIcon,
  InfoIcon,
  SettingInfoIcon,
};
