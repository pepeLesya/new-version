import Header from '../components/Header';
import UserCard from '../components/UserCard';
import styles from '../ui/Content.module.scss';



export default function Content() {
  return (

    <div className="container">
    <Header/>
    <UserCard/>
    </div>
  )
}
