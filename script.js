function getCharacters(done) {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      done(data);
      console.log(data);
    });
}

getCharacters((data) => {
  let main = document.querySelector(".main");

  data.results.map((personage) => {
    let article = document.createRange().createContextualFragment(`
      <article>
        <div class="image-container">
          <img src="${personage.image}" alt="${personage.name}" />
        </div>
        <h2>${personage.name}</h2>
        <span>${personage.species}</span>
        <span>${personage.status}</span>
      </article>
    `);
    main.appendChild(article);
  });
});
