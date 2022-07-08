const URL = "mydata.json";

const mobilesData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const data = mobilesData();
data
  .then((data) => {
    let card = "";
    data.forEach((product) => {
      const productName = document.querySelector(".productName");
      createElements(product.name, "name", productName);
      const productRam = document.querySelector(".productRam");
      createElements(product.ram, "ram", productRam);

      card += ` <div class="card">
                    <div>${product.brand}</div>
                    <div>${product.name}</div>
                    <div>${product.ram}</div>
                </div>`;
    });

    const cards = document.querySelector(".cards");

    cards.innerHTML = card;
  })
  .catch((err) => {
    console.log(err);
  });

function createElements(product, className, appendClass) {
  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  span.innerText = `${product}`;
  input.type = "checkbox";
  input.classList = className;
  div.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  appendClass.appendChild(div);
}

const checkbox = document.getElementsByClassName("name");
console.log(checkbox);

const ram = document.getElementsByClassName("ram");
console.log(ram);

const card = document.getElementsByClassName("card");
console.log(card);
