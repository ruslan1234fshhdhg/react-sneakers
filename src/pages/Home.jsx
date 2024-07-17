import Card from '../components/Card';/// двойной выход из home и pages

function Home({items,searchValue,setSearchValue,onСhangeSearchInput,onFavorite,onPlus}){
    return(
        <div className="content p-40">
        <div className=" d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"`: 'Все кроссовки'}</h1> {/* (5 урок- поиск объяснение, 32:05 , ч4) если в переменной searchValue есть знач, то выодим их, если нет выводим дефолт название*/}
          <div className="search-block">
           <img src="/img/search.svg" alt="Search" />
            { searchValue && (<img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg"  alt="Close"  />)} {/* 1)(5 урок- поиск объяснение, 36:00 , ч5) отображение кнопки очистить поле, если в переменной searchValue есть значеия то она появляется 
                                                                                                                                              2) создаем событие onClick пи клике на кнопку закрыть передаем в setSearchValue ''                                                  */ }
            <input onChange={onСhangeSearchInput} value={searchValue} placeholder="Поиск..." /> {/* (5 урок- поиск объяснение, 29:50 , ч3) добавляем событие выбора и устанавливаем value={searchValue} в верстку поиска */}
          </div>
        </div>
        <div className="d-flex flex-wrap">
        
          {items
          .filter((item)=>item.name.toLowerCase().includes(searchValue.toLowerCase())) // (5 урок- поиск объяснение, 39:55 , ч6) фильтруем элементы по названию которое указано в searchValue независимо от регистра
          .map((item,index)=>(
          <Card 
          key={index} // (5 урок- key объяснение, 17:00) для устранения ошибки,обьясняем реакту чем отл карточки, лучше не использовать индекс,а какое нибудь уник значение,не рандомное
          id={item.id}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          onFavorite={(item)=>onFavorite(item)}
          onPlus={(item)=>onPlus(item)} // взяли obj name,imageUrl,price (cм в index.Card),можем передавать и item так как в массиве из бд тоже самое.
          /// конкатенируем свойства id,name,imageUrl,price
          /> ))}
        </div>
      </div>
    )
    
}
export default Home;