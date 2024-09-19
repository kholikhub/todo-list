const Items = (key: number, todo: string, completed: boolean) => {
  return (
    <li key={key}>
      <input type="checkbox" checked={completed} />
      <span>{todo}</span>
    </li>
  );
};

export default Items;
