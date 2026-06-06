export class BankAccount {
    private balance: number;
    private accountNumber: string;
    private accountHolderName: string;
    public bankName: string;

    constructor( accountNumber: string, 
        accountHolderName: string, bankName: string) {
        this.balance = 0;
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.bankName = bankName;
    }
    
    getBalance(): number {
        return this.balance;
    }

    setBalance(newAmount: number): void {
        this.balance = newAmount
    }

} 


const bnk = new BankAccount("1234567890", "John Doe", "ABC Bank");

console.log(bnk.bankName);