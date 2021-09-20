var i = document.getElementById("quantity").value;
var total = parseInt(document.getElementById("totals").innerText);
var price = new Number(total);

function buttonAdd() {
    i++;
    prices = i * price;
    document.getElementById("quantity").value = i;
    document.getElementById("totals").innerText = prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    console.log(price);
}

function buttonMinus() {
    if (i <= 1) {
        alert('số lượng sản phẩm phải lớn hơn hoặc bằng 1 !!!');
    } else {
        i--;
        document.getElementById("quantity").value = i;
    }
    if (i >= 1) {
        prices = i * price;
        document.getElementById("totals").innerText = prices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    }
    console.log(prices);
    return price;
}

function remove() {
    var x = confirm("Bạn muốn xoá sản phẩm này?");
    if (x) {
        document.getElementById('btnremove').innerHTML = "";
    }
}
/*___________________________________________________*/
var a = document.getElementById("quantity1").value;
var total1 = parseInt(document.getElementById("totals1").innerText);
var price1 = new Number(total1);

function buttonAdd1() {
    a++;
    prices1 = a * price1;
    document.getElementById("quantity1").value = a;
    document.getElementById("totals1").innerText = prices1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    return price1;
}

function buttonMinus1() {
    if (a <= 1) {
        alert('số lượng sản phẩm phải lớn hơn hoặc bằng 1 !!!');
    } else {
        a--;
        document.getElementById("quantity1").value = a;
    }
    if (a >= 1) {
        prices1 = a * price1;
        document.getElementById("totals1").innerText = prices1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    }
    return price1;
}

function remove1() {
    var x = confirm("Bạn muốn xoá sản phẩm này?");
    if (x) {
        document.getElementById('btnremove1').innerHTML = "";
    }
}
/*_________________________________________________*/
var b = document.getElementById("quantity2").value;
var total2 = parseInt(document.getElementById("totals2").innerText);
var price2 = new Number(total2);

function buttonAdd2() {
    b++;
    prices2 = b * price2;
    document.getElementById("quantity2").value = b;
    document.getElementById("totals2").innerText = prices2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    return price2;
}

function buttonMinus2() {
    if (b <= 1) {
        alert('số lượng sản phẩm phải lớn hơn hoặc bằng 1 !!!');
    } else {
        b--;
        document.getElementById("quantity2").value = b;
    }
    if (b >= 1) {
        prices2 = b * price2;
        document.getElementById("totals2").innerText = prices2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    }
    return price2;
}

function remove2() {
    var x = confirm("Bạn muốn xoá sản phẩm này?");
    if (x) {
        document.getElementById('btnremove2').innerHTML = "";
    }
}
/*_________________________________________________*/
var c = document.getElementById("quantity3").value;
var total3 = parseInt(document.getElementById("totals3").innerText);
var price3 = new Number(total3);

function buttonAdd3() {
    c++;
    prices3 = c * price3;
    document.getElementById("quantity3").value = c;
    document.getElementById("totals3").innerText = prices3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    return price3;
}

function buttonMinus3() {
    if (c <= 1) {
        alert('số lượng sản phẩm phải lớn hơn hoặc bằng 1 !!!');
    } else {
        c--;
        document.getElementById("quantity3").value = c;
    }
    if (c >= 1) {
        prices3 = c * price3;
        document.getElementById("totals3").innerText = prices3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    }
    return price3;
}

function remove3() {
    var x = confirm("Bạn muốn xoá sản phẩm này?");
    if (x) {
        document.getElementById('btnremove3').innerHTML = "";
    }
}
/*_______________________________________________________________*/