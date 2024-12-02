const countMatchingOptions = (formData, product) => {
  const matchingPreferences = product.preferences.filter((preference) =>
    formData.selectedPreferences.includes(preference)
  ).length;

  const matchingFeatures = product.features.filter((feature) =>
    formData.selectedFeatures.includes(feature)
  ).length;

  return {
    ...product,
    count: matchingPreferences + matchingFeatures,
  };
};

export const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  const filteredProducts = products
    .map((product) => countMatchingOptions(formData, product))
    .filter((product) => product.count > 0)
    .sort((a, b) => b.count - a.count);

  if (formData.selectedRecommendationType === 'SingleProduct') {
    return [filteredProducts[0]];
  }

  return filteredProducts;
};
