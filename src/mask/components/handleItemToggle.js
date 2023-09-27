export const handleItemToggle = ({ index, selectedItems, setSelectedItems }) => {
  const itemIndex = selectedItems.indexOf(index)
  if (itemIndex === -1) {
    setSelectedItems([...selectedItems, index])
  } else {
    const updatedItems = [...selectedItems]
    updatedItems.splice(itemIndex, 1)
    setSelectedItems(updatedItems)
  }
}
