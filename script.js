const URL = "mydata.json";

const mobilesData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const data = mobilesData();
data.then((data) => {
  const input_ram = document.querySelectorAll(".ram");
  const brand_ram = document.querySelectorAll(".brandRam");

  // select all product ram checkbox
  input_ram.forEach((element) => {
    const input_ram_value_attr = element.getAttribute("value");
    const input_ram_value_attr_lowercase = input_ram_value_attr.toLowerCase();

    element.addEventListener("click", function () {
      if (this.checked == true) {
        brand_ram.forEach((element) => {
          const brand_ram_text_lowercase = element.textContent.toLowerCase();
          const brand_ram_parent_elem = element.parentElement;

          // const card = document.querySelectorAll(".card");
          if (input_ram_value_attr_lowercase != brand_ram_text_lowercase) {
            brand_ram_parent_elem.style.display = "none";
          }

          if (
            (brand_ram_parent_elem.style.display = "none") &&
            input_ram_value_attr_lowercase == brand_ram_text_lowercase
          ) {
            brand_ram_parent_elem.style.display = "block";
          }
          // card.forEach((element) => {});
        });
      } else {
        brand_ram.forEach((element) => {
          const brand_ram_text_lowercase = element.textContent.toLowerCase();
          const brand_ram_parent_elem = element.parentElement;
          brand_ram_parent_elem.style.display = "block";
        });
      }
    });
  });

  data.forEach((product) => {});
});
