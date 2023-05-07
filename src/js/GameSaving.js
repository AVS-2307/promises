export default class GameSaving {
    constructor(data) {
      this.id = data.id;
      this.created = data.created;
      this.userInfo = {
        id: data.userInfo.id,
        name: data.userInfo.name,
        level: data.userInfo.level,
        points: data.userInfo.points,
      };
    }
  }
  
/* Спецификация объекта
  {
    "id": <number>, // id сохранения
    "created": <timestamp>, // timestamp создания
    "userInfo": {
      "id": <number>, // user id
      "name": <string>, // user name
      "level": <number>, // user level
      "points": <number> // user points
    }
  } */