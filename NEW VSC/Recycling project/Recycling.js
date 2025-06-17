  function calculatePrice() {
    const weight = document.querySelector('input[type="number"]').value;
    const price = weight * 50;
    document.getElementById('price').innerText = price;
  }