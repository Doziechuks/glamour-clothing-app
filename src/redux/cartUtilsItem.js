export const addItemToCart = (oldCartItems, newItemToAdd) => {
  const existingCartItem = oldCartItems.find( (oldItem) => oldItem.id === newItemToAdd.id );
  if(existingCartItem){
    return oldCartItems.map((oldItem) => oldItem.id === newItemToAdd.id ? { ...oldItem, quantity: oldItem.quantity + 1 } : oldItem);
  }

  return [...oldCartItems, {...newItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (oldCartItems, cartItemToRemove) => {
  const existingCartItem = oldCartItems.find((oldItem) => oldItem.id === cartItemToRemove.id);
  if(existingCartItem.quantity === 1){
    return oldCartItems.filter((oldItem) => oldItem.id !== cartItemToRemove.id)
  }
  return oldCartItems.map((oldItem) => oldItem.id === cartItemToRemove.id ? {...oldItem, quantity: oldItem.quantity - 1} : oldItem)
}