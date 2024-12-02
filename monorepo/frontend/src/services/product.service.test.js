import axios from 'axios';
import mockProducts from '../mocks/mockProducts';
import getProducts from './product.service';

jest.mock('axios');

describe('productService', () => {
  it('should return a list of products on successful API call', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });

    const result = await getProducts();

    expect(result).toEqual(mockProducts);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
  });

  it('should throw an error when the API call fail', async () => {
    const mockError = new Error('Any error');
    axios.get.mockRejectedValue(mockError);

    try {
      await getProducts();
    } catch (error) {
      expect(error).toEqual(mockError);
    }
  });
});
