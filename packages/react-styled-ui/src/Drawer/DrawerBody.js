import React, { forwardRef } from 'react';
import Box from '../Box';

const DrawerBody = forwardRef((props, ref) => {
  return (
    <Box
      ref={ref}
      px="6x"
      pb="6x"
      flex="1"
      h="auto"
      overflowY="auto"
      css={{
        '&:first-child': {
          marginTop: (16 + 28 + 12),
        },
      }}
      {...props}
    />
  );
});

DrawerBody.displayName = 'DrawerBody';

export default DrawerBody;
