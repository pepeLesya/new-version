import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import styles from "../ui/UserCard.module.scss";
import avatar from '../../images/cat.jpg'

export default function UserCard() {
  interface User {
    id: number;
    name: string;
    company: {
      name: string;
    };
    address: {
      city: string;
    };
  }
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.cardBlock}>

      <div className={styles.cardInfo}>

        {users.map((user) => (
          <div key={user.id} className={styles.cardItem}>
            <img src={avatar} alt={user.name}/>
            <div className={styles.cardText}>
                <div className={styles.cardName}>
              <h5 className={styles.cardUserName}>{user.name}</h5>
              <button
                aria-label="Открыть меню"
                className={styles.menuButton}
                type="button"
              >
                ⋮
              </button>
              </div>
              <p className={styles.cardCompany}>{user.company.name}</p>

              <p className={styles.cardAdress}>{user.address.city}</p>
            </div>
            <div className={styles.buttonChoice}>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
