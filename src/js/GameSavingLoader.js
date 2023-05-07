import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((response) => new GameSaving(JSON.parse(response)))
      .catch((error) => console.log(error.message));
  }
}