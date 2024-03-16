import styles from './Sidebar.module.scss';

function Sidebar() {
   return (
      <aside className={styles.wrapper}>
         <div className={styles.inner}>
            <div>
               <h1>Logo</h1>
            </div>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </div>
      </aside>
   );
}

export default Sidebar;
