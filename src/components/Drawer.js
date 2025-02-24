function Drawer({onClose,onRemove,items=[]}) { // с помощью деструктуризаци разделили props на onclose,items,(onRemove (5 урок- удаление из корзины из бд объяснение, ч3)) тк возвращают разное массив и бул (см. App) 
    return (
      <div className="overlay">
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30">
            Корзина
            <img
              onClick={onClose}
              className="cu-p"
              src="/img/btn-remove.svg"
              alt="Close"
            />
          </h2>
{ 
   items.length > 0 ? <div className="items"> {/* (5 урок- рендер пустой корзины или кроссовок, 1:07:30 ,ч1) */} 
   <div> {/* (5 урок- рендер пустой корзины или кроссовок, 1:07:30 ,ч2) див папа (родительский) чтобы обернуть два элемента в реакт*/}
    {items.map(
     (
       obj // из items вытаскиваем imageUrl,name,price
     ) => (
       <div className="cartItem d-flex align-center mb-20">
         <div
           style={{ backgroundImage: `url(${obj.imageUrl})` }}
           className="cartItemImg"
         ></div>
         <div className="mr-20">
           <p className="mb-5">{obj.name}</p>
           <b>{obj.price} руб.</b>
         </div>
         <img
          
           onClick={() => onRemove(obj.id)} // (5 урок- удаление из корзины из бд объяснение, 1:01:40, ч4)
           // нажимая на крестик картинку, вызываем аноним функцию (только таким способом можно передавать в переменную данные) передаем id (мокапи) из карточек сart
           className="removeBtn"
           src="/img/btn-remove.svg"
           alt="Remove"
         />
       </div>
     )
   )}
   <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
   </div>
   
 </div> : <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              class="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onClose} class="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>

}
          

          
          
        </div>
      </div>
    );
}

export default Drawer;       