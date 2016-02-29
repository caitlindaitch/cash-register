function CashRegister() {
  this.entries = [];
  this.els = {
    table: $("#entries"),
    input: $("#newEntry"),
    total: $("#total"),
    form: $("#entry")
  };
};

CashRegister.prototype.calcuateTotal = function() {
  var total = 0;
  for (var i=0; i<this.entries.length; i++) {
    total += this.entries[i];
  };
  return total;
};

CashRegister.prototype.addRow = function(entry) {
  var row = $("<tr></tr>");
  var td = $("<td></td>");
  var td2 = $("<td>" + entry + "</td>")

  row.append(td);
  row.append(td2);

  this.els.table.append(row);

  var newTotal = register.calcuateTotal();

  register.els.total.html("$" + newTotal.toFixed(2));
};

var register = new CashRegister();

register.els.form.on("submit", function(event) {
  event.preventDefault();

  var userInput = parseFloat(register.els.input.val());

  console.log(userInput);

  register.entries.push(userInput);

  register.addRow(userInput);

  register.els.input.val("");
})
