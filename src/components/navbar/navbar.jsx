import style from "./navbar.module.css";
export function Navbar() {
  return (
    <div className={style.navbar}>
      <h1 className={style.logo}>conduit</h1>
      <ul className={style.navitems}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sign in</a>
        </li>
        <li>
          <a href="">Sign up</a>
        </li>
      </ul>
    </div>
  );
}
