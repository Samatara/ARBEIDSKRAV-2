import ShoppingItem from './ShoppingItem';

export default function ShoppingList( {items, onToggle, UpdateQuantity}) {
  return (
    <section className='list'>
      <ul>
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} onToggle={onToggle} UpdateQuantity={UpdateQuantity}/>
        ))}
      </ul>
    </section>
  );
}
