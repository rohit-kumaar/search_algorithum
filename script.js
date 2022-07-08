const URL = "mydata.json";

const mobilesData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const data = mobilesData();
data.then((data) => {
  // console.table(`${element.brand} ${element.name}`)
  data.map((element) => {
    const div = document.createElement("div");
    div.classList = "checkbox";
    const label = document.createElement("label");
    div.appendChild(label);
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "brandName";
    label.innerText = `${element.brand}`;
    label.appendChild(input);
    const body = document.querySelector("body");
    body.appendChild(div);
  });
});

function createElement() {
    
}
