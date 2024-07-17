import React from 'react';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';  
import Favorites from './pages/Favorites';



function App() {
  const [items,setItems]=React.useState([]);
  const [cartItems,setCartItems]=React.useState([]); // переменная содержащая массив items корзины (передаем в карточку Drawer)
  const [favorites,setFavorites]=React.useState([]);
  const [searchValue,setSearchValue]=React.useState(''); // (5 урок- поиск объяснение, 28:20 , ч1) переменная содержащая строчку searchValue поиска 
  const [cartOpened,setCartOpened]= React.useState(false);

React.useEffect(()=>{
  axios.get('https://665e22b9e88051d604097ffc.mockapi.io/items').then((res)=>{setItems(res.data); // (5 урок- axios объяснение, 47:15), (устанавливаем axios) (get при получении чего то) берем из сервера данные по ссылке и устанавливаем их в setItems (используем вместо fetch)
  });
  axios.get('https://665e22b9e88051d604097ffc.mockapi.io/cart').then((res)=>{setCartItems(res.data); // (5 урок- взятие с бэка объяснение, 56:39), взяли с сервера карточки которые выбрали и установили их в корзину
  });
  axios.get('https://668a0d0a2c68eaf3211bd415.mockapi.io/favorites').then((res)=>{setFavorites(res.data); // 
  });
},[]);

const onAddToCart = (obj)=>{
  axios.post("https://665e22b9e88051d604097ffc.mockapi.io/cart", obj).then(res =>setCartItems(prev => [...prev, res.data])); 
  // axios.post('https://bad61fbb157ec4fb.mokky.dev/cart',obj);// (5 урок- передача в бэк объяснение, 51:50) (post при создании чего то) передаем на сервер obj который мы добавили в корзину
  // setCartItems(prev=>[...prev,obj]);// добавляем наш обьект который мы взяли из onPlus (name,imageUrl,price),в cartItems таким способом,потому что нельзя запушить как в обычном js
}
const onRemoveItem = (id)=>{
  
  axios.delete(`https://665e22b9e88051d604097ffc.mockapi.io/cart/${id}`);// (5 урок- удаление из корзины из бд объяснение, 59:05, ч1) запросом delete, передаем id в ссылке
  setCartItems((prev)=>prev.filter((item)=>item.id !== id));// (5 урок- удаление из корзины из бд объяснение, 1:02:35, ч5) установили в карточки корзины (каждый раз обновляем массив при вызове функ ), отфильтровали по предыдущему массиву,
                                                        //пробежались по его элементам и их id чтобы несовпало с id который мы передаем с функцией onremove в Drawer (это id карточки которую хотим удалить)  
}
const onAddToFavorite = async (obj)=>{
  try{
    if(favorites.find((fav)=>fav.id===obj.id)){// (5 урок- рендер фаворитов-устранение ошибки двойного добавления объяснение, 2:22:00, ч1) условие если фаворит (obj.id) на которого мы нажали есть в списке фаворитов то
    
      axios.delete(`https://668a0d0a2c68eaf3211bd415.mockapi.io/favorites/${obj.id}`); // (5 урок- рендер фаворитов-устранение ошибки двойного добавления объяснение, 2:22:00, ч2) то удаляем уже добавленный ранее из бд
       // (5 урок- рендер фаворитов-устранение ошибки двойного добавления объяснение, 2:22:00, ч3) фильтруем массив чтобы каждый элем не совпал с obj.id
  
    }
    else{ // (5 урок- рендер фаворитов-устранение ошибки двойного добавления объяснение, 2:22:00, ч4) условие если фаворита (obj.id) на которого мы нажали нету в списке фаворитов то создаем нового
      console.log("доб");
      console.log(obj.id);
      const {data} = await  axios.post("https://668a0d0a2c68eaf3211bd415.mockapi.io/favorites",obj);
       setFavorites(prev => [...prev, data]);
      
    }
  } catch(error){
alert("Не удалось добавить в фавориты")
  }
 
  
}
const onСhangeSearchInput = (event)=>{
  
  setSearchValue(event.target.value);// (5 урок- поиск объяснение, 30:45 , ч2) функция события при нажатии на поиск, добавляем в searchValue то что ввели event.target.value -Контролируемый инпут
}
  return (
    <div className="wrapper clear">
      
      {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)} onRemove={onRemoveItem}/> : null  } {/* 2.Передаем массив cartItems */} {/* (5 урок- удаление из корзины из бд объяснение, 1:00:15, ч2) добавили функцию и передали ее в корзину (cм Drawer)*/}
      <Header onClickCart={()=>setCartOpened(true)}/>
        <Routes> {/* подключили реакт роутер дом*/}
          <Route path="/" element={<Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onСhangeSearchInput}
              onFavorite={onAddToFavorite}
              onPlus={onAddToCart}
            />} exact></Route> {/* (5 урок- react router dom объяснение, 1:42:15, ч1) отображаем только при переходе по ссылке главная exact-строго / (см Home)*/}
        </Routes>

        <Routes> {/* подключили реакт роутер дом*/}
          <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>} exact></Route> {/* (5 урок- react router dom объяснение) отображаем только при переходе по ссылке /favorites exact-строго / (см Favorites)*/}
        </Routes>
    </div>
  );
}

export default App;
