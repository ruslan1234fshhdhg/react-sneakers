import React from 'react';
import styles from './Card.module.scss';

function Card({id,name,imageUrl,price,onFavorite,onPlus,favorited=false}) { // с помощью деструктуризаци разделили props на name,imageUrl,price,onFavorite,onPlus
  const [isAdded,setIsAdded]= React.useState(false);
  const [isFavorite,setIsFavorite]= React.useState(favorited); // (5 урок- ДЕЛАЕМ сохранение закладок объяснение, 1:14:48 , ч1) создаем переменную которая хранит нажато ли сердечко
  const onClickPlus =()=>{
    onPlus({id,name,imageUrl,price});  // чтобы функциия вызывалась при нажатии на плюс обьявляем ее при клике, в нее помещаем name,imageUrl,price карточки на котрую кликнули
    setIsAdded(!isAdded);
  }


  const onClickFavorite =()=>{
    
    onFavorite({id,name,imageUrl,price});  
    setIsFavorite(!isFavorite); // (5 урок- ДЕЛАЕМ сохранение закладок объяснение , ч2) создаем функцию которая при клике устанавливает обратное значение
  }

    return (
      
<div className={styles.card}>
<div className={styles.favorite} onClick={onClickFavorite}> {/* (5 урок- ДЕЛАЕМ сохранение закладок объяснение , ч4)  при клике вызываем функцию*/}
  <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" /> {/* (5 урок- ДЕЛАЕМ сохранение закладок объяснение , ч3)  создаем условие изменеия картинки при true или false*/}
</div>

<img
  width={133}
  height={112}
  src={imageUrl}
  alt="Sneakers1"
/>
<h5>{name}</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Цена</span>
    <b>{price} руб.</b>
</div>

<img className={styles.plus} src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="Plus" onClick={onClickPlus}/>

</div>
</div>
);
}
export default Card;