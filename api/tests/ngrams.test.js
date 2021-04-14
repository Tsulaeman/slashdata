import fetch from 'node-fetch';
import 'dotenv/config';

const apiUrl = process.env.BASE_URL;
const sampleData = {
  body: 'Slashdata',
  isCaseSensitive: false,
  ngram: 1,
  length: 10,
};

describe('Tests for the get-records endpoint', () => {
  test('There are records in the DB', () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        expect(data.length).toBeGreaterThan(0);
      });
  });
  test('The word returns the correct sequence', () => {
    fetch(`${apiUrl}/ngram`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sampleData),
    })
      .then((response) => response.json())
      .then((data) => {
        expect(data.body).toEqual('Slashdata');
        fetch(`${apiUrl}/ngram/${data.id}`)
          .then((response) => response.json())
          .then((ngram) => {
            expect(ngram[0].ngram).toEqual('A');
            expect(ngram[0].count).toEqual(3);
            expect(ngram[1].ngram).toEqual('S');
            expect(ngram[1].count).toEqual(2);
          });
      });
  });
});
