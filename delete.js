var checkboxes = document.getElementsByTagName("input");
var listArray = [];
var filter = [];
var tempArray = jsonf["mobiles"];
// console.log(tempArray);
var category;
for (var checkbox of checkboxes) {
  console.log(checkboxes);

  checkbox.addEventListener("click", function () {
    if (this.checked == true) {
      var valueName = this.value;
      console.log("valuename", valueName);
      listArray.push(valueName);
      category = this.className;
    } else {
      listArray = listArray.filter((e) => e !== this.value);
    }
    for (var i = 0; i < listArray.length; i++) {
      filter.push(
        getproduct(tempArray, { key: category, value: listArray[i] })
      );
      // console.log(filter);
      // listArray=[];
    }
    // console.log(filter);
    tempArray = filter;
    console.log(tempArray);
    // console.log(category);
  });
}
