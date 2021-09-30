const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio* porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
   const $precio =  document.getElementById("InputPrice");
   const precio = $precio.value;

   const $descuento = document.getElementById("InputDiscount");
   const descuento = $descuento.value;

   const precioConDescuento = calcularPrecioConDescuento(precio,descuento);

   const ResultP = document.getElementById("ResultP");
   ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */