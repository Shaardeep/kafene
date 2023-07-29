const tbody = document.querySelector("tbody");
console.log(tbody);

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
      data.map((customer) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
                                <td>${customer.id}</td>
                                <td>${customer.customerName}</td>
                                <td>${customer.orderDate}
                                    <br>
                                    <span class="secondry">${customer.orderTime}</span>
                                </td>
                                <td class="secondry">${customer.amount}</td>
                                <td>${customer.orderStatus}</td>              
        `;
        tbody.appendChild(tr);
      });
    });
}

orderData("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders");
