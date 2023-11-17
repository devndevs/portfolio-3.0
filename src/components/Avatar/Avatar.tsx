import styles from './Avatar.module.css';
import { Flex, Avatar } from '@radix-ui/themes';
import { ReactNode } from 'react';
import 'src/assets/final.jpg';

/* eslint-disable-next-line */
export interface AvatarProps {
  fallback?: ReactNode;
  src?: string;
}

export function MyAvatar({ fallback, src }: AvatarProps) {
  return (
    <div>
      <Flex gap="2" justify="center">
        <Avatar
          size="9"
          radius="full"
          src={src ? src : `src/assets/final.jpg`}
          fallback={fallback ? fallback : 'A'}
        />
      </Flex>
    </div>
  );
}
