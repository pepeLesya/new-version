import Header from '../components/Header';
import UserCard from '../components/UserCard';
import styles from '../ui/Content.module.scss';



export default function Content() {
  return (

    <div className="container">
    <Header/>
    <h2 className={styles.sectionTitle}>Активные</h2>
    <UserCard/>
    <h2 className={styles.sectionTitle}>Архив</h2>
    
    </div>
  )
}
