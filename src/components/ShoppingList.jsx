import ShoppingItem from './ShoppingItem';

export default function ShoppingList() {
  return (
    <section>
      <ul>
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
