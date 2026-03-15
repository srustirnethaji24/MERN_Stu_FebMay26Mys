const wallet = {
    owner: "Poornashree L",
    balance: 0,
    lastTransaction: null,

    deposit: function (amount) {
        
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount.");
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };

        console.log("Deposit successful.");
    },

    
    withdraw: function (amount) {
        
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdrawal amount.");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance.");
            return;
        }

        this.balance -= amount;

        this.lastTransaction = {
            type: "WITHDRAW",
            amount: amount,
            balanceAfter: this.balance
        };

        console.log("Withdrawal successful.");
    }
};


wallet.deposit(500);
wallet.withdraw(200);

   
console.log(wallet);