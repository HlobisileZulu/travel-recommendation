async function search() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const res = await fetch("data.json");
  const data = await res.json();

  let results = document.getElementById("results");
  results.innerHTML = "";

  if (keyword.includes("beach")) {
    display(data.beaches);
  } else if (keyword.includes("temple")) {
    display(data.temples);
  } else {
    display(data.countries);
  }
}

function display(items) {
  const results = document.getElementById("results");

  items.forEach(item => {
    results.innerHTML += `
      <h3>${item.name}</h3>
      <img src="${item.image}">
    `;
  });
}

function reset() {
  document.getElementById("results").innerHTML = "";
  document.getElementById("search").value = "";
}