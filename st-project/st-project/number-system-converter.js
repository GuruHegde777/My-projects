const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");
const error = document.getElementById("error");

let fromNS = "Binary", toNS = "Binary";

fromSelected.addEventListener("change", function () {
  fromNS = fromSelected.options[fromSelected.selectedIndex].text;
  from.placeholder = fromNS + " Number";
});

toSelected.addEventListener("change", function () {
  toNS = toSelected.options[toSelected.selectedIndex].text;
  to.placeholder = toNS + " Number";
});

from.addEventListener("input", function () {
  error.style.display = "none";
});


function binary(value, base = 2) {
  var [integer, fraction = ''] = value.toString().split('.');
  return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction
    .split('')
    .reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}
function decimalToBinary(num, k_prec) {
  let binary = "";

  let Integral = parseInt(num, 10);

  let fractional = num - Integral;

  while (Integral > 0) {
    let rem = Integral % 2;
    binary +=
      (String.fromCharCode(rem + '0'.charCodeAt()));
    Integral = parseInt(Integral / 2, 10);
  }
  binary = reverse(binary);
  binary += ('.');
  while (k_prec-- > 0) {
    fractional *= 2;
    let fract_bit = parseInt(fractional, 10);

    if (fract_bit == 1) {
      fractional -= fract_bit;
      binary +=
        String.fromCharCode(1 + '0'.charCodeAt());
    }
    else {
      binary +=
        String.fromCharCode(0 + '0'.charCodeAt());
    }
  }

  return binary;
}



function reverse(input) {
  let temparray = input.split('');
  let left, right = 0;
  right = temparray.length - 1;

  for (left = 0; left < right; left++, right--) {
    let temp = temparray[left];
    temparray[left] = temparray[right];
    temparray[right] = temp;
  }
  return temparray.join("");
}
function binaryToHexadecimal(value) {
  base = 16;
  document.getElementById('div2').innerHTML = "";
  // var dec = 0;
  var a = value;
  var c = 0;
  var m = 0;
  var s = 0;
  var p = 0;
  var decpart = [];
  if (parseFloat(a) == parseInt(a)) {
    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(a);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (2 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 2 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else if (Math.trunc(parseFloat(a)) == 0) {
    var j = 0;
    while (j < a.length) {
      if (a[j] != '.') {
        decpart.push(a[j]);
        j++;
      }
      else
        j++;
    }
    for (var i = 0; i < decpart.length; i++) {
      m = decpart[i] * (2 ** (-i));
      document.getElementById('div2').innerHTML += decpart[i] + " x " + 2 + "^" + -i + " = " + m + "</br>";
      s = s + m;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else {
    document.getElementById('div2').innerHTML = "";
    var j = (a.length) - 1;
    var s1 = 0;
    var intpart = Math.trunc(parseFloat(a));
    intpart = String(intpart);


    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(intpart);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (2 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 2 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;

    }
    document.getElementById('div2').innerHTML += intpart + " in Decimal = " + s + "<br><br>";

    while (a[j] != '.') {

      decpart.push(a[j]);
      j--;

    }
    p = 1;
    for (var k = (decpart.length) - 1; k >= 0; k--) {
      m = decpart[k] * (2 ** (-p));
      document.getElementById('div2').innerHTML += decpart[k] + " x " + 2 + "^" + -p + " = " + m + "</br>";
      s1 = s1 + m;
      p++;
    }
    var x = parseFloat(a) % parseInt(intpart);
    document.getElementById('div2').innerHTML += x.toFixed((decpart.length) - 1) + " in Decimal = " + s1 + "<br>";
    document.getElementById('div2').innerHTML += "<br>" + a + " in Decimal = " + (s + s1);
    dec = s + s1;
  }
  var i = dec;
  var n = i;
  var q = 0;
  var r = 0;
  var lst = [];
  var finalans = "";
  var a = "";
  if (Math.trunc(n) == n) {
    function myLoop() {
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 16);
      r = parseInt(i % 16);
      i = q;
      if (r == 10)
        lst.push('A');

      else if (r == 11)
        lst.push('B');
      else if (r == 12)
        lst.push('C');
      else if (r == 13)
        lst.push('D');
      else if (r == 14)
        lst.push('E');
      else if (r == 15)
        lst.push('F');
      else
        lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> —— " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 16);
        r = parseInt(i % 16);
        i = q;
        if (r == 10)
          lst.push('A');

        else if (r == 11)
          lst.push('B');
        else if (r == 12)
          lst.push('C');
        else if (r == 13)
          lst.push('D');
        else if (r == 14)
          lst.push('E');
        else if (r == 15)
          lst.push('F');
        else
          lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Hexa decimal = " + finalans + "</h2>";

    }
    myLoop();
  }

  else if (Math.trunc(n) == 0) {
    function dcml() {
      var lst1 = [];
      var d = n;
      var e = d;

      if (Math.trunc(d * 16) == 10)
        lst1.push('A');

      else if (Math.trunc(d * 16) == 11)
        lst1.push('B');
      else if (Math.trunc(d * 16) == 12)
        lst1.push('C');
      else if (Math.trunc(d * 16) == 13)
        lst1.push('D');
      else if (Math.trunc(d * 16) == 14)
        lst1.push('E');
      else if (Math.trunc(d * 16) == 15)
        lst1.push('F');
      else
        lst1.push(Math.trunc(d * 16));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + (d * 16) + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 16) % 1).toFixed(4);
        if (Math.trunc(d * 16) == 10)
          lst1.push('A');

        else if (Math.trunc(d * 16) == 11)
          lst1.push('B');
        else if (Math.trunc(d * 16) == 12)
          lst1.push('C');
        else if (Math.trunc(d * 16) == 13)
          lst1.push('D');
        else if (Math.trunc(d * 16) == 14)
          lst1.push('E');
        else if (Math.trunc(d * 16) == 15)
          lst1.push('F');
        else

          lst1.push(Math.trunc(d * 16));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + (d * 16), "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      //document.write("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in Hexa decimal = ", final, "</h2>");

    }
    dcml();
    document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in Hexa decimal = 0" + a + "</h2>";

  }


  else {
    function myLoop() {

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16</label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 16);
      r = parseInt(i % 16);
      i = q;
      if (r == 10)
        lst.push('A');

      else if (r == 11)
        lst.push('B');
      else if (r == 12)
        lst.push('C');
      else if (r == 13)
        lst.push('D');
      else if (r == 14)
        lst.push('E');
      else if (r == 15)
        lst.push('F');
      else
        lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> —— " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 16);
        r = parseInt(i % 16);
        i = q;
        if (r == 10)
          lst.push('A');

        else if (r == 11)
          lst.push('B');
        else if (r == 12)
          lst.push('C');
        else if (r == 13)
          lst.push('D');
        else if (r == 14)
          lst.push('E');
        else if (r == 15)
          lst.push('F');
        else
          lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Hexa decimal = " + finalans + "</h2>";


    }


    myLoop();

    function dcml() {
      var lst1 = [];
      var d = (n % (parseInt(n))).toFixed(4);
      var e = d;

      if (Math.trunc(d * 16) == 10)
        lst1.push('A');

      else if (Math.trunc(d * 16) == 11)
        lst1.push('B');
      else if (Math.trunc(d * 16) == 12)
        lst1.push('C');
      else if (Math.trunc(d * 16) == 13)
        lst1.push('D');
      else if (Math.trunc(d * 16) == 14)
        lst1.push('E');
      else if (Math.trunc(d * 16) == 15)
        lst1.push('F');
      else

        lst1.push(Math.trunc(d * 16));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + (d * 16) + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 16) % 1).toFixed(4);
        if (Math.trunc(d * 16) == 10)
          lst1.push('A');

        else if (Math.trunc(d * 16) == 11)
          lst1.push('B');
        else if (Math.trunc(d * 16) == 12)
          lst1.push('C');
        else if (Math.trunc(d * 16) == 13)
          lst1.push('D');
        else if (Math.trunc(d * 16) == 14)
          lst1.push('E');
        else if (Math.trunc(d * 16) == 15)
          lst1.push('F');
        else

          lst1.push(Math.trunc(d * 16));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + (d * 16) + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in Hexa decimal = " + final + "</h2>";

    }
    dcml();
    document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Hexa decimal = " + a + "</h2>";


  }
}


function binaryToOctal(value) {
  base = 8;
  document.getElementById('div2').innerHTML = "";
  // var dec = 0;
  var a = value;
  var c = 0;
  var m = 0;
  var s = 0;
  var p = 0;
  var decpart = [];
  if (parseFloat(a) == parseInt(a)) {
    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(a);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (2 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 2 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else if (Math.trunc(parseFloat(a)) == 0) {
    var j = 0;
    while (j < a.length) {
      if (a[j] != '.') {
        decpart.push(a[j]);
        j++;
      }
      else
        j++;
    }
    for (var i = 0; i < decpart.length; i++) {
      m = decpart[i] * (2 ** (-i));
      document.getElementById('div2').innerHTML += decpart[i] + " x " + 2 + "^" + -i + " = " + m + "</br>";
      s = s + m;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else {
    document.getElementById('div2').innerHTML = "";
    var j = (a.length) - 1;
    var s1 = 0;
    var intpart = Math.trunc(parseFloat(a));
    intpart = String(intpart);


    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(intpart);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (2 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 2 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;

    }
    document.getElementById('div2').innerHTML += intpart + " in Decimal = " + s + "<br><br>";

    while (a[j] != '.') {

      decpart.push(a[j]);
      j--;

    }
    p = 1;
    for (var k = (decpart.length) - 1; k >= 0; k--) {
      m = decpart[k] * (2 ** (-p));
      document.getElementById('div2').innerHTML += decpart[k] + " x " + 2 + "^" + -p + " = " + m + "</br>";
      s1 = s1 + m;
      p++;
    }
    var x = parseFloat(a) % parseInt(intpart);
    document.getElementById('div2').innerHTML += x.toFixed((decpart.length) - 1) + " in Decimal = " + s1 + "<br>";
    document.getElementById('div2').innerHTML += "<br>" + a + " in Decimal = " + (s + s1);
    dec = s + s1;
  }
  var i = dec;
  var n = i;
  var q = 0;
  var r = 0;
  var lst = [];
  var finalans = "";
  var a = "";
  if (Math.trunc(n) == n) {
    function myLoop1() {
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >", parseInt(i), " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 8);
      r = parseInt(i % 8);
      i = q;
      lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> —— " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 8);
        r = parseInt(i % 8);
        i = q;
        lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Octal = " + finalans + "</h2>";

    }
    myLoop1();
  }

  else if (Math.trunc(n) == 0) {
    function dcml1() {
      var lst1 = [];
      var d = n;
      var e = d;

      lst1.push(Math.trunc(d * 8));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + (d * 8) + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 8) % 1).toFixed(4);
        lst1.push(Math.trunc(d * 8));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + (d * 8) + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      //document.write("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in octal = ", final, "</h2>");

    }
    dcml1();
    document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in octal = 0" + a + "</h2>";

  }


  else {
    function myLoop1() {

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 8);
      r = parseInt(i % 8);
      i = q;
      lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> —— " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 8);
        r = parseInt(i % 8);
        i = q;
        lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Octal = " + finalans + "</h2>";


    }


    myLoop1();

    function dcml1() {
      var lst1 = [];
      var d = (n % (parseInt(n))).toFixed(4);
      var e = d;

      lst1.push(Math.trunc(d * 8));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + (d * 8) + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 8) % 1).toFixed(4);
        lst1.push(Math.trunc(d * 8));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + (d * 8) + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in Octal = 0." + final + "</h2>";

    }
    dcml1();
    document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Octal = " + a + "</h2>";

  }
}

function binaryToDecimal(value) {
  base = 10;
  document.getElementById('div2').innerHTML = "";
  // var dec = 0;
  var a = value;
  var c = 0;
  var m = 0;
  var s = 0;
  var p = 0;
  var decpart = [];
  if (parseFloat(a) == parseInt(a)) {
    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(a);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (2 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 2 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else if (Math.trunc(parseFloat(a)) == 0) {
    var j = 0;
    while (j < a.length) {
      if (a[j] != '.') {
        decpart.push(a[j]);
        j++;
      }
      else
        j++;
    }
    for (var i = 0; i < decpart.length; i++) {
      m = decpart[i] * (2 ** (-i));
      document.getElementById('div2').innerHTML += decpart[i] + " x " + 2 + "^" + -i + " = " + m + "</br>";
      s = s + m;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else {
    document.getElementById('div2').innerHTML = "";
    var j = (a.length) - 1;
    var s1 = 0;
    var intpart = Math.trunc(parseFloat(a));
    intpart = String(intpart);


    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(intpart);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (2 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 2 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;

    }
    document.getElementById('div2').innerHTML += intpart + " in Decimal = " + s + "<br><br>";

    while (a[j] != '.') {

      decpart.push(a[j]);
      j--;

    }
    p = 1;
    for (var k = (decpart.length) - 1; k >= 0; k--) {
      m = decpart[k] * (2 ** (-p));
      document.getElementById('div2').innerHTML += decpart[k] + " x " + 2 + "^" + -p + " = " + m + "</br>";
      s1 = s1 + m;
      p++;
    }
    var x = parseFloat(a) % parseInt(intpart);
    document.getElementById('div2').innerHTML += x.toFixed((decpart.length) - 1) + " in Decimal = " + s1 + "<br>";
    document.getElementById('div2').innerHTML += "<br>" + a + " in Decimal = " + (s + s1);
    dec = s + s1;
  }
}

function decimalToOctal(value) {
  var i = value;
  var n = i;
  var q = 0;
  var r = 0;
  var lst = [];
  var finalans = "";
  var a = "";
  if (Math.trunc(n) == n) {
    function myLoop1() {
      document.getElementById('div2').innerHTML = "";

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 8);
      r = parseInt(i % 8);
      i = q;
      lst.push(r);
      const timer = ms => new Promise(res => setTimeout(res, ms))
      async function load() {
        while (q >= 1) {
          await timer(1000);
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  " + r + "</label></td></tr></table>";  //  your code here
          q = parseInt(i / 8);
          r = parseInt(i % 8);
          i = q;
          lst.push(r);
        }
        document.getElementById('div2').innerHTML += "</br>";
        lst.reverse();
        finalans = lst.join("");
        document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Octal = " + finalans + "</h2>";
      }
      load();
    }
    myLoop1();
  }

  else if (Math.trunc(n) == 0) {
    function dcml1() {
      var lst1 = [];
      var d = n;
      var e = d;

      lst1.push(Math.trunc(d * 8));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + d * 8 + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 8) % 1).toFixed(4);
        lst1.push(Math.trunc(d * 8));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + d * 8 + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      //document.getElementById('div2').innerHTML +=("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in octal = ", final, "</h2>");

    }
    dcml1();
    document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in octal = 0" + a + "</h2>";

  }


  else {
    function myLoop1() {
      document.getElementById('div2').innerHTML = "";

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 8);
      r = parseInt(i % 8);
      i = q;
      lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 8);
        r = parseInt(i % 8);
        i = q;
        lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Octal = " + finalans + "</h2>";


    }


    myLoop1();

    function dcml1() {

      var lst1 = [];
      var d = (n % (parseInt(n))).toFixed(4);
      var e = d;

      lst1.push(Math.trunc(d * 8));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + d * 8 + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 8) % 1).toFixed(4);
        lst1.push(Math.trunc(d * 8));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 8 = " + d * 8 + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in Octal = " + final + "</h2>";

    }
    dcml1();
    document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Octal = " + a + "</h2>";

  }
}
function decimalToHex(value) {
  var i = value;
  var n = i;
  var q = 0;
  var r = 0;
  var lst = [];
  var finalans = "";
  var a = "";
  if (Math.trunc(n) == n) {
    function myLoop() {
      document.getElementById('div2').innerHTML = "";

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 16);
      r = parseInt(i % 16);
      i = q;
      if (r == 10)
        lst.push('A');

      else if (r == 11)
        lst.push('B');
      else if (r == 12)
        lst.push('C');
      else if (r == 13)
        lst.push('D');
      else if (r == 14)
        lst.push('E');
      else if (r == 15)
        lst.push('F');
      else
        lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>" + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 16);
        r = parseInt(i % 16);
        i = q;
        if (r == 10)
          lst.push('A');

        else if (r == 11)
          lst.push('B');
        else if (r == 12)
          lst.push('C');
        else if (r == 13)
          lst.push('D');
        else if (r == 14)
          lst.push('E');
        else if (r == 15)
          lst.push('F');
        else
          lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Hexa decimal = " + finalans + "</h2>";
    }
    myLoop();
  }

  else if (Math.trunc(n) == 0) {
    function dcml() {
      var lst1 = [];
      var d = n;
      var e = d;

      if (Math.trunc(d * 16) == 10)
        lst1.push('A');

      else if (Math.trunc(d * 16) == 11)
        lst1.push('B');
      else if (Math.trunc(d * 16) == 12)
        lst1.push('C');
      else if (Math.trunc(d * 16) == 13)
        lst1.push('D');
      else if (Math.trunc(d * 16) == 14)
        lst1.push('E');
      else if (Math.trunc(d * 16) == 15)
        lst1.push('F');
      else
        lst1.push(Math.trunc(d * 16));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 16) % 1).toFixed(4);
        if (Math.trunc(d * 16) == 10)
          lst1.push('A');

        else if (Math.trunc(d * 16) == 11)
          lst1.push('B');
        else if (Math.trunc(d * 16) == 12)
          lst1.push('C');
        else if (Math.trunc(d * 16) == 13)
          lst1.push('D');
        else if (Math.trunc(d * 16) == 14)
          lst1.push('E');
        else if (Math.trunc(d * 16) == 15)
          lst1.push('F');
        else

          lst1.push(Math.trunc(d * 16));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      //document.getElementById('div2').innerHTML +=("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in Hexa decimal = ", final, "</h2>");

    }
    dcml();
    document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in Hexa decimal = 0" + a + "</h2>";

  }


  else {
    function myLoop() {
      document.getElementById('div2').innerHTML = "";

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16</label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 16);
      r = parseInt(i % 16);
      i = q;
      if (r == 10)
        lst.push('A');

      else if (r == 11)
        lst.push('B');
      else if (r == 12)
        lst.push('C');
      else if (r == 13)
        lst.push('D');
      else if (r == 14)
        lst.push('E');
      else if (r == 15)
        lst.push('F');
      else
        lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 16);
        r = parseInt(i % 16);
        i = q;
        if (r == 10)
          lst.push('A');

        else if (r == 11)
          lst.push('B');
        else if (r == 12)
          lst.push('C');
        else if (r == 13)
          lst.push('D');
        else if (r == 14)
          lst.push('E');
        else if (r == 15)
          lst.push('F');
        else
          lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Hexa decimal = " + finalans + "</h2>";


    }


    myLoop();

    function dcml() {
      var lst1 = [];
      var d = (n % (parseInt(n))).toFixed(4);
      var e = d;

      if (Math.trunc(d * 16) == 10)
        lst1.push('A');

      else if (Math.trunc(d * 16) == 11)
        lst1.push('B');
      else if (Math.trunc(d * 16) == 12)
        lst1.push('C');
      else if (Math.trunc(d * 16) == 13)
        lst1.push('D');
      else if (Math.trunc(d * 16) == 14)
        lst1.push('E');
      else if (Math.trunc(d * 16) == 15)
        lst1.push('F');
      else

        lst1.push(Math.trunc(d * 16));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 16) % 1).toFixed(4);
        if (Math.trunc(d * 16) == 10)
          lst1.push('A');

        else if (Math.trunc(d * 16) == 11)
          lst1.push('B');
        else if (Math.trunc(d * 16) == 12)
          lst1.push('C');
        else if (Math.trunc(d * 16) == 13)
          lst1.push('D');
        else if (Math.trunc(d * 16) == 14)
          lst1.push('E');
        else if (Math.trunc(d * 16) == 15)
          lst1.push('F');
        else

          lst1.push(Math.trunc(d * 16));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in Hexa decimal = " + final + "</h2>";

    }
    dcml();
    document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Hexa decimal = " + a + "</h2>";
  }
}
function decimalToBinaryAnime(value) {

  var i = value;
  var n = i;
  var q = 0;
  var r = 0;
  var lst = [];
  var finalans = "";
  var a = "";
  if (Math.trunc(n) == n) {
    function myLoop() {
      document.getElementById('div2').innerHTML = "";
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 2);
      r = parseInt(i % 2);
      i = q;
      lst.push(r);
      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 2);
        r = parseInt(i % 2);
        i = q;
        lst.push(r);
      }
      document.getElementById('div2').innerHTML += "</br>";
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Binary = " + finalans + "</h2>";

    }
    myLoop();
  }

  else if (Math.trunc(n) == 0) {

    function dcml() {
      var lst1 = [];
      var d = n;
      var e = d;

      lst1.push(Math.trunc(d * 2));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 2) % 1).toFixed(4);
        lst1.push(Math.trunc(d * 2));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";

      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      //document.write("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in binary = ", final, "</h2>");

    }
    dcml();
    document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in Binary = 0" + a + "</h2>";

  }


  else {
    function myLoop() {
      document.getElementById('div2').innerHTML = "";

      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
      q = parseInt(i / 2);
      r = parseInt(i % 2);
      i = q;
      lst.push(r);

      while (q >= 1) {
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  " + r + "</label></td></tr></table>";  //  your code here
        q = parseInt(i / 2);
        r = parseInt(i % 2);
        i = q;
        lst.push(r);
      }
      document.getElementById('div2').innerHTML += ("</br>");
      lst.reverse();
      finalans = lst.join("");
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Binary = " + finalans + "</h2>";


    }


    myLoop();

    function dcml() {
      var lst1 = [];
      var d = (n % (parseInt(n))).toFixed(4);
      var e = d;

      lst1.push(Math.trunc(d * 2));
      document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";
      for (var j = 0; j < 10; j++) {
        d = ((d * 2) % 1).toFixed(4);
        lst1.push(Math.trunc(d * 2));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";
      }
      let final = lst1.join("");
      finalans = finalans.concat(".");
      a = finalans.concat(final);
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in binary = " + a + "</h2>";

    }
    dcml();
    document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Binary = " + a + "</h2>";

  }
}


