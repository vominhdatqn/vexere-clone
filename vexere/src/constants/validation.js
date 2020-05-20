// validation
import {
  nameRegex,
  urlRegex,
  isYahoo,
  passwordRegex,
  emailRegex,
  verifyCodeRegex,
  dateRegex,
  numberRegex,
} from 'constants/regexp';
import moment from 'moment';
const date = new Date();

export const numberRate = value =>
  value && Number(value) > 100 ? 'Nhập số nhỏ hơn 100' : undefined;

export const required = value => (value ? undefined : 'Bạn không thể để trống');
export const maxLength15 = value =>
  value && value.length > 15 ? 'Must be 15 characters or less' : undefined;
export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue15 = minValue(18);
export const minValue10 = minValue(10);
export const pagelink = value =>
  value && !urlRegex.test(value) ? 'Page link is invalid' : undefined;

export const name = value =>
  value && !nameRegex.test(value) ? 'Tên không hợp lệ' : undefined;

export const isYahooMail = value =>
  value && isYahoo.test(value)
    ? 'Really ? You still use yahoo mail ?'
    : undefined;
export const isPassword = value =>
  value && !passwordRegex.test(value)
    ? 'Hãy thử một với ít nhất 8 ký tự'
    : undefined;
export const isEmail = value =>
  value && !emailRegex.test(value)
    ? 'Vui lòng nhập một địa chỉ email hợp lệ'
    : undefined;
export const isCheck = value =>
  value == false ? ' You have not agreed on terms' : undefined;
export const isVerifyCode = value =>
  value == !verifyCodeRegex.test(value)
    ? ' Vui lòng chỉ nhập số'
    : value.length < 6
    ? 'Mã của bạn phải có tối đa 6 ký tự'
    : value.length > 6
    ? 'Mã của bạn chỉ có 6 ký tự'
    : undefined;

export const businessName = value =>
  value ? undefined : 'Your business name is not valid';
export const urlBusiness = value => (value ? undefined : 'URL is not valid');

export const requiredJobTittle = value =>
  value ? undefined : 'Job title is required';
export const requiredNewPassword = value =>
  value ? undefined : "You can't leave this empty";
export const onlySixCharacter = value =>
  value && value.length > 6
    ? 'Your code must be at only 6 characters'
    : value.length < 6
    ? 'Your code must have a maximum of 6 characters'
    : undefined;
export const onlyNumber = value =>
  value && !numberRegex.test(value)
    ? 'Định dạng ngày tháng hợp lệ!'
    : undefined;
export const differentDateCurrent = value =>
  value && !dateRegex.test(value) ? 'Vui lòng nhập một ngày khác' : undefined;

// export const validateDate = values => {
//   const re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
//   const errors = {};
//   if (!values) {
//     errors.category = 'Required!';
//   } else if (values.industryGroup && values.industryGroup !== 1) {
//     return errors;
//   }
//   if (!values.type) {
//     errors.type = 'Required!';
//   }
//   return errors;
// }
// 'Please enter a valid email address or phone number'
export const validateDate = values => {
  var dateMomentObject = moment(values, 'DD/MM/YYYY'); // 1st argument - string, 2nd argument - format
  var dateObject = dateMomentObject.toDate(); // conver
  const data = new Date(dateObject);
  if (parseInt(data.getFullYear()) < parseInt(date.getFullYear())) {
    return 'Năm không hợp lệ';
  } else {
    return null;
  }
};
