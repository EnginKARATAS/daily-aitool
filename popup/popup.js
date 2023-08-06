(function callTodayAiSuggestion() {
  fetch("https://2k2agenv28.execute-api.eu-north-1.amazonaws.com/items").then(
    function (response) {
      console.log(
        response.json().then(function (fetchedData) {
          console.log(fetchedData);
          const data = fetchedData[0];
          var title = document.getElementById("title");
          var description = document.getElementById("description");
          title.innerHTML = data.aiName;
          description.innerHTML = data.description;
        })
      );
    }
  );
})();
