const BankAccount = require('./account');

const account1 = new BankAccount( "susan","Ninsiima",500, 500,7000)
const account2 = new BankAccount("susan","Ninsiima",8000, 500,7000);
const account3 = new BankAccount( "susan","Ninsiima",'500', 500,7000)
const account4 = new BankAccount( "s","Ninsiima",70, 500,7000)

account1.creatAccount(500);
account2.creatAccount(8000);
account2.close();

// TEST FOR CREATING AN ACCOUNT
test( 'Creating or Opening bank account with a string input for account number', ()=> {

    expect(account3.creatAccount('500')).toBe("Invalid input. \n Account number or account pin should be numbers");
});
test( 'Creating or Opening bank account with names of charaters which are less than two', ()=> {

     expect(account4.creatAccount(70)).toBe("Invalid input. \n User names should not be less than two characters.")
});
    

// TESTS FOR OBTAINING THE ACCOUNT BALANCE
test('Obtaining the balance with a valid account number', () => {
        expect(account1.getBalance(500)).toBe(`${ account1.firstName} ${ account1.lastName} your account balance is ${ account1.accountBalance}`)
    });


test('Obtaining the balance of a blocked account', () => {
        expect(account2.getBalance(8000)).toBe(`${ account1.firstName} ${ account1.lastName } Your account is blocked. Activate it to carry out transactions`)
    });

test('Obtaining the balance with a wrong account or invalid number', () => {
        expect(account1.getBalance(600)).toBe("The account Number you entered dose not exist.\n Please try again."
        )
    });

// TESTS FOR WITHDRAWING
test('Withdrawing with an invalid account number', () => {
    expect(account1.withdraw(700, 500,700)).toBe("The account Number you entered dose not exist.\n Please try again.")
});

test('Withdrawing money that exceeds that which is on the account - 10', () => {
    
    expect(account1.withdraw(500, 500,10000)).toBe(`${ account1.firstName} ${account1.lastName} You dont have Sufficient funds on your account for that transaction \n Your account balance is ${ account1.accountBalance}`);
    
});

test('Withdrawing money that is below the accountbalance -10', () => {
    
    expect(account1.withdraw(500, 500,6980)).toBe( 6980)
});


test('Entering Withdraw amount that is not a number', () => {
    
    expect(account1.withdraw(500, 500,'69rry')).toBe(" Invalid input \n Enter numbers to withdraw"
    )
});
test('Entering a wrong pin or account number when Withdrawing', () => {
    
    expect(account1.withdraw(600, 500, 4000)).toBe("The account Number you entered dose not exist.\n Please try again." )
});

test('Withdrawing from  a blocked account', () => {
    
    expect(account2.withdraw(8000, 500,700)).toBe("Your account is blocked. Activate it to carry out transactions"
    )
});

// TESTS FOR THE DEPOSIT FUNCTION
test('Depositing to a blocked account', () => {
    
    expect(account2.deposit(8000,70000)).toBe("Your account is blocked. Activate it to carry out transactions")
});

test('Depositing with an invalid account number', () => {
    expect(account1.deposit(700,700)).toBe("The account Number you entered dose not exist.\n Please try again.")
});

test('deposite a mount is not numbers', () => {
    expect(account1.deposit(500,'700')).toBe("Enter correct Account Number or Valid shillings.")
});

test(' making a successful deposit deposite ', () => {
    expect(account1.deposit(500,700)).toBe(`You have deposited 700 on ${ account1.firstName} ${ account1.lastName}\'s account`)
});

