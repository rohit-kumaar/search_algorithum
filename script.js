const URL = "mydata.json";

const mobilesData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const data = mobilesData();
data
  .then((data) => {
    let productNameList = "";
    let productRamList = "";
    data.forEach((product) => {
      productNameList += ` <div>
                    <label><input type="checkbox" class="productName"/>${product.name}</label>
              </div>`;

      productRamList += `<div>
                            <label><input type="checkbox" />${product.ram}</label>
                        </div>`;
    });

    const productName = document.querySelector(".productName");
    const productRam = document.querySelector(".productRam");
    productName.innerHTML = productNameList;
    productRam.innerHTML = productRamList;
  })
  .catch((err) => {
    console.log(err);
  });


  