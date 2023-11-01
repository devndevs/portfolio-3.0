import styles from './Favicon.module.css';

/* eslint-disable-next-line */
export interface FaviconProps {}

export function Favicon(props: FaviconProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Favicon!</h1>
    </div>
  );
}

export default Favicon;
