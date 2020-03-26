import useColorMode from '../useColorMode';
import { baseProps, getSizeProps, getVariantProps } from './styles';

const useInputStyle = ({
  invalid,
  size,
  variant,
}) => {
  const { colorMode } = useColorMode();

  // size
  const sizeProps = getSizeProps({ size });

  // variant
  const variantProps = getVariantProps({ variant, colorMode, invalid });

  return {
    ...baseProps,
    ...sizeProps,
    ...variantProps,
  };
};

export default useInputStyle;