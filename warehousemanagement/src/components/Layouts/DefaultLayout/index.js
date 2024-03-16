import styles from './DefaultLayout.module.scss';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

function DefaultLayout({ children }) {
   return (
      <div className={styles.wrapper}>
         <Sidebar />
         <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
