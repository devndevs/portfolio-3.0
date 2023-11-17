import { MyAvatar } from '../Avatar/Avatar';
import { Separator, Grid, Box, Section, Text } from '@radix-ui/themes';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { Sphere } from './Sphere';
import { Form } from '../Form/Form';

/* eslint-disable-next-line */
export interface PortfolioProps {}

export function Portfolio(props: PortfolioProps) {
  return (
    <div>
      <Header />
      <Grid columns="2" gap="3" width="auto">
        <Box>
          <Section size="2">
            <Grid columns="1" gap="3" width="auto">
              <Text size="7" weight="regular" align="center">
                Software Engineer
              </Text>
              <Text size="9" weight="bold" align="center">
                Deven Perkins
              </Text>
              <MyAvatar />
            </Grid>
          </Section>
        </Box>
        <Box>
          <Section size="2">
            <Body />
            <Form />
          </Section>
        </Box>
      </Grid>

      <Footer />
    </div>
  );
}

export default Portfolio;
