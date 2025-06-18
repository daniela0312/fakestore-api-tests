export const productSchema = {
    type: 'object',
    required: ['id', 'title', 'price', 'category', 'description', 'image'],
    properties: {
      id: { type: 'number' },
      title: { type: 'string' },
      price: { type: 'number' },
      category: { type: 'string' },
      description: { type: 'string' },
      image: { type: 'string' },
    }
  };
  
  export const userSchema = {
    type: 'object',
    required: ['id', 'username', 'email'],
    properties: {
      id: { type: 'number' },
      username: { type: 'string' },
      email: { type: 'string' },
    }
  };
  
  export const authResponseSchema = {
    type: 'object',
    required: ['token'],
    properties: {
      token: { type: 'string' },
    }
  };
  