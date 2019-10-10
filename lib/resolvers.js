const fetch = require('node-fetch')

const getTestResult = async(args) => {
  const url = `https://jsonplaceholder.typicode.com/posts/`;
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    
    const filteredResponse = jsonResponse.filter( item => item.userId === args.userId )
    return {
      name: 'A Q Khan',
      age: 31,
      response: filteredResponse
    }
  }
  catch(e) {
    console.log('Fucking error: ', e)
  }
}

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    testApiCall: (root, args) => getTestResult(args)
  },
};

module.exports = resolvers;