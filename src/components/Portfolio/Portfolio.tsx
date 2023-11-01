import { MyAvatar } from '../Avatar/Avatar';
import { Separator, Grid, Box, Section } from '@radix-ui/themes';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';

/* eslint-disable-next-line */
export interface PortfolioProps {}

export function Portfolio(props: PortfolioProps) {
  return (
    <div>
      <Header />
      <Grid columns="2" gap="3" width="auto">
        <Box>
          {' '}
          <Section size="2">
            <MyAvatar />
          </Section>
        </Box>

        <Box>
          {' '}
          <Section size="2">
            <Body />
          </Section>
        </Box>
      </Grid>
      <Footer />
    </div>
  );
}

export default Portfolio;
