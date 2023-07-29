const tbody = document.querySelector("tbody");

let orderLocal = [];

function orderData(url) {
  fetch(url)
    .then((res) => {
      let req = res.json();
      return req;
    })
    .then((data) => {
      orderLocal = data;
      console.log(orderLocal);
      data.map((product) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
                                <td class="secondry">${product.id}</td>
                                <td>${product.medicineName}</td>
                                <td class="secondry">${product.medicineBrand}</td>
                                <td>${product.expiryDate}</td>
                                <td class="secondry">${product.unitPrice}</td>
                                <td class="secondry">${product.stock}</td>              
                                             
        `;
        tbody.appendChild(tr);
      });
    });
}

orderData("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products");
