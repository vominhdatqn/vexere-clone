export const emailRegex = new RegExp(
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
);
export const passwordRegex = new RegExp(/^(?=.*[A-Za-z\d]).{8,}$/);
export const nameRegex = new RegExp(
  /^((?![\^!@#$*~ <>? ]).)((?![\^!@#$*~<>?]).){0,73}((?![\^!@#$*~ <>? ]).)$/
);
export const summaryRegex = new RegExp(/^\S.{0,250}/);
export const zipRegex = new RegExp(/^\S[0-9]{0,11}/);
// export const phoneFaxRegex = new RegExp(/^\S[0-9]{0,18}/);
export const phoneFaxRegex = new RegExp(
  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
);

export const yearRegex = new RegExp(/^\S[0-9]{0,2}((?! )[0-9])$/);
// export const dateRegex = new RegExp(/^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/g);
export const dateRegex = new RegExp(
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
);
export const addresRegex = new RegExp(/^\S.{0,199}/);
export const urlRegex = new RegExp(
  /^((?![\^!@#$*~ <>? ]).)((?![\^!@#$*~<>? ]).){2,256}((?![\^!@#$*~ <>? ]).)$/
);
export const alphabetRegex = new RegExp('[a-zA-Z]+');
export const numberRegex = new RegExp(/^[0-9]+$/);
export const verifyCodeRegex = new RegExp(/^[0-9]+$/);
export const isYahoo = new RegExp(/.+@yahoo\.com/);
// export const specialCharacter = new RegExp([/()!@#$ % -^&*=^ (),.? ":{}|<>/g]);
export const specialCharacter = new RegExp(/[!@#$ %^&*+=_(),.? ":{}|<>]/);

export const htmlTag = new RegExp(
  /<([a-zA-Z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/gim
);
