import chainedFunction from 'chained-function';
import React, { forwardRef } from 'react';
import Box from '../Box';
import ControlBox from '../ControlBox';
import useColorMode from '../useColorMode';
import VisuallyHidden from '../VisuallyHidden';
import radioStyles from './styles';
import { useGroupContext } from '../GroupContext';

const sizes = {
  lg: '20px',
  md: '16px',
  sm: '12px',
};

const iconSizes = {
  lg: '10px',
  md: '8px',
  sm: '6px',
};

const Radio = forwardRef(
  (
    {
      checked,
      children,
      defaultChecked,
      disabled,
      id,
      name,
      size = 'md',
      value,
      variantColor = 'blue',
      onChange,
      onBlur,
      onFocus,
      ...rest
    },
    ref,
  ) => {
    const { colorMode } = useColorMode();
    const {
      disabled: disabledFromParent,
      name: nameFromParent,
      size: sizeFromParent,
      value: valueFromParent,
      variantColor: variantColorFromParent,
      onChange: onChangeFromParent
    } = useGroupContext();
    let _checked = checked;
    if (valueFromParent !== undefined) {
      _checked = (valueFromParent === value);
    }
    const _disabled = disabledFromParent || disabled;
    const _name = nameFromParent || name;
    const _size = sizes[sizeFromParent || size];
    const _iconSize = iconSizes[sizeFromParent || size];
    const _variantColor = variantColorFromParent || variantColor;
    const _onChange = chainedFunction(
      onChange,
      onChangeFromParent,
    );
    const styleProps = radioStyles({
      color: _variantColor,
      size: _size,
      colorMode
    });

    return (
      <Box
        as="label"
        display="inline-flex"
        verticalAlign="top"
        htmlFor={id}
        alignItems="center"
        cursor={_disabled ? 'not-allowed' : 'pointer'}
        {...rest}
      >
        <VisuallyHidden
          as="input"
          type="radio"
          id={id}
          ref={ref}
          name={_name}
          value={value}
          defaultChecked={defaultChecked}
          onChange={_onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          checked={_checked}
          disabled={_disabled}
        />
        <ControlBox
          {...styleProps}
          size={_size}
          type="radio"
          borderRadius="circle"
        >
          <Box bg="currentColor" as="span" borderRadius="circle" size={_iconSize} />
        </ControlBox>
        {children && (
          <Box
            ml="2x"
            fontSize={size}
            userSelect="none"
            opacity={_disabled ? 0.32 : 1}
          >
            {children}
          </Box>
        )}
      </Box>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
