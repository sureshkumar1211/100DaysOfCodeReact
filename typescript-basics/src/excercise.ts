type BankAccount = { money: number; deposit: (value: number) => void };
let bankAccount: BankAccount = {
	money: 3000,
	deposit(value) {
		this.money += value;
	},
};
type Myself = { name: string; bankAccount: BankAccount };

let myself: Myself = {
	name: "Max",
	bankAccount: bankAccount,
};

myself.bankAccount.deposit(2000);
console.log(myself);
