/* It maps over the items array, rendering each item as a list item (<li>) with a unique key attribute based on the item.id */

function GroceryList() {
  const items = [
    {id: 1, name: 'bread'},
    {id: 2, name: 'milk'},
    {id: 3, name: 'eggs'}
  ];

  return (
    <>
      <h1>Grocery List</h1>
      <ul>
        {items.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GroceryList />);
