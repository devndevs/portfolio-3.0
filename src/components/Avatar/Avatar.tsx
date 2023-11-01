import styles from './Avatar.module.css';
import { Flex, Avatar } from '@radix-ui/themes';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface AvatarProps {
  fallback?: ReactNode;
  src?: string;
}

export function MyAvatar({ fallback, src }: AvatarProps) {
  return (
    <div>
      <Flex gap="2">
        <Avatar
          size="9"
          radius="full"
          src={
            src
              ? src
              : 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
          }
          fallback={fallback ? fallback : 'A'}
        />
      </Flex>
    </div>
  );
}
