import React, { ClassAttributes, ComponentType, forwardRef } from 'react';
import { Linking, Platform } from 'react-native';

import Text, { TextProps } from '../primitives/Text';

export const A: ComponentType<TextProps> = forwardRef(
  ({ href, ...props }: TextProps, ref?: ClassAttributes<typeof Text>['ref']) => {
    const nativeProps = Platform.select({
      web: {
        href,
      },
      default: {
        // @ts-ignore
        onPress: event => {
          props.onPress && props.onPress(event);
          if (Platform.OS !== 'web' && href !== undefined) {
            Linking.openURL(href);
          }
        },
      },
    });
    return <Text accessibilityRole="link" {...props} {...nativeProps} ref={ref} />;
  }
);
