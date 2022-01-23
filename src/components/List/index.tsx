type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function List<T>({ items, renderItem }: Props<T>) {
  return <>{items.map(renderItem)}</>;
}
