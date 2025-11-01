import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import styles from "../ui/UserCard.module.scss";

export default function UserCard() {
  const [users, setUsers] = useState([]);
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
            <img src={"/images/cat.jpg"} alt={user.name} width={120} />
            <div className={styles.cardText}>
              <h5 className={styles.cardUserName}>{user.name}</h5>
              <p>{user.company.name}</p>
              
              <p>{user.address.city}</p>
            </div>
            <div  className={styles.buttonChoice}>
                <button
              aria-label="Открыть меню"
              className={styles.menuButton}
              type="button"
            >
              ⋮
            </button>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}
