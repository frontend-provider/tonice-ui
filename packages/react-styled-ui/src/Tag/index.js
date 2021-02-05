import React, { forwardRef } from 'react';
import { useTagStyle, useTagCloseButtonStyle } from './styles';
import ButtonBase from '../ButtonBase';
import Icon from '../Icon';
import PseudoBox from '../PseudoBox';

const TagCloseButton = ({ size, ...props }) => {
  const closeButtonStyleProps = useTagCloseButtonStyle({ size });
  return (
    <ButtonBase {...closeButtonStyleProps} {...props} />
  );
};

const Tag = forwardRef(
  (
    {
      borderRadius = 'sm',
      size = 'md',
      variant = 'solid',
      variantColor = 'gray',
      isInvalid,
      isCloseButtonVisible,
      disabled,
      children,
      onClose,
      ...rest
    },
    ref,
  ) => {
    const tagStyleProps = useTagStyle({
      color: variantColor,
      size,
      variant,
      canFocus: isCloseButtonVisible,
      isCloseButtonVisible,
      borderRadius,
    });

    return (
      <PseudoBox
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={isInvalid}
        borderRadius={borderRadius}
        tabIndex={disabled ? '-1' : '0'}
        {...tagStyleProps}
        {...rest}
      >
        { children }
        {!!isCloseButtonVisible && (
          <TagCloseButton
            borderRadius={borderRadius}
            size={size}
            disabled={disabled}
            onClick={onClose}
            tabIndex="-1"
          >
            <Icon icon="close-s" />
          </TagCloseButton>
        )}
      </PseudoBox>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
