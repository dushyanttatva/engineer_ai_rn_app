import React from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

// import common styles, functions and static
import colors from '../../constants/colors';
import styles from './styles';

class Button extends React.Component {
  constructor(props) {
    super(props);   
  }

  render() {
    // set constants for props
    const {
      numberOfButtons,
      buttonContainer,
      firstButtonDisabled,
      secondButtonDisabled,
      firstButtonText,
      secondButtonText,
      firstButtonLabelColor,
      secondButtonLabelColor,
      firstButtonBackColor,
      firstButtonPressColor,
      secondButtonBackColor,
      secondButtonPressColor,
      firstButtonOnPress,
      secondButtonOnPress,
      firstButtonTextStyle,
      secondButtonTextStyle,
      borderRadius,
      firstButtonStyle,
      secondButtonStyle,
      isShadow,
      firstButtonSecondaryTextEnable,
      firstButtonSecondaryText,
      firstButtonSecondaryTextStyle,
      firstButtonSecondaryLabelColor,
      primaryTextContainer,
      secondaryTextContainer,
      secondButtonImageEnable,
      secondButtonImageSrc,
      secondButtonImageStyle,
    } = this.props;
    // return the view of custom button component as per props used
    return (
      <View style={[styles.mainContainer]}>
        {numberOfButtons === 1 ? (
          <View style={[styles.fullWidthButtonWrapper, buttonContainer]}>
            <TouchableHighlight
              activeOpacity={1}
              disabled={firstButtonDisabled}
              onPress={firstButtonOnPress}
              underlayColor={firstButtonPressColor}
              style={[styles.fullWidthButton, isShadow && styles.shadowStyle,
              { backgroundColor: firstButtonBackColor, borderRadius }, firstButtonStyle]}
            >
              {firstButtonSecondaryTextEnable ?
                (
                  <View style={styles.doubleTextButtonContainer}>
                    <View style={[styles.primaryTextContainer, primaryTextContainer]}>
                      <Text style={[styles.buttonTextStyle, { color: firstButtonLabelColor }, firstButtonTextStyle]}>
                        {firstButtonText}
                      </Text>
                    </View>
                    <View style={[styles.secondaryTextContainer, secondaryTextContainer]}>
                      <Text style={[styles.buttonTextStyle, { color: firstButtonSecondaryLabelColor }, firstButtonSecondaryTextStyle]}>
                        {firstButtonSecondaryText}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <Text style={[styles.buttonTextStyle, { color: firstButtonLabelColor }, firstButtonTextStyle]}>
                    {firstButtonText}
                  </Text>)
              }
            </TouchableHighlight>
          </View>
        ) : (
            <View style={[styles.equalWidthButtonsWrapper, buttonContainer]}>
              <View style={[styles.boxShadow]}>
                <TouchableHighlight
                  activeOpacity={1}
                  disabled={firstButtonDisabled}
                  onPress={firstButtonOnPress}
                  underlayColor={firstButtonPressColor}
                  style={[styles.equalWidthButton1,
                  { backgroundColor: firstButtonBackColor }, firstButtonStyle, isShadow && styles.shadowStyle]}
                >
                  {firstButtonSecondaryTextEnable ?
                    (
                      <View style={styles.doubleTextButtonContainer}>
                        <View style={[styles.primaryTextContainer, primaryTextContainer]}>
                          <Text style={[styles.buttonTextStyle, { color: firstButtonLabelColor }, firstButtonTextStyle]}>
                            {firstButtonText}
                          </Text>
                        </View>
                        <View style={[styles.secondaryTextContainer, secondaryTextContainer]}>
                          <Text style={[styles.buttonTextStyle, { color: firstButtonSecondaryLabelColor }, firstButtonSecondaryTextStyle]}>
                            {firstButtonSecondaryText}
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <Text style={[styles.buttonTextStyle, { color: firstButtonLabelColor }, firstButtonTextStyle]}>
                        {firstButtonText}
                      </Text>)
                  }
                </TouchableHighlight>

                <TouchableHighlight
                  activeOpacity={1}
                  disabled={secondButtonDisabled}
                  onPress={secondButtonOnPress}
                  underlayColor={secondButtonPressColor}
                  style={[styles.equalWidthButton2,
                  { backgroundColor: secondButtonBackColor }, secondButtonStyle, isShadow && styles.shadowStyle]}
                >
                  {secondButtonImageEnable ?
                    (
                      <View style={[styles.secondButtonImageStyle, secondButtonImageStyle]}>
                        <Image style={[styles.btnImage]} source={secondButtonImageSrc} />
                      </View>
                    ) : (
                      <Text style={[styles.buttonTextStyle, { color: secondButtonLabelColor }, secondButtonTextStyle]}>
                        {secondButtonText}
                      </Text>
                    )}
                </TouchableHighlight>
              </View>
            </View>
          )}
      </View>
    );
  }
}

// define props
Button.propTypes = {
  numberOfButtons: PropTypes.number,
  borderRadius: PropTypes.number,
  firstButtonDisabled: PropTypes.bool,
  secondButtonDisabled: PropTypes.bool,
  firstButtonText: PropTypes.string,
  secondButtonText: PropTypes.string,
  firstButtonLabelColor: PropTypes.string.isRequired,
  secondButtonLabelColor: PropTypes.string.isRequired,
  firstButtonOnPress: PropTypes.func,
  firstButtonTextStyle: PropTypes.object,
  secondButtonTextStyle: PropTypes.object,
  buttonContainer: PropTypes.object,
  secondButtonOnPress: PropTypes.func,
  firstButtonBackColor: PropTypes.string.isRequired,
  firstButtonPressColor: PropTypes.string,
  secondButtonBackColor: PropTypes.string.isRequired,
  secondButtonPressColor: PropTypes.string,
  firstButtonStyle: PropTypes.object,
  secondButtonStyle: PropTypes.object,
  isShadow: PropTypes.bool,
  firstButtonSecondaryTextEnable: PropTypes.bool,
  firstButtonSecondaryText: PropTypes.string,
  firstButtonSecondaryTextStyle: PropTypes.object,
  firstButtonSecondaryLabelColor: PropTypes.string,
  primaryTextContainer: PropTypes.object,
  secondaryTextContainer: PropTypes.object,
  secondButtonImageEnable: PropTypes.bool,
  secondButtonImageSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  secondButtonImageStyle: PropTypes.object,
};

// initialize default props
Button.defaultProps = {
  numberOfButtons: 1,
  borderRadius: 5,
  firstButtonText: 'Button one',
  secondButtonText: 'Button two',
  firstButtonDisabled: false,
  secondButtonDisabled: false,
  firstButtonLabelColor: colors.white,
  secondButtonLabelColor: colors.white,
  firstButtonBackColor: colors.black,
  firstButtonPressColor: colors.lightGray,
  secondButtonBackColor: colors.lightGray,
  secondButtonPressColor: colors.black,
  firstButtonTextStyle: {},
  secondButtonTextStyle: {},
  buttonContainer: {},
  firstButtonStyle: {},
  secondButtonStyle: {},
  isShadow: true,
  firstButtonSecondaryTextEnable: false,
  firstButtonSecondaryText: '',
  firstButtonSecondaryTextStyle: {},
  firstButtonSecondaryLabelColor: colors.white,
  primaryTextContainer: {},
  secondaryTextContainer: {},
  secondButtonImageEnable: false,
  secondButtonImageStyle: {},
};

export default Button;
