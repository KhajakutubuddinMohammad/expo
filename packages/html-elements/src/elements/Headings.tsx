import React, { ClassAttributes, ComponentType, forwardRef } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { em } from '../css/units';
import Text, { TextProps } from '../primitives/Text';

function createHeadingComponent(level: number): ComponentType<TextProps> {
  const nativeProps: any = Platform.select({
    web: {
      'aria-level': `${level}`,
    },
    default: {},
  });
  return forwardRef((props: TextProps, ref?: ClassAttributes<typeof Text>['ref']) => {
    return (
      <Text
        {...nativeProps}
        accessibilityRole="header"
        {...props}
        style={[styles[`h${level}`], props.style]}
        ref={ref}
      />
    );
  });
}

export const H1 = createHeadingComponent(1);
export const H2 = createHeadingComponent(2);
export const H3 = createHeadingComponent(3);
export const H4 = createHeadingComponent(4);
export const H5 = createHeadingComponent(5);
export const H6 = createHeadingComponent(6);

// Default web styles: https://www.w3schools.com/tags/tag_hn.asp
const styles = StyleSheet.create({
  h1: {
    fontSize: em(2),
    marginVertical: em(0.67),
    fontWeight: 'bold',
  },
  h2: {
    fontSize: em(1.5),
    marginVertical: em(0.83),
    fontWeight: 'bold',
  },
  h3: {
    fontSize: em(1.17),
    marginVertical: em(1),
    fontWeight: 'bold',
  },
  h4: {
    fontSize: em(1),
    marginVertical: em(1.33),
    fontWeight: 'bold',
  },
  h5: {
    fontSize: em(0.83),
    marginVertical: em(1.67),
    fontWeight: 'bold',
  },
  h6: {
    fontSize: em(0.67),
    marginVertical: em(2.33),
    fontWeight: 'bold',
  },
});
