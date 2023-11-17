import { Box, Section, Grid, Flex } from '@radix-ui/themes';
import { InitialsCircle } from './InitialsCircle';
import { ContactButton } from '../../ContactButton/ContactButton';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Grid columns="2" gap="3" width="auto">
      <Box py="3">
        <InitialsCircle />
      </Box>
      <Box py="3">
        <Flex justify="end">
          <ContactButton />
        </Flex>
      </Box>
    </Grid>
  );
}

export default Header;
