// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Assume the account is initially active
  }
  
  // Add methods to the BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Insufficient funds or invalid withdrawal amount.");
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance for ${this.name}: $${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Create multiple BankAccount objects
  const account1 = new BankAccount(1, "John Doe", "Savings", 1000);
  const account2 = new BankAccount(2, "Jane Doe", "Checking", 500);
  
  // Test deposit, withdrawal, and balance check operations
  account1.deposit(200);
  account1.withdraw(100);
  account2.deposit(300);
  account2.withdraw(200);
  
  // Test isActive method
  console.log(`${account1.name}'s account is active: ${account1.isActive()}`);
  console.log(`${account2.name}'s account is active: ${account2.isActive()}`);
  
  // Implement getTotalBalance function
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }
  
  // Test getTotalBalance function
  const allAccounts = [account1, account2];
  const totalBalance = getTotalBalance(allAccounts);
  console.log(`Total balance of all active accounts: $${totalBalance}`);
  