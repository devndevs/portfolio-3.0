import { Grid, Box } from '@radix-ui/themes';

/* eslint-disable-next-line */
export interface BodyProps {}

export function Body(props: BodyProps) {
  return (
    <Grid columns="1" gap="3" width="auto">
      <Box height="9">Box</Box>
      <Box height="9">Box</Box>
      <Box height="9">Box</Box>
      <Box height="9">Box</Box>
      <Box height="9">Box</Box>
      <Box height="9">Box</Box>
    </Grid>
  );
}

export default Body;
