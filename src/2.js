const https = require('https');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = async () => {
  const url = 'https://www.example.com';
  const response = await https.get(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return getRandomInt(10, 20);
};

main().catch((error) => console.log(error));
