import styles from './Footer.module.css';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <h1>Deven Perkins 2023</h1>
    </div>
  );
}

export default Footer;
