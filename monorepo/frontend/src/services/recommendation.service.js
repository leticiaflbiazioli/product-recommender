// criada fora para nao ser recriada toda vez
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

const getRecommendations = (
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
    // pra manter o retorno da getRecommendations consistente
    // peguei o primeiro, pois como é uma ordem decrescente, ele é o ultimo
    return [filteredProducts[0]];
  }

  return filteredProducts;
};

export default { getRecommendations };
