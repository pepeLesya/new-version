import styles from '../ui/Header.module.scss';
import ring from '../../images/bell.png'
import heart from '../../images/heart.png'
import logo from '../../images/Logo.svg'



export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <a href="" className={styles.headerLogo}>
            <img src={logo} alt="" />
          </a>
          <div className={styles.headerNote}>
            <button className={styles.hiddenMobile} aria-label="Избранное">
              <img src={heart} width={24} alt="" />
            </button>
            <button className={styles.hiddenMobile}>
              <img src={ring} width={24} alt="" />
            </button>
            <div className={styles.headerUser}>
              <img src="./images/cat.jpg" width={40} alt="" />
              <span>Ivan123</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

