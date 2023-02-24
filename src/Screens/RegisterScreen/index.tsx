import Header from "@Components/Header";
import InputField from "@Components/InputField";
import PrimaryButton from "@Components/PrimaryButton";
import TextInputSecond from "@Components/TextInputSecond";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { Colors } from "react-native-ui-lib";
import useRegister from "./services";
import styles from "./styles";

export default function RegisterScreen(nav: NativeStackScreenProps<any>) {
    const { navigation } = nav
    const {
        RegisterHandle,
        CancelHandle,
        SendOTP,
        name,
        setName,
        userName,
        setUserName,
        pass,
        setPass,
        phone,
        setPhone,
        otp,
        setOTP,
        email,
        setEmail
    } = useRegister(nav)
    return (
        <SafeAreaView style={styles.container}>
            <Header
                title="Đăng ký"
                iconLeft={true}
                handleLeft={CancelHandle}
            />
            {/* <InputField label="oke"/> */}
            <ScrollView style={[styles.container, { marginHorizontal: 16, paddingTop: 20 }]}>
                <TextInputSecond
                    value={name}
                    onChangeText={(text: string) => setName(text)}
                    label="Họ và tên"
                    placeholder="Nhập họ và tên" />
                <TextInputSecond
                    value={userName}
                    onChangeText={(text: string) => setUserName(text)}
                    label="Tên đăng nhập"
                    placeholder="Nhập tên đăng nhập" />
                <TextInputSecond
                    value={pass}
                    onChangeText={(text: string) => setPass(text)}
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu" />
                <View style={styles.rowView}>
                    <TextInputSecond
                        value={phone}
                        onChangeText={(text: string) => setPhone(text)}
                        width={'65%'}
                        label="Số điện thoại"
                        placeholder="Nhập số điện thoại" />
                    <PrimaryButton
                        onPress={phone ? SendOTP : undefined}
                        label="Gửi"
                        containerStyle={[styles.buttonSend, { opacity: phone ? 1 : 0.5 }]}
                        textStyle={styles.textButton}
                    />
                </View>
                {/* <TextInputSecond
                    value={otp}
                    onChangeText={(text: string) => setOTP(text)}
                    label="Nhập mã OTP"
                    placeholder="Nhập mật khẩu" /> */}
                {/* <View style={styles.inputOTP}> */}
                <TextInput
                    style={styles.inputOTP}
                    placeholder="Nhập mã OTP"
                    value={otp}
                    placeholderTextColor={Colors.purple50}
                    onChangeText={(text: string) => setOTP(text)} />
                {/* </View> */}
                <TextInputSecond
                    value={email}
                    onChangeText={(text: string) => setEmail(text)}
                    label="Email"
                    placeholder="Nhập email" />
                <View style={styles.rowView}>
                    <PrimaryButton
                        onPress={CancelHandle}
                        label="Huỷ bỏ"
                        containerStyle={styles.buttonAccept}
                        textStyle={styles.textButton}
                    />
                    <PrimaryButton
                        onPress={RegisterHandle}
                        label="Đăng ký"
                        containerStyle={styles.buttonAccept}
                        textStyle={styles.textButton}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}