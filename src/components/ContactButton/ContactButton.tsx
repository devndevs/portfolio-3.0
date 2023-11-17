import styles from './ContactButton.module.css';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Button, Text } from '@radix-ui/themes';

/* eslint-disable-next-line */
export interface ContactButtonProps {}

export function ContactButton(props: ContactButtonProps) {
  return (
    <Button radius="large">
      <EnvelopeClosedIcon width="16" height="16" />{' '}
      <Text highContrast> Contact Me </Text>
    </Button>
  );
}

export default ContactButton;
