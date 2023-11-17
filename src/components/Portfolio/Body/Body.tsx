import { Grid, Box, Text, Flex } from '@radix-ui/themes';

/* eslint-disable-next-line */
export interface BodyProps {}

export function Body(props: BodyProps) {
  return (
    <Grid columns="1" gap="3" width="auto">
      <Grid columns="2" gap="3" width="auto">
        <Flex direction="column" justify="start">
          <Text size="1" weight="bold">
            COMPANY
          </Text>
          <Text size="4" weight="light">
            Looking
          </Text>
        </Flex>
        <Flex direction="column" justify="start">
          <Text size="1" weight="bold">
            FOCUSED ON
          </Text>
          <Text size="4" weight="light">
            Inclusive UI/UX
          </Text>
        </Flex>
      </Grid>
      <Grid columns="2" gap="3" width="auto">
        <Box height="9">
          <Text weight="bold">Top Skills</Text>
        </Box>
        <Flex justify="start">
          <Box height="9">
            <Text weight="bold">Main Tools</Text>
          </Box>
        </Flex>
      </Grid>
      <Box height="9">
        <Text weight="bold">About</Text>
      </Box>

      <Box height="9">
        <Text weight="bold">Projects</Text>
      </Box>
      <Box height="9">
        <Text weight="bold">Work History</Text>
      </Box>
      <Box height="9">
        <Text weight="bold">Contact</Text>
      </Box>
      <Text weight="bold">Connect</Text>
    </Grid>
  );
}

export default Body;
