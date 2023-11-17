import { Text } from '@radix-ui/themes';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div>
      <Text size="7" weight={'bold'}>
        {' '}
        © Deven Perkins 2023
      </Text>
    </div>
  );
}

export default Footer;
