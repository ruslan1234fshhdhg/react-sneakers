import { Link, Routes } from "react-router-dom";

function Header(props) {
  return (
<header className="d-flex justify-between align-center p-40">
       <Link to="/">{/* (5 урок- react router dom объяснение, 1:53:15, ч3) сделали переход на главную когда нажимаем на шапку*/}
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
            <span> 1205 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/favorites"> {/* (5 урок- react router dom объяснение, 1:52:15, ч2) сделали переход когда нажимаем на сердечко*/}
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
);
}

export default Header;      