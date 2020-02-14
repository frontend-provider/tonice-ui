import React, { forwardRef } from 'react';
import useButtonStyle from './styles';
import ButtonBase from '../ButtonBase';

const Button = forwardRef(
  (
    {
      active,
      borderRadius = 'sm',
      children,
      as: Comp = 'button',
      variant = 'solid',
      variantColor,
      type = 'button',
      size = 'md',
      colorMode,
      ...rest
    },
    ref,
  ) => {
    const buttonStyleProps = useButtonStyle({
      color: variantColor,
      colorMode,
      size,
      variant,
    });

    return (
      <ButtonBase
        ref={ref}
        as={Comp}
        type={type}
        borderRadius={borderRadius}
        data-active={active ? 'true' : undefined}
        {...buttonStyleProps}
        {...rest}
      >
        { children }
      </ButtonBase>
    );
  },
);

Button.displayName = 'Button';

export default Button;
