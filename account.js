// how to include an else in the findAccount fntn
// failled to check that the account exists when creating an account.(creatAccount(accountNumber){}
const ACTIVE =  "active";
class BankAccount {
    constructor(firstName, lastName, accountNumber, accountPin, amount ){
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.accountPin = accountPin;
        this.accountBalance = amount;
        this.accounts = [];
        this.fullName = this.firstName + " " + this.lastName;
        this.status = ACTIVE;
    }
  

    getBalance(accountNumber) {
      var foundAccount= this.findAccount(accountNumber);
      if (foundAccount){
        
        var accountActive = this.accountStatus();
        if(accountActive){
    
          // var accountBalance = this.totalAmount + this.depositeAmount - this.withdrawAmount;
          var accountBalance =this.accounts.accountBalance
          return `${foundAccount.fullName} your account balance is ${foundAccount.accountBalance}`;
        }
        else{
          return `${foundAccount.fullName} Your account is blocked. Activate it to carry out transactions`
        }
      }
      else{
        return "The account Number you entered dose not exist.\n Please try again."
    }
  }
    accountStatus(){
      if (this.status==="active"){
          return true;
      }
      else{
        this.close();
        return false;
      }
    }
  
    creatAccount(accountNumber){
        var foundAccount= this.findAccount(accountNumber)
         var userInfo = {}
      if ((this.firstName.length < 2) || (this.lastName.length < 2)){

      return "Invalid input. \n User names should not be less than two characters.";
  
                }
      else{  
        if( typeof this.accountNumber !=="number"|| typeof this.accountPin !== "number"){
          return "Invalid input. \n Account number or account pin should be numbers";
         }
        else{
          if(!foundAccount){
            userInfo = {
              fullName:this.firstName + " " + this.lastName,
              accountNumber: this.accountNumber,
              accountPin: this.accountPin,
              accountBalance: this.accountBalance
          }
            return this.accounts.push(userInfo);

            }
           else{
            return "The acount number already exists. Please use another number."
          
           }
          }
          } 
      }
    
  
    menu(action) {
      // var accountActive="Account is active";
      if (this.creatAccount()=== true){

        // not sure how to call account status
      //  this.accountStatus = "";
        if( action === 1){
          return this.deposit();
     
        }
        else if( action === 2){

          return this.withdraw();
        }
        else if( action === 3){

          return this.getBalance();
      }
      else if(action === 4){
        return this.close();
      }
        }
      }
      // finding an account from the accounta array
      findAccount(accountNumber){
        var foundAccount;
        this.accounts.forEach(function(account){
        if (account.accountNumber === accountNumber){
          foundAccount = account;
          
          }
          });
          
        return foundAccount;
   
      }
  
      deposit(accountNumber, depositAmount) {
        var accountActive = this.accountStatus();
        var foundAccount= this.findAccount(accountNumber);
        if (foundAccount){
          if(accountActive){
      
            if ((typeof depositAmount=="number")){
              foundAccount.accountBalance += depositAmount;
              return `You have deposited ${depositAmount} on ${foundAccount.fullName}\'s account` ;
            }
            else{
              return "Enter correct Account Number or Valid shillings."
            }
          }
          else{
            return "Your account is blocked. Activate it to carry out transactions"
          }  
        }
        else{
            return "The account Number you entered dose not exist.\n Please try again."
        }
      }
    withdraw(accountNumber, accountPin,withdrawAmount) {
      var accountActive = this.accountStatus();
      var foundAccount= this.findAccount(accountNumber);
      if (foundAccount){
        if(accountActive){
      
          if((accountNumber===foundAccount.accountNumber)
           && (accountPin===foundAccount.accountPin)){
            if(typeof withdrawAmount=="number"){
              if(withdrawAmount<(foundAccount.accountBalance-10)){
                foundAccount.accountBalance -= withdrawAmount;
                return withdrawAmount;

          }
          else{
            return `${foundAccount.fullName} You dont have Sufficient funds on your account for that transaction \n Your account balance is ${foundAccount.accountBalance}` 
          }
        }
        else{
          return " Invalid input \n Enter numbers to withdraw"
        }
      }
              }
      else{
        return "Your account is blocked. Activate it to carry out transactions"
      }
    }
    else{
      return "The account Number you entered dose not exist.\n Please try again."
  }
}
// failed to implement closing the account;
  close(){
    this.status="blocked";
      return "your account is blocked"
        
      // break;
}
}

module.exports = BankAccount;

// Creating accounts
BankAccount1 =new BankAccount("susan","Ninsiima",500, 500,7000);
BankAccount2 =new BankAccount("hellen","Allena","400", "250",10000);
BankAccount3 =new BankAccount("s","Ninsiima",500, 500,7000);
BankAccount4 =new BankAccount("Hellen","Allena",777, 400,70000);

// storing the created account to the accounts array
BankAccount4.creatAccount()
console.log(BankAccount1.creatAccount())
// creating an account with an account number or pin that is not a number
console.log('\nError message for creating an account with an account number or pin that is not a number')
console.log(BankAccount2.creatAccount());
// creating an account when either of the names is less than two characters
console.log('\nError message for creating an account when one of the names is less than two characters');
console.log(BankAccount3.creatAccount());

// checking the account status
console.log(`\nBankAccount1's status is : ${BankAccount1.status}\n`);

// closing or blocking an active account
BankAccount4.close();

// showing that no trasaction can take place on a blocked account.
console.log('\nError message when trying to carry out a transation on a closed or blocked account')
console.log( BankAccount4.deposit(777,1000));

// showing that all actions are carried out on an active account
console.log('\nShowing that all actions are carried out on an active account')
console.log( BankAccount1.findAccount(500));
console.log(`\n${BankAccount1.deposit(500,1000)}\n`);
console.log(`${BankAccount1.withdraw(500, 500, 10000)}\n`);
console.log(`${BankAccount1.withdraw(500, 500, 700)}\n`);
console.log(`${BankAccount1.getBalance(500)}\n`);
console.log( BankAccount1.findAccount(500));

