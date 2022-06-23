import countapi from 'countapi-js';

countapi.get('mysite.com', 'test').then((result) => {
  console.log(result.value);
});
