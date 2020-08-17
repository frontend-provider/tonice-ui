import _get from 'lodash.get';
import React, { forwardRef } from 'react';
import SVGIcon from '../SVGIcon';
import useTheme from '../useTheme';

const Icon = forwardRef((
  {
    icon,
    ...rest
  },
  ref
) => {
  const { icons = {} } = useTheme();
  const { path, ...restIconProps } = { ..._get(icons, icon, _get(icons, `tmicon-${icon}`)) };
  return (
    <SVGIcon ref={ref} {...restIconProps} {...rest}>
      {path}
    </SVGIcon>
  );
});

Icon.displayName = 'Icon';

export default Icon;
