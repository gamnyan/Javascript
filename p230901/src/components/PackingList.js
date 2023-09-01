const Item = ({ name, isPacked }) => (
  <li className="item">
    {name} {isPacked && "✔"}
  </li>
);

export const PackingList = () => (
  <section>
    <h1>Sally Ride's Packing List</h1>
    <ul>
      <Item name="Space suit" isPacked={true} />
      <Item name="Helmet" isPacked={true} />
      <Item name="Photo" isPacked={false} />
    </ul>
  </section>
);
