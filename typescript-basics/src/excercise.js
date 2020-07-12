var bankAccount = {
    money: 3000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount
};
myself.bankAccount.deposit(2000);
console.log(myself);
