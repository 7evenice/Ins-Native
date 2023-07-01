import { Alert } from "react-native";

export const validateInputs = (username ,name, email, password, confirmPassword) => {
  if (!username || !name || !email || !password || !confirmPassword) {
    Alert.alert('Vui lòng điền đầy đủ thông tin.');
    return false;
  }

  if (password !== confirmPassword) {
    Alert.alert('Mật khẩu và xác nhận lại mật khẩu không khớp.');
    return false;
  }

  if (!name || name.trim() === '') {
    Alert.alert('Vui lòng nhập tên của bạn');
    return false;
  }

  if (!username || username.trim() === '') {
    Alert.alert('Vui lòng nhập tên đăng nhập');
    return false;
  }

  if (!email || email.trim() === '') {
    Alert.alert('Vui lòng nhập email');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    Alert.alert('Vui lòng nhập email hợp lệ');
    return false;
  }

  if (!password || password.trim() === '') {
    Alert.alert('Vui lòng nhập mật khẩu');
    return false;
  }
  // console.log(username);
  return true;
};