function hexaToOthers(value,b){
  
  document.getElementById('div2').innerHTML = "";
  base = b;
  
  var dec = 0;
  var a = value;
  var c = 0;
  var m = 0;
  var s = 0;
  var p = 0;
  var flag = 0;
  var decpart = [];
  for(var y =0;y<a.length;y++)
  {
      if(a[y] == '.'){
      flag = 1;
      break;
      }
  
  }
  if(flag == 0)
  {
      
      function reverseString(str) 
      {
          return str.split("").join("");
      }
      c = reverseString(a);
      for(var i = (c.length)-1; i>=0;i--)
      {  
          if(c[p] == 'A' || c[p] == 'a')
          m = "10"*(16**i);
          else if(c[p] == 'B' || c[p] == 'b')
          m = "11"*(16**i);
          else if(c[p] == 'C' || c[p] == 'c')
          m = "12"*(16**i);
          else if(c[p] == 'D' || c[p] == 'd')
          m = "13"*(16**i);
          else if(c[p] == 'E' || c[p] == 'e')
          m = "14"*(16**i);
          else if(c[p] == 'F' || c[p] == 'f')
          m = "15"*(16**i);
          else
          m = c[p]*(16**i);
          document.getElementById('div2').innerHTML +=c[p]+" x "+ 16+"^"+i+" = "+m+"</br>";
          s = s + m;
          p++;
      }
      document.getElementById('div2').innerHTML +=a+" in Decimal = "+s;
      dec = s;
  }
  else if((a[0] == 0 && a[1] == '.') || a[0] == '.')
  { 
      
      var j = 0;
      while(j < a.length)
      {
          if(a[j] != '.')
          {
          decpart.push(a[j]);
          j++;
          }
          else
          j++;
      }
      for(var i = 0; i<decpart.length;i++)
      {
          if(decpart[i] == 'A' || decpart[i] == 'a')
          m = "10"*(16**(-i));
          else if(decpart[i] == 'B' || decpart[i] == 'b')
          m = "11"*(16**(-i));
          else if(decpart[i] == 'C' || decpart[i] == 'c')
          m = "12"*(16**(-i));
          else if(decpart[i] == 'D' || decpart[i] == 'd')
          m = "13"*(16**(-i));
          else if(decpart[i] == 'E' || decpart[i] == 'e')
          m = "14"*(16**(-i));
          else if(decpart[i] == 'F' || decpart[i] == 'f')
          m = "15"*(16**(-i));
          else
          m = decpart[i]*(16**(-i));
          document.getElementById('div2').innerHTML +=decpart[i]+" x "+ 16+"^"+-i+" = "+m.toFixed(6)+"</br>";
          s = s + m;
      }
      document.getElementById('div2').innerHTML +=a+" in Decimal = "+s.toFixed(4);  
      dec = s;
  }
  else
  {   
      
      var j = (a.length)-1;
      var s1 = 0;
      for(var x = 0;x<a.length;x++)
      {
        if(a[x] == 'A' || a[x] == 'a')
        a[x] = 10;
        else if(a[x] == 'B' || a[x] == 'b')
        a[x] = 11;
        else if(a[x] == 'C' || a[x] == 'c')
        a[x] = 12;
        else if(a[x] == 'D' || a[x] == 'd')
        a[x] = 13;
        else if(a[x] == 'E' || a[x] == 'e')
        a[x] = 14;
        else if(a[x] == 'F' || a[x] == 'f')
        a[x] = 15;
        else
        a[x] = a[x];
        
      }
  
  
      var intpart = Math.trunc(parseFloat(a));
      intpart = String(intpart);
  
  
      function reverseString(str) 
      {
          return str.split("").join("");
      }
      c = reverseString(intpart);
      for(var i = (c.length)-1; i>=0;i--)
      {   
          if(c[p] == 'A' || c[p] == 'a')
          m = "10"*(16**i);
          else if(c[p] == 'B' || c[p] == 'b')
          m = "11"*(16**i);
          else if(c[p] == 'C' || c[p] == 'c')
          m = "12"*(16**i);
          else if(c[p] == 'D' || c[p] == 'd')
          m = "13"*(16**i);
          else if(c[p] == 'E' || c[p] == 'e')
          m = "14"*(16**i);
          else if(c[p] == 'F' || c[p] == 'f')
          m = "15"*(16**i);
          else
          m = c[p]*(16**i);
          document.getElementById('div2').innerHTML +=c[p]+" x "+ 16+"^"+i+" = "+m+"</br>";
          s = s + m;
          p++;
      
      }
      document.getElementById('div2').innerHTML +=intpart+" in Decimal = "+s+"<br><br>";
     
      while(a[j] != '.')
      {
         
          decpart.push(a[j]);
          j--;
          
      }
      p = 1;
      for(var k = (decpart.length) - 1; k >=0; k--)
      {
          if(decpart[k] == 'A' || decpart[k] == 'a')
          m = "10"*(16**(-p));
          else if(decpart[k] == 'B' || decpart[k] == 'b')
          m = "11"*(16**(-p));
          else if(decpart[k] == 'C' || decpart[k] == 'c')
          m = "12"*(16**(-p));
          else if(decpart[k] == 'D' || decpart[k] == 'd')
          m = "13"*(16**(-p));
          else if(decpart[k] == 'E' || decpart[k] == 'e')
          m = "14"*(16**(-p));
          else if(decpart[k] == 'F' || decpart[k] == 'f')
          m = "15"*(16**(-p));
          else
  
          m = decpart[k]*(16**(-p));
          document.getElementById('div2').innerHTML +=decpart[k]+" x "+ 16+"^"+-p+" = "+m+"</br>";
          s1 = s1 + m;
          p++;
      }
      var x = parseFloat(a) % parseInt(intpart);
      document.getElementById('div2').innerHTML +=x.toFixed((decpart.length)-1)+" in Decimal = "+s1+"<br>";
      document.getElementById('div2').innerHTML +="<br>"+a+" in Decimal = "+(s+s1);
      dec = s+s1;
  }
  
  
  if(base == 2)
  {
          var i = dec;
          var n = i;               
          var q = 0;
          var r = 0;
          var lst = [];
          var finalans = "";
          var a = ""; 
          if(Math.trunc(n) == n)
          {
          function myLoop1() 
          {   
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ parseInt(i)+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
              q = parseInt(i / 2);
              r = parseInt(i % 2);
              i = q;
              lst.push(r);
              
              while (q >= 1) 
              {            
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ i+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> "+ r+ "</label></td></tr></table>";  //  your code here
                  q = parseInt(i / 2);
                  r = parseInt(i % 2);
                  i = q;
                  lst.push(r);         
              }
              document.getElementById('div2').innerHTML +="</br>";
              lst.reverse();
              finalans = lst.join("");
              document.getElementById('div2').innerHTML +="<h2 style='font-family:sans-serif;margin-left:200px'>"+ Math.trunc(n)+ " in Binary = "+ finalans+ "</h2>";
                  
          }  
          myLoop1();
      }
  
        else if(Math.trunc(n) == 0)
        {
          function dcml1() 
          {
              var lst1 = [];
              var d = n;
              var e = d;
  
              lst1.push(Math.trunc(d * 2));
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 2 = "+ (d * 2)+ "</td></tr></table>";
              for (var j = 0; j < 10; j++)
               {
                  d = ((d * 2) % 1).toFixed(4);
                  lst1.push(Math.trunc(d * 2));
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 2 = "+ (d * 2)+ "</td></tr></table>";
  
              }
              let final = lst1.join("");
              finalans = finalans.concat(".");
              a = finalans.concat(final);
              //document.getElementById('div2').innerHTML +="<h2 style='margin-left:200px;font-family:sans-serif;'>"+e+" in octal = "+ final+ "</h2>");
  
          }
          dcml1();
          document.getElementById('div2').innerHTML +="<h2 style='font-family:sans-serif;margin-left:200px'>Hence "+ n+ " in Binary = 0"+ a+ "</h2>";
  
        }
        
  
          else{
              function myLoop1() 
          {         
              
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ parseInt(i)+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
              q = parseInt(i / 2);
              r = parseInt(i % 2);
              i = q;
              lst.push(r);
             
              while (q >= 1) 
              {        
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ i+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> "+ r+ "</label></td></tr></table>";  //  your code here
                  q = parseInt(i / 2);
                  r = parseInt(i % 2);
                  i = q;
                  lst.push(r);         
              }
              document.getElementById('div2').innerHTML +="</br>";
              lst.reverse();
              finalans = lst.join("");
              document.getElementById('div2').innerHTML +="<h2 style='font-family:sans-serif;margin-left:200px'>"+ Math.trunc(n)+ " in Binary = "+ finalans+ "</h2>";
                 
  
          }
      
      
          myLoop1();
      
          function dcml1() 
          {
              var lst1 = [];
              var d = (n % (parseInt(n))).toFixed(4);
              var e = d;
  
              lst1.push(Math.trunc(d * 2));
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 2 = "+ (d * 2)+ "</td></tr></table>";
              for (var j = 0; j < 10; j++)
               {
                  d = ((d * 2) % 1).toFixed(4);
                  lst1.push(Math.trunc(d * 2));
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 2 = "+ (d * 2)+ "</td></tr></table>";
  
              }
              let final = lst1.join("");
              finalans = finalans.concat(".");
              a = finalans.concat(final);
              document.getElementById('div2').innerHTML +="<h2 style='margin-left : 200px;font-family:sans-serif;'>"+e+" in Binary = 0."+ final+ "</h2>";
  
          }
          dcml1();
          document.getElementById('div2').innerHTML +="<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence "+ n+ " in Binary = "+ a+ "</h2>";
  
      }
  }
  
  
  else if(base == 8)
  {
      var i = dec;
          var n = i;               
          var q = 0;
          var r = 0;
          var lst = [];
          var finalans = "";
          var a = "";
          if(Math.trunc(n) == n)
          {
          function myLoop() 
          {   
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ parseInt(i)+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
              q = parseInt(i / 8);
              r = parseInt(i % 8);
              i = q;
              
                  lst.push(r);      
              
              while (q >= 1) 
              {            
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ i+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  "+ r+ "</label></td></tr></table>";  //  your code here
                  q = parseInt(i / 8);
                  r = parseInt(i % 8);
                  i = q;
                  
                  lst.push(r);         
              }
              document.getElementById('div2').innerHTML +="</br>";
              lst.reverse();
              finalans = lst.join("");
              document.getElementById('div2').innerHTML +="<h2 style='font-family:sans-serif;margin-left:200px'>"+ Math.trunc(n)+ " in Octal = "+ finalans+ "</h2>";
                  
          }  
          myLoop();
      }
  
        else if(Math.trunc(n) == 0)
        {
          function dcml() 
          {
              var lst1 = [];
              var d = n;
              var e = d;
  
              
                  lst1.push(Math.trunc(d * 8));
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d.toFixed(4)+ " x 8 = "+ (d * 8).toFixed(4)+ "</td></tr></table>";
              for (var j = 0; j < 10; j++)
               {
                  d = ((d * 8) % 1).toFixed(4);
                  
                        
                  lst1.push(Math.trunc(d * 8));
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 8 = "+ (d * 8)+ "</td></tr></table>";
  
              }
              let final = lst1.join("");
              finalans = finalans.concat(".");
              a = finalans.concat(final);
              //document.getElementById('div2').innerHTML +="<h2 style='margin-left:200px;font-family:sans-serif;'>"+e+" in Hexa decimal = "+ final+ "</h2>";
  
          }
          dcml();
          document.getElementById('div2').innerHTML +="<h2 style='font-family:sans-serif;margin-left:200px'>Hence "+ n+ " in Octal = 0"+ a+ "</h2>";
  
        }
        
  
          else{
              function myLoop() 
          {         
              
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8</label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ parseInt(i)+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
              q = parseInt(i / 8);
              r = parseInt(i % 8);
              i = q;
                 
                  lst.push(r);
             
              while (q >= 1) 
              {        
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >8 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >"+ i+ " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> "+ r+ "</label></td></tr></table>";  //  your code here
                  q = parseInt(i / 8);
                  r = parseInt(i % 8);
                  i = q;
                  
                  lst.push(r);         
              }
              document.getElementById('div2').innerHTML +="</br>";
              lst.reverse();
              finalans = lst.join("");
              document.getElementById('div2').innerHTML +="<h2 style='font-family:sans-serif;margin-left:200px'>"+ Math.trunc(n)+ " in Octal = "+ finalans+ "</h2>";
                 
  
          }
      
      
          myLoop();
      
          function dcml() 
          {
              var lst1 = [];
              var d = (n % (parseInt(n))).toFixed(4);
              var e = d;
  
              
                  
                        
                  lst1.push(Math.trunc(d * 8));
              document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 8 = "+ (d * 8)+ "</td></tr></table>";
              for (var j = 0; j < 10; j++)
               {
                  d = ((d * 8) % 1).toFixed(4);
                  
                        
                  lst1.push(Math.trunc(d * 8));
                  document.getElementById('div2').innerHTML +="<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>"+ d+ " x 8 = "+ (d * 8)+ "</td></tr></table>";
  
              }
              var final = lst1.join("");
              finalans = finalans.concat(".");
              a = finalans.concat(final);
              document.getElementById('div2').innerHTML +="<h2 style='margin-left : 200px;font-family:sans-serif;'>"+e+" in Octal = "+ final+ "</h2>";
  
          }
          dcml();
          document.getElementById('div2').innerHTML +="<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence "+ n+ " in Octal = "+ a+ "</h2>";
          
  
      }
    }


}
function octalToOthers(value, b) {
  base = b;
  document.getElementById('div2').innerHTML = "";
  var dec = 0;
  var a = value;
  var c = 0;
  var m = 0;
  var s = 0;
  var p = 0;
  var decpart = [];
  if (parseFloat(a) == parseInt(a)) {
    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(a);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (8 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 8 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else if (Math.trunc(parseFloat(a)) == 0) {
    var j = 0;
    while (j < a.length) {
      if (a[j] != '.') {
        decpart.push(a[j]);
        j++;
      }
      else
        j++;
    }
    for (var i = 0; i < decpart.length; i++) {
      m = decpart[i] * (8 ** (-i));
      document.getElementById('div2').innerHTML += decpart[i] + " x " + 8 + "^" + -i + " = " + m + "</br>";
      s = s + m;
    }
    document.getElementById('div2').innerHTML += a + " in Decimal = " + s;
    dec = s;
  }
  else {
    document.getElementById('div2').innerHTML = "";
    var j = (a.length) - 1;
    var s1 = 0;
    var intpart = Math.trunc(parseFloat(a));
    intpart = String(intpart);


    function reverseString(str) {
      return str.split("").join("");
    }
    c = reverseString(intpart);
    for (var i = (c.length) - 1; i >= 0; i--) {
      m = c[p] * (8 ** i);
      document.getElementById('div2').innerHTML += c[p] + " x " + 8 + "^" + i + " = " + m + "</br>";
      s = s + m;
      p++;

    }
    document.getElementById('div2').innerHTML += intpart + " in Decimal = " + s + "<br><br>";

    while (a[j] != '.') {

      decpart.push(a[j]);
      j--;

    }
    p = 1;
    for (var k = (decpart.length) - 1; k >= 0; k--) {
      m = decpart[k] * (8 ** (-p));
      document.getElementById('div2').innerHTML += decpart[k] + " x " + 8 + "^" + -p + " = " + m + "</br>";
      s1 = s1 + m;
      p++;
    }
    var x = parseFloat(a) % parseInt(intpart);
    document.getElementById('div2').innerHTML += x.toFixed((decpart.length) - 1) + " in Decimal = " + s1 + "<br>";
    document.getElementById('div2').innerHTML += "<br>" + a + " in Decimal = " + (s + s1);
    dec = s + s1;
  }
  if (base == 16) {
    var i = dec;
    var n = i;
    var q = 0;
    var r = 0;
    var lst = [];
    var finalans = "";
    var a = "";
    if (Math.trunc(n) == n) {
      function myLoop() {
        document.getElementById('div2').innerHTML = "";

        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
        q = parseInt(i / 16);
        r = parseInt(i % 16);
        i = q;
        if (r == 10)
          lst.push('A');

        else if (r == 11)
          lst.push('B');
        else if (r == 12)
          lst.push('C');
        else if (r == 13)
          lst.push('D');
        else if (r == 14)
          lst.push('E');
        else if (r == 15)
          lst.push('F');
        else
          lst.push(r);

        while (q >= 1) {
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>" + r + "</label></td></tr></table>";  //  your code here
          q = parseInt(i / 16);
          r = parseInt(i % 16);
          i = q;
          if (r == 10)
            lst.push('A');

          else if (r == 11)
            lst.push('B');
          else if (r == 12)
            lst.push('C');
          else if (r == 13)
            lst.push('D');
          else if (r == 14)
            lst.push('E');
          else if (r == 15)
            lst.push('F');
          else
            lst.push(r);
        }
        document.getElementById('div2').innerHTML += "</br>";
        lst.reverse();
        finalans = lst.join("");
        document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Hexa decimal = " + finalans + "</h2>";
      }
      myLoop();
    }

    else if (Math.trunc(n) == 0) {
      function dcml() {
        var lst1 = [];
        var d = n;
        var e = d;

        if (Math.trunc(d * 16) == 10)
          lst1.push('A');

        else if (Math.trunc(d * 16) == 11)
          lst1.push('B');
        else if (Math.trunc(d * 16) == 12)
          lst1.push('C');
        else if (Math.trunc(d * 16) == 13)
          lst1.push('D');
        else if (Math.trunc(d * 16) == 14)
          lst1.push('E');
        else if (Math.trunc(d * 16) == 15)
          lst1.push('F');
        else
          lst1.push(Math.trunc(d * 16));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";
        for (var j = 0; j < 10; j++) {
          d = ((d * 16) % 1).toFixed(4);
          if (Math.trunc(d * 16) == 10)
            lst1.push('A');

          else if (Math.trunc(d * 16) == 11)
            lst1.push('B');
          else if (Math.trunc(d * 16) == 12)
            lst1.push('C');
          else if (Math.trunc(d * 16) == 13)
            lst1.push('D');
          else if (Math.trunc(d * 16) == 14)
            lst1.push('E');
          else if (Math.trunc(d * 16) == 15)
            lst1.push('F');
          else

            lst1.push(Math.trunc(d * 16));
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";

        }
        let final = lst1.join("");
        finalans = finalans.concat(".");
        a = finalans.concat(final);
        //document.getElementById('div2').innerHTML +=("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in Hexa decimal = ", final, "</h2>");

      }
      dcml();
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in Hexa decimal = 0" + a + "</h2>";

    }


    else {
      function myLoop() {
        document.getElementById('div2').innerHTML = "";

        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16</label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
        q = parseInt(i / 16);
        r = parseInt(i % 16);
        i = q;
        if (r == 10)
          lst.push('A');

        else if (r == 11)
          lst.push('B');
        else if (r == 12)
          lst.push('C');
        else if (r == 13)
          lst.push('D');
        else if (r == 14)
          lst.push('E');
        else if (r == 15)
          lst.push('F');
        else
          lst.push(r);

        while (q >= 1) {
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >16 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label> " + r + "</label></td></tr></table>";  //  your code here
          q = parseInt(i / 16);
          r = parseInt(i % 16);
          i = q;
          if (r == 10)
            lst.push('A');

          else if (r == 11)
            lst.push('B');
          else if (r == 12)
            lst.push('C');
          else if (r == 13)
            lst.push('D');
          else if (r == 14)
            lst.push('E');
          else if (r == 15)
            lst.push('F');
          else
            lst.push(r);
        }
        document.getElementById('div2').innerHTML += "</br>";
        lst.reverse();
        finalans = lst.join("");
        document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Hexa decimal = " + finalans + "</h2>";


      }


      myLoop();

      function dcml() {
        var lst1 = [];
        var d = (n % (parseInt(n))).toFixed(4);
        var e = d;

        if (Math.trunc(d * 16) == 10)
          lst1.push('A');

        else if (Math.trunc(d * 16) == 11)
          lst1.push('B');
        else if (Math.trunc(d * 16) == 12)
          lst1.push('C');
        else if (Math.trunc(d * 16) == 13)
          lst1.push('D');
        else if (Math.trunc(d * 16) == 14)
          lst1.push('E');
        else if (Math.trunc(d * 16) == 15)
          lst1.push('F');
        else

          lst1.push(Math.trunc(d * 16));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";
        for (var j = 0; j < 10; j++) {
          d = ((d * 16) % 1).toFixed(4);
          if (Math.trunc(d * 16) == 10)
            lst1.push('A');

          else if (Math.trunc(d * 16) == 11)
            lst1.push('B');
          else if (Math.trunc(d * 16) == 12)
            lst1.push('C');
          else if (Math.trunc(d * 16) == 13)
            lst1.push('D');
          else if (Math.trunc(d * 16) == 14)
            lst1.push('E');
          else if (Math.trunc(d * 16) == 15)
            lst1.push('F');
          else

            lst1.push(Math.trunc(d * 16));
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 16 = " + d * 16 + "</td></tr></table>";

        }
        let final = lst1.join("");
        finalans = finalans.concat(".");
        a = finalans.concat(final);
        document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in Hexa decimal = " + final + "</h2>";

      }
      dcml();
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Hexa decimal = " + a + "</h2>";
    }
  } else if (base == 2) {
    var i = dec;
    var n = i;
    var q = 0;
    var r = 0;
    var lst = [];
    var finalans = "";
    var a = "";
    if (Math.trunc(n) == n) {
      function myLoop() {
        document.getElementById('div2').innerHTML = "";
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
        q = parseInt(i / 2);
        r = parseInt(i % 2);
        i = q;
        lst.push(r);
        while (q >= 1) {
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  " + r + "</label></td></tr></table>";  //  your code here
          q = parseInt(i / 2);
          r = parseInt(i % 2);
          i = q;
          lst.push(r);
        }
        document.getElementById('div2').innerHTML += "</br>";
        lst.reverse();
        finalans = lst.join("");
        document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Binary = " + finalans + "</h2>";

      }
      myLoop();
    }

    else if (Math.trunc(n) == 0) {

      function dcml() {
        var lst1 = [];
        var d = n;
        var e = d;

        lst1.push(Math.trunc(d * 2));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";
        for (var j = 0; j < 10; j++) {
          d = ((d * 2) % 1).toFixed(4);
          lst1.push(Math.trunc(d * 2));
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";

        }
        let final = lst1.join("");
        finalans = finalans.concat(".");
        a = finalans.concat(final);
        //document.write("<h2 style='margin-left:200px;font-family:sans-serif;'>",e," in binary = ", final, "</h2>");

      }
      dcml();
      document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>Hence " + n + " in Binary = 0" + a + "</h2>";

    }


    else {
      function myLoop() {
        document.getElementById('div2').innerHTML = "";

        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + parseInt(i) + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'></tr></table>";
        q = parseInt(i / 2);
        r = parseInt(i % 2);
        i = q;
        lst.push(r);

        while (q >= 1) {
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;font-family:sans-serif;font-weight:bolder'><tr><td ><label >2 </label></td><td></td><td style='border:solid 2px black;border-right:0px;border-top:0px; padding:1em;width:40px;text-align:center;font-size:15px;'><label >" + i + " </label></td style='border:solid 2px black; padding:1em; height:20x;width:40px;text-align:center;margin-left:200px'><td><label>  " + r + "</label></td></tr></table>";  //  your code here
          q = parseInt(i / 2);
          r = parseInt(i % 2);
          i = q;
          lst.push(r);
        }
        document.getElementById('div2').innerHTML += ("</br>");
        lst.reverse();
        finalans = lst.join("");
        document.getElementById('div2').innerHTML += "<h2 style='font-family:sans-serif;margin-left:200px'>" + Math.trunc(n) + " in Binary = " + finalans + "</h2>";


      }


      myLoop();

      function dcml() {
        var lst1 = [];
        var d = (n % (parseInt(n))).toFixed(4);
        var e = d;

        lst1.push(Math.trunc(d * 2));
        document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";
        for (var j = 0; j < 10; j++) {
          d = ((d * 2) % 1).toFixed(4);
          lst1.push(Math.trunc(d * 2));
          document.getElementById('div2').innerHTML += "<table style='margin-left:200px;border:1px solid black;font-size : 20px;font-family:sans-serif'><tr><td>" + d + " x 2 = " + d * 2 + "</td></tr></table>";
        }
        let final = lst1.join("");
        finalans = finalans.concat(".");
        a = finalans.concat(final);
        document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>" + e + " in binary = " + a + "</h2>";

      }
      dcml();
      document.getElementById('div2').innerHTML += "<h2 style='margin-left : 200px;font-family:sans-serif;'>Hence " + n + " in Binary = " + a + "</h2>";

    }
  }



}



let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
  switch (fromNS) {
    case "Binary":
      fromValue = from.value;
      if (/^[01.]*$/.test(fromValue)) {
        switch (toNS) {
          case "Decimal": to.value = binary(fromValue)
            binaryToDecimal(fromValue);
            break;
          case "Hexadecimal": to.value = binary(fromValue, 2).toString(16).toUpperCase();
            binaryToHexadecimal(fromValue);
            break;
          case "Octal": to.value = binary(fromValue, 2).toString(8);
            binaryToOctal(fromValue);
            break;
          default: to.value = fromValue;
        }
      } else {
        error.style.display = "inherit";
        error.innerText = "Invalid " + fromNS + " Number";
        to.value = "";
      }
      break;

    case "Decimal":
      fromValue = from.value;
      if (/^[0-9.]*$/.test(fromValue)) {
        switch (toNS) {
          case "Binary": to.value = decimalToBinary(fromValue, 10);
            decimalToBinaryAnime(fromValue);
            break;
          case "Hexadecimal": to.value = Math.abs(fromValue).toString(16).toUpperCase();
            decimalToHex(fromValue);
            break;
          case "Octal": to.value = Math.abs(fromValue).toString(8);
            decimalToOctal(fromValue);
            break;
          default: to.value = fromValue;
        }
      } else {
        error.style.display = "inherit";
        error.innerText = "Invalid " + fromNS + " Number";
        to.value = "";
      }
      break;

    case "Hexadecimal":
      fromValue = from.value;
      if (/^[0-9a-fA-F.]*$/.test(fromValue)) {
        switch (toNS) {
          case "Binary": to.value = parseInt(fromValue, 16).toString(2);
            hexaToOthers(fromValue, 2);
            break;
          case "Decimal": to.value = parseInt(fromValue, 16);
            hexaToOthers(fromValue, 10);
            break;
          case "Octal": to.value = parseInt(fromValue, 16).toString(8);
            hexaToOthers(fromValue, 8);
            break;
          default: to.value = fromValue;
        }
      } else {
        error.style.display = "inherit";
        error.innerText = "Invalid " + fromNS + " Number";
        to.value = "";
      }
      break;

    case "Octal":
      fromValue = from.value;
      if (/^[0-7.]*$/.test(fromValue)) {
        switch (toNS) {
          case "Binary": to.value = parseInt(fromValue, 8).toString(2);
            octalToOthers(fromValue, 2);
            break;
          case "Decimal": to.value = parseInt(fromValue, 8);
            octalToOthers(fromValue, 10);
            break;
          case "Hexadecimal": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
            octalToOthers(fromValue, 16);

            break;
          default: to.value = fromValue;
        }
      } else {
        error.style.display = "inherit";
        error.innerText = "Invalid " + fromNS + " Number";
        to.value = "";
      }
      break;
  }
});

