fetch('stations.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('stations');
    data.forEach(station => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${station.name}</h2>
        <p>${station.city}, ${station.country}</p>
        <p>${station.genre}</p>
        <audio controls src="${station.stream}"></audio>
        <hr/>
      `;
      container.appendChild(div);
    });
  });
