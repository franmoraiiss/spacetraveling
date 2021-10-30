/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from 'next/link';
import styles from './header.module.scss';

import commonStyles from '../../styles/common.module.scss';

export default function Header() {
  return (
    <header className={commonStyles.container}>
      <Link href="/">
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
      </Link>
    </header>
  );
}
