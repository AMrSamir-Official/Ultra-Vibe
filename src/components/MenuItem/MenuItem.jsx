import "./MenuItem.scss";

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.img} alt={item.name} />
      <div className="txt">
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
