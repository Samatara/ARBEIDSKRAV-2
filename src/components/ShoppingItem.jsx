export default function ShoppingItem({ item, onToggle, UpdateQuantity }){
  return (
    <li>
      <label>
        {item.name}
        <input type="checkbox" checked={item.purchased} onChange={() => onToggle(item.id)}
/> 
      </label>

      <span><input type="number" value={item.quantity} min="1" onChange={(e) => UpdateQuantity(item.id, Number(e.target.value))
  }
/></span>
    </li>
  );
}