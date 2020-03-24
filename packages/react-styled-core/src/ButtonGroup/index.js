import React, { Children, cloneElement, isValidElement } from 'react';
import Box from '../Box';

const ButtonGroup = ({
  children,
  size = 'md',
  variant = 'default',
  vertical,
  ...rest
}) => {
  const addDivide = ['emphasis', 'primary', 'default'].indexOf(variant) >= 0;
  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) {
      return false;
    }

    const isFirstChild = index === 0;
    const isLastChild = index === Children.count(children) - 1;
    const horizontalProps = {
      ...(isFirstChild && { borderTopRightRadius: 0, borderBottomRightRadius: 0 }),
      ...(isLastChild && { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }),
      ...(!isFirstChild && !addDivide && { ml: -1 }),
      ...(!isFirstChild && !isLastChild && { borderRadius: 0 }),
    };
    const verticalProps = {
      ...(isFirstChild && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }),
      ...(isLastChild && { borderTopLeftRadius: 0, borderTopRightRadius: 0 }),
      ...(!isFirstChild && !addDivide && { mt: -1 }),
      ...(!isFirstChild && !isLastChild && { borderRadius: 0 }),
    };
    const buttonStyleProps = vertical ? verticalProps : horizontalProps;

    let divider = null;
    if (!isFirstChild && addDivide) {
      divider = vertical ? (
        <Box height="1px" bg="gray:70" />
      ) : (
        <Box width="1px" bg="gray:70" />
      );
    }

    return (
      <>
        {divider}
        {
          cloneElement(child, {
            size: size,
            variant: variant,
            ...buttonStyleProps
          })
        }
      </>
    );
  });

  return (
    <Box
      display="inline-flex"
      flexDirection={vertical ? 'column' : 'row'}
      {...rest}
    >
      {clones}
    </Box>
  );
};

export default ButtonGroup;
