import { get } from '@styled-system/core';
import useColorMode from '../useColorMode';
import useTheme from '../useTheme';

const defaultPlacement = 'right';
const defaultSize = 'auto';

const getPlacementProps = (placement) => {
  placement = placement ?? defaultPlacement;

  return {
    right: {
      right: 0,
      top: 0,
      height: '100vh',
    },
    left: {
      left: 0,
      top: 0,
      height: '100vh',
    },
  }[placement];
};

const getSizeProps = (size) => {
  size = size ?? defaultSize;

  return {
    sm: {
      width: 336,
    },
    md: {
      width: 504,
    },
    lg: {
      width: 672,
    },
    full: {
      width: '100vw'
    },
    auto: {
      width: 'auto',
    },
  }[size];
};

const useDrawerCloseButtonStyle = () => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();
  const color = {
    dark: 'white:tertiary',
    light: 'black:tertiary',
  }[colorMode];
  const hoverColor = {
    dark: 'white:emphasis',
    light: 'black:emphasis',
  }[colorMode];
  const activeColor = color;
  const focusColor = color;
  const focusHoverColor = hoverColor;
  const focusActiveColor = activeColor;
  const focusBorderColor = get(colors, 'blue:60');

  return {
    position: 'absolute',
    top: '2x',
    right: '2x',
    border: 1,
    borderColor: 'transparent',
    color: color,
    transition: 'all .2s',
    lineHeight: 1,
    height: '8x',
    width: '8x',
    minWidth: '8x', // ensure a minimum width for the close button
    px: 0,
    py: 0,
    _hover: {
      color: hoverColor,
    },
    _active: {
      color: activeColor,
    },
    _focus: {
      borderColor: focusBorderColor,
      boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
      color: focusColor,
    },
    _focusHover: {
      color: focusHoverColor,
    },
    _focusActive: {
      borderColor: focusBorderColor,
      boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,
      color: focusActiveColor,
    },
  };
};

const useDrawerContentStyles = ({
  placement,
  size,
}) => {
  const { colorMode } = useColorMode();
  const baseStyle = {
    mx: 'auto',
    height: 'auto',
    maxHeight: '100vh',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
  };
  const colorModeStyles = {
    light: {
      color: 'black:primary',
      bg: 'white',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray:20',
      boxShadow: 'light.lg',
    },
    dark: {
      color: 'white:primary',
      bg: 'gray:90',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray:80',
      boxShadow: 'dark.lg',
    },
  }[colorMode];
  const placementProps = getPlacementProps(placement);
  const sizeProps = getSizeProps(size);

  return {
    ...baseStyle,
    ...colorModeStyles,
    ...placementProps,
    ...sizeProps,
  };
};

export {
  useDrawerCloseButtonStyle,
  useDrawerContentStyles,
};
