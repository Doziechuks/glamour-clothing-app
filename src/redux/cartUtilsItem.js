export const addItemToCart = (oldCartItems, newItemToAdd) => {
  const existingCartItem = oldCartItems.find( (oldItem) => oldItem.id === newItemToAdd.id );
  if(existingCartItem){
    return oldCartItems.map((oldItem) => oldItem.id === newItemToAdd.id ? { ...oldItem, quantity: oldItem.quantity + 1 } : oldItem);
  }

  return [...oldCartItems, {...newItemToAdd, quantity: 1}]
}