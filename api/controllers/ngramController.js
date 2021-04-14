import { Ngram } from '../models/index';

class NgramController {
  static index(req, res) {
    Ngram.findAll().then((results) => res.send(results));
  }

  static show(req, res) {
    const { id } = req.params;
    const counts = {}; // holds temp count of each unique ngram
    const seen = []; // ngram that has been seen
    Ngram.findByPk(id).then((result) => {
      // let's split the word into an array and filter out white space
      let word = result.body.split('').filter((letter) => letter !== ' ');
      // Here we process case sensitive letters
      word = word.map((value) => (result.isCaseSensitive ? value : value.toUpperCase()));
      const ngrams = [];
      // build the ngrams sequence
      for (let i = 0; i < word.length; i += 1) {
        ngrams.push(word.slice(i, result.ngram + i).join(''));
      }
      // Build the count of unique ngrams
      for (let x = 0; x < ngrams.length; x += 1) {
        const pointer = ngrams[x];
        if (seen.indexOf(pointer) > -1) {
          // eslint-disable-next-line no-continue
          continue;
        }
        // We use the x as the ngram
        // Initialize counts to 1
        counts[pointer] = 1;
        for (let y = x + 1; y < ngrams.length; y += 1) {
          const node = ngrams[y];
          // We traverse the y to find similar ngrams
          // only add ngrams when they have not been 'seen' and are the same
          if (pointer === node) {
            counts[pointer] += 1;
          }
          seen.push(pointer);
        }
        // push into the results
      }
      let sequence = Object.entries(counts).map(([ngram, count]) => ({
        ngram, count,
      }));
      sequence = NgramController.sort(sequence);
      res.send(sequence.slice(0, result.length));
    });
  }

  static sort(ngrams) {
    return ngrams.sort((a, b) => b.count - a.count);
  }

  static save(req, res) {
    const { body } = req;
    Ngram.create(body).then((result) => {
      res.send(result);
    });
  }
}

export default NgramController;
