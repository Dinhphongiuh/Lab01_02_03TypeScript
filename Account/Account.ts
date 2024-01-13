class Account
{
    private accountNumber: number;
    private name: string;
    private balance: number;
    static readonly RATE: number = 0.035;

    constructor(accountNumber: number, name: string, balance: number)
    {
        if (accountNumber < 0)
            this.accountNumber = 999999;
        this.accountNumber = accountNumber;
        if (name.trim().length <= 1)
            this.name = "chưa xác định";
        else
            this.name = name;
        if (balance <= 0)
            this.balance = 50000;
        else
            this.balance = balance;
    }

    // 
    getaccountNumber(): number
    {
        return this.accountNumber;
    }
    setaccountNumber(accountNumber: number)
    {
        if (accountNumber < 0)
            this.accountNumber = 999999;
        else
            this.accountNumber = accountNumber;
    }
    getName(): string
    {
        return this.name;
    }
    setName(name: string)
    {
        if (name.trim().length < 1)
            this.name = "chưa xác định";
        else
            this.name = name;
    }
    getBalance(): number
    {
        return this.balance;
    }
    setBalance(balance: number)
    {
        if (balance <= 0)
            this.balance = 50000;
        else
            this.balance = balance;
    }

    // 

    deposit(amount: number): boolean
    {
        this.balance += amount;
        return true;
    }

    withdraw(amount: number, phi: number): boolean
    {
        if (amount > this.balance - phi)
        {
            return false;
        }
        else
        {
            this.balance -= amount + phi;
            return true;
        }
    }

    addInterest(): number
    {
        return this.balance = this.balance + this.balance * Account.RATE;
    }

    transfer(acc2: Account, amount: number): boolean
    {
        if (this.withdraw(amount, 0) && acc2.deposit(amount))
        {
            return true;
        }
        return false;
    }

    private formatCurrency(value: number): string
    {
        return Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(value);
    }

    toString(): string
    {
        return `số tài khoản: ${this.accountNumber}, Tên tài khoản: ${this.name}, số dư: ${this.balance}`;
    }
}

let acc1 = new Account(72354, "Ted Murphy", 102.56);
let acc2 = new Account(69713, "Jane Smith", 400.00);
let acc3 = new Account(93757, "Edward Demsey", 759.32);

acc1.deposit(500.00);
acc2.withdraw(430.75, 1.50);
acc3.addInterest();
console.log(acc1);
console.log(acc2);
console.log(acc3);
acc2.transfer(acc1, 100.00)
console.log(acc1);
console.log(acc2);
