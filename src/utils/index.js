import {
  Alert,
  Platform,
} from 'react-native';
import { Toast } from 'native-base';

const platform = Platform.OS;

export const getPlatform = () => platform;

export const isIOS = () => platform === 'ios';

export const isAndroid = () => platform === 'android';

export const showToast = (msg, type = 'success') => (
  Toast.show({
    duration: 5000,
    text: msg,
    position: 'bottom',
    type,
    textStyle: { textAlign: 'center' },
  })
);

export const printError = (e) => {
  const message = e.error_message || e.message || e;
  return showToast(message, 'danger');
};

export function showAlert(
  title = 'DARUMA',
  message,
  onAcceptPress,
  onCancelPress,
  cancelText = 'Cancelar',
  acceptText = 'Aceptar',
  isCancelable = true,
) {
  return Alert.alert(
    title,
    message,
    [
      {
        text: cancelText,
        onPress: onAcceptPress,
      },
      {
        text: acceptText,
        style: onCancelPress,
      },
    ],
    { cancelable: isCancelable },
  );
}

export const formatMoney = (amount, withCents = true) => {
  const moneyValue = `$${(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
  return withCents
    ? moneyValue
    : moneyValue.substring(0, moneyValue.length - 3);
};
