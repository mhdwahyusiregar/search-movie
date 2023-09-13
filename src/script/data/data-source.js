class DataSource {
  static searchMouvie(keyword) {
    // return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`);
    return fetch(`http://www.omdbapi.com/?apikey=e8de6d13&s=${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
