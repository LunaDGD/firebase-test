import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

function App() {
  const [newName, setNewName] = useState('');
  const [users, setUsers] = useState([]);
  const usersCollctionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollctionRef, { name: newName });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollctionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="name.."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />

      <button onClick={createUser}>Add Friend</button>

      {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete friend
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
