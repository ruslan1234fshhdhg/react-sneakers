import Card from '../components/Card';/// двойной выход из home и pages

function Favorites({items,onAddToFavorite}){
    return(
        <div className="content p-40">
        <div className=" d-flex align-center justify-between mb-40">
          <h1>Мои закладки</h1> {/* */}
          <div className="search-block">
           
            
          </div>
        </div>
        <div className="d-flex flex-wrap">
        
        {items
          .map((item,index)=>(
          <Card 
          key={index} 
         
          favorited={true}
          onFavorite={onAddToFavorite}
          {...item}/// конкатенируем свойства id,name,imageUrl,price
          /> ))}
        </div>
      </div>
    )
    
}
export default Favorites;