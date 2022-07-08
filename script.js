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
      productsNameBtn(product);

      productRamBtn(product);

      card += ` <div class="card">
                    <div>${product.brand}</div>
                    <div>${product.name}</div>
                    <div>${product.ram}</div>
                </div>`;
    });

    const cards = document.querySelector(".cards");

    cards.innerHTML = card;

    const checkboxs = document.getElementsByTagName("input");
    for (const checkbox of checkboxs) {
      checkbox.addEventListener("click", function () {
        if (this.checked == true) {
          const checkedValue = this.value.toLowerCase();

          // console.log(this.value.toLowerCase());

          const accessAllCard = document.querySelectorAll(".card");
          accessAllCard.forEach((element) => {
            // let cardInnerHtml = element.innerHTML;

            const searchingText = element.textContent.toLocaleLowerCase();
            console.log(searchingText);

            if (searchingText.indexOf(checkedValue) != -1) {
              element.style.display = "block";
            } else {
              element.style.display = "none";
            }
          });
        } else {
          console.log("no");
        }
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

function productsNameBtn(product) {
  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  span.innerText = `${product.name}`;
  input.type = "checkbox";
  input.value = `${product.name}`;
  input.className = "productName";
  div.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  const productName = document.querySelector(".productName");
  productName.appendChild(div);
}

function productRamBtn(product) {
  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  span.innerText = `${product.ram}`;
  input.type = "checkbox";
  input.value = `${product.ram}`;
  div.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  const productRam = document.querySelector(".productRam");
  productRam.appendChild(div);
}
