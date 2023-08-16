document.querySelector(".btn").onclick = function () {
  document.querySelector(".btn").style.backgroundColor = "rgb(138, 203, 228)";
  let originalPrice = Number(document.querySelector("#originalPrice").value);
  let discount = Number(document.querySelector("#discount").value);

  if (originalPrice && discount) {
    let save1 = originalPrice * (discount / 100);
    let totalValue = originalPrice - save1;
    document.getElementById("finalPrice").innerHTML = totalValue.toFixed(2);
    document.getElementById("save").innerHTML = parseFloat(save1).toFixed(2);
  } else if (!originalPrice) {
    document.getElementById("finalPrice").innerHTML =
      "Please provide a price amount!";
  } else if (!discount) {
    document.getElementById("finalPrice").innerHTML = originalPrice;
    document.getElementById("save").innerHTML =
      "Please provide me a valid discount amount!";
  } else {
    document.getElementById("finalPrice").innerHTML = originalPrice;
    document.getElementById("save").innerHTML = "You don't have any discount!";
  }
};

document.querySelector("#resetBtn").onclick = function () {
  document.getElementById("finalPrice").innerHTML = "";
  document.getElementById("save").innerHTML = "";

  document.getElementById("formId").reset();
  document.querySelector(".btn").style.backgroundColor = "rgb(30, 161, 213)";
};
