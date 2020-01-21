import {
  Box,
  Heading,
  Image,
  Text,
  Link,
  useColorMode,
} from '@trendmicro/react-styled-core';
import React from 'react';
import Code from './Code';
import CodeBlock from './CodeBlock';

const mapColorModeToHeadingColor = (colorMode) => ({
  light: 'blackAlpha.secondary',
  dark: 'whiteAlpha.secondary',
}[colorMode]);

const p = props => (
  <Text
    as="p"
    fontSize="sm"
    fontWeight="sm"
    my="xl"
    {...props}
  />
);

const H1 = props => {
  const { colorMode } = useColorMode();
  const color = mapColorModeToHeadingColor(colorMode);

  return (
    <Heading
      as="h1"
      color={color}
      fontSize="4xl"
      fontWeight="semibold"
      lineHeight="4xl"
      my="2x"
      {...props}
    />
  );
};

const H2 = props => {
  const { colorMode } = useColorMode();
  const color = mapColorModeToHeadingColor(colorMode);

  return (
    <Heading
      as="h2"
      color={color}
      fontSize="2xl"
      fontWeight="semibold"
      lineHeight="2xl"
      my="2x"
      {...props}
    />
  );
};

const H3 = props => {
  const { colorMode } = useColorMode();
  const color = mapColorModeToHeadingColor(colorMode);

  return (
    <Heading
      as="h3"
      color={color}
      fontSize="xl"
      fontWeight="semibold"
      lineHeight="xl"
      my="2x"
      {...props}
    />
  );
};

const H4 = props => {
  const { colorMode } = useColorMode();
  const color = mapColorModeToHeadingColor(colorMode);

  return (
    <Heading
      as="h4"
      color={color}
      fontSize="lg"
      fontWeight="semibold"
      lineHeight="lg"
      my="2x"
      {...props}
    />
  );
};

const H5 = props => {
  const { colorMode } = useColorMode();
  const color = mapColorModeToHeadingColor(colorMode);

  return (
    <Heading
      as="h5"
      color={color}
      fontSize="md"
      fontWeight="semibold"
      lineHeight="md"
      my="2x"
      {...props}
    />
  );
};

const H6 = props => {
  const { colorMode } = useColorMode();
  const color = mapColorModeToHeadingColor(colorMode);

  return (
    <Heading
      as="h6"
      color={color}
      fontSize="sm"
      fontWeight="semibold"
      lineHeight="sm"
      my="2x"
      {...props}
    />
  );
};

const Blockquote = props => (
  <Box
    as="blockquote"
    {...props}
  />
);

const ul = props => (
  <Box
    as="ul"
    {...props}
  />
);

const ol = props => (
  <Box
    as="ol"
    {...props}
  />
);

const li = props => (
  <Box
    as="li"
    {...props}
  />
);

const table = props => (
  <Box
    as="table"
    {...props}
  />
);

const thead = props => (
  <Box
    as="thead"
    {...props}
  />
);

const tbody = props => (
  <Box
    as="tbody"
    {...props}
  />
);

const tr = props => (
  <Box
    as="tr"
    {...props}
  />
);

const th = props => (
  <Box
    as="th"
    {...props}
  />
);

const td = props => (
  <Box
    as="td"
    {...props}
  />
);

const pre = props => (
  <Box
    as="pre"
    {...props}
  />
);

const code = props => (
  <CodeBlock {...props} />
);

const inlineCode = props => (
  <Code
    fontSize=".875em"
    {...props}
  />
);

const hr = props => (
  <Box
    as="hr"
    my="lg"
    borderTop={1}
    borderTopColor="gray.70"
    {...props}
  />
);

const a = props => (
  <Link
    as="a"
    fontSize="sm"
    {...props}
  />
);

const img = Image;

/**
 * https://mdxjs.com/getting-started#table-of-components
 */
const MDXComponents = {
  p,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  blockquote: Blockquote,
  ul,
  ol,
  li,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  pre,
  code,
  inlineCode,
  hr,
  a,
  img,
};

export default MDXComponents;
