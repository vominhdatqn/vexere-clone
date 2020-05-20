import React, { Fragment, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from '../Text';
import theme from '../theme';

const renderField = ({
  label,
  showIcon,
  iconName,
  keyboardType,
  secureTextEntry,
  placeholder,
  placeholderTextColor,
  size,
  color,
  actionRef,
  returnKeyType,
  cusStyle,
  onSubmitEditing,
  showStart,
  required,
  meta: { touched, error, warning },
  onInputBlur = () => {},
  input: { onChange, onBlur, onFocus, ...restInput },
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    onFocus(restInput.value);
    setFocused(true);
  };
  const handleBlur = e => {
    onInputBlur(e);
    onBlur(restInput.value);
    setFocused(false);
  };
  return (
    <View style={styles.root}>
      <Text style={styles.label}>
        {label}
        {required && <Text error={error}> *</Text>}
        {/* {touched && error && showStart && <Text error> *</Text>} */}
      </Text>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: focused
              ? theme.palette.secondary
              : theme.palette.border,
          },
        ]}
      >
        <TextInput
          ref={actionRef}
          style={[styles.input, cusStyle, { width: '100%' }]}
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
          onChangeText={onChange}
          onEndEditing={onBlur}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          {...restInput}
          {...otherProps}
        />
        <View style={{ position: 'absolute', right: 10 }}>
          {showIcon && <Icon name={`${iconName}`} size={size} color={color} />}
        </View>
      </View>
      <View style={styles.helperTextWrapper}>
        {(touched && error && (
          <Text textAlign="right" style={styles.helperText} error={error}>
            {error}
          </Text>
        )) ||
          (warning && (
            <Text textAlign="right" style={styles.helperText} orange>
              {warning}
            </Text>
          ))}
      </View>
    </View>
  );
};
const FormInputComponent = ({
  keyboardType,
  label,
  showIcon,
  name,
  iconName,
  validate,
  secureTextEntry,
  placeholder,
  placeholderTextColor,
  warn,
  size,
  required,
  onSubmitEditing,
  color,
  returnKeyType,
  cusStyle,
  showStart,
  ref,
  ...otherProps
}) => (
  <Fragment>
    <Field
      actionRef={ref}
      showStart={showStart}
      required={required}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      showIcon={showIcon}
      size={size}
      color={color}
      cusStyle={cusStyle}
      iconName={iconName}
      keyboardType={`${keyboardType}`}
      label={`${label}`}
      component={renderField}
      name={`${name}`}
      validate={validate}
      warn={warn}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      {...otherProps}
    />
  </Fragment>
);
FormInputComponent.propTypes = {
  keyboardType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validate: PropTypes.array.isRequired,
  secureTextEntry: PropTypes.bool.isRequired,
};
FormInputComponent.defaultProps = {
  keyboardType: 'default',
  label: '',
  name: '',
  required: false,
  showStart: false,
  showIcon: false,
  secureTextEntry: false,
  iconName: 'arrow-drop-down',
  size: scale(theme.measure.icon.medium),
  placeholderTextColor: '#7c8aa2',
  color: theme.palette.secondary,
  validate: [],
};
const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  label: {
    fontSize: moderateScale(14),
    color: '#6f6f6f',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  inputWrapper: {
    flexDirection: 'row',
    marginTop: scale(20),
    width: '100%',
    alignItems: 'center',
    fontSize: scale(16),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingHorizontal: scale(8),

    color: theme.palette.borderGray,
  },
  input: {
    paddingVertical: moderateScale(10),
    color: theme.palette.black,
  },
  helperTextWrapper: {
    minHeight: moderateScale(25),
    justifyContent: 'center',
  },
  helperText: {
    fontSize: scale(12),
  },
  error: {
    color: 'red',
  },
});
const FormInput = FormInputComponent;
export default FormInput;
