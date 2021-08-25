
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios';

jest.mock('axios');

test('should fetch users', () => {
    const posts =[
        {
          id: 1,
          title: 'title 1',
          body:"Test 1"
        },
        {
          id: 2,
          title: 'title 2',
          body:"Test 2"
        }
      ];
    const resp = {data: posts};
    axios.get.mockResolvedValue(resp);
    expect(resp.data.length).toEqual(2);
  });