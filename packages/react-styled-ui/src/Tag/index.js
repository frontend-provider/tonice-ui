import React, { forwardRef } from 'react';
import { useTagStyle, useTagCloseButtonStyle } from './styles';
import Box from '../Box';
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
    });

    return (
      <PseudoBox
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        aria-invalid={isInvalid}
        borderRadius={borderRadius}
        tabIndex="0"
        {...tagStyleProps}
        {...rest}
      >
        {/* This Box is for rendering background color of Tag. */}
        <Box
          borderRadius={borderRadius}
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
        />
        {/* The z-index is for placing text over the above box. */}
        <Box zIndex="1">{ children }</Box>
        {!!isCloseButtonVisible && (
          <TagCloseButton
            size={size}
            disabled={disabled}
            onClick={onClose}
          >
            <Icon icon="_core.close-s" />
          </TagCloseButton>
        )}
      </PseudoBox>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
