import { useState } from "react";
import { createContext } from "react";

import uuid from 'react-native-uuid';

export const ShopContext = createContext();

export default function ShopContextProvider(props) {
  const [users, setUsers] = useState([{ id: 1, mail: 'avi', pass: '123' }]);
  const [items, setItems] = useState([
    { id: 1, name: 'T-Shirt', price: 100, img: 'https://randomuser.me/api/portraits/men/36.jpg', checked: false },
    { id: 2, name: 'Cap', price: 50, img: 'https://randomuser.me/api/portraits/men/35.jpg', checked: true },
    { id: 3, name: 'Jeans', price: 150, img: 'https://randomuser.me/api/portraits/men/34.jpg', checked: false },
    { id: 4, name: 'Shoes', price: 250, img: 'https://randomuser.me/api/portraits/men/33.jpg', checked: true }
  ]);

  const AddUser = (mail, pass) => {
    let newUsers = [...users, { id: uuid.v4(), mail, pass }];
    setUsers(newUsers);
  }

  const LoginUser = (mail, pass) => {
    let res = users.find(user => user.mail === mail && user.pass === pass);
    console.log(res);
    return res;
  }

  const RemoveUser = (id) => {
    let newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  const ToggleItemChecked = (itemId) => {
    let newItems = [...items];
    let item = newItems.find(item => item.id === itemId);
    item.checked = !item.checked;
    setItems(newItems);
  }

  return (
    <ShopContext.Provider value={{ users, AddUser, RemoveUser, LoginUser, items, ToggleItemChecked }}>
      {props.children}
    </ShopContext.Provider>
  )
}