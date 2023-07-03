export const handleAddToCart = (mobile, selectedStorage, selectedColor, addToCartMutation) => {
    const storage =
      mobile.options && mobile.options.storages.length === 1
        ? mobile.options.storages[0]
        : selectedStorage;
  
    const color =
      mobile.options && mobile.options.colors.length === 1
        ? mobile.options.colors[0]
        : selectedColor;
  
    if (storage && color) {
      addToCartMutation.mutate({
        id: mobile.id,
        colorCode: color.code,
        storageCode: storage.code,
      });
    }
  };
  