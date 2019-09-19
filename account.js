class BankAccount {
    constructor(firstName, lastName, accountNumber, accountPin, amount ){
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.firstName = firstName;
        this.accountPin = accountPin;
        this.accountBalance = amount;
        this.accounts = [];
        this.fullName = this.firstName + " " + this.lastName;
        this.status = "active";

    
    }
  

    getBalance(accountNumber) {
      var foundAccount= this.findAccount(accountNumber);
      if (foundAccount){
        
        var accountActive = this.accountStatus();
        if(accountActive){
    
          // var accountBalance = this.totalAmount + this.depositeAmount - this.withdrawAmount;
          var accountBalance =this.accounts.accountBalance
          return  accountBalance;
        }
        else{
          return "Your account is blocked. activate it to carry out transactions"
        }
      }
      else{
        return "The account Number you entered dose not exist.\n Please try again."
    }
  }
    accountStatus(){
      if ((this.status===null) || (this.status==="active")){
          return true;
      }
      else{
        return false;
      }
    }
  
    creatAccount(accountNumber){
      var foundAccount= this.findAccount(accountNumber);
      var userInfo = {
          fullName:this.firstName + " " + this.lastName,
          accountNumber: this.accountNumber,
          accountPin: this.accountPin,
          accountBalance: this.accountBalance
      }
      if (this.firstName.length < 2 || this.lastName.length < 2){
          if( isNaN(this.accountNumber || this.accountPin)){
            if(this.accountNumber===foundAccount.accountNumber){
              return "The acount number already exists. please use another number."
            }
          
          return "Ivalid input try again.";
          
          }
  
        }
        else{
          //   dose not push more than one item
          return this.accounts.push(userInfo);
           // console.log("Your account has been successfully created \n your details are " + accountDetails);
          
        }
        
      }
  
    open(action) {
      // var accountActive="Account is active";
      if (this.creatAccount()=== true){

        // not sure how to call account status
      //  this.accountStatus = "";
        if( action === 1){
          return this.deposit();
     
        }
        if( action === 2){

          return this.withdraw();
        }
        if( action === 3){

          return this.getBalance();
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
              return "You have deposited " + depositAmount + " on " + foundAccount.fullName +"\'s account" ;
            }
            else{
              return "Enter correct Account Number or Valid shillings."
            }
          }
          else{
            return "Your account is blocked. activate it to carry out transactions"
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
            return "You dont have Sufficient funds on your account for that transaction \n Your account balance is " + foundAccount.accountBalance 
          }
        }
      }
        else{
          return "enter a correct account number or pin number "
        }
      }
      else{
        return "Your account is blocked. activate it to carry out transactions"
      }
    }
    else{
      return "The account Number you entered dose not exist.\n Please try again."
  }
}
// failed to implement closing the account;
  close(){
    this.status==="blocked";
      return "your account is blocked"
        
      // break;
}
}
var BankAcount1 =new BankAccount("susan","Ninsiima",500, 500,7000);
var BankAcount2 =new BankAccount("hellen","Allena",400, 250,10000);

// storing the created account to the accounts array
console.log(BankAcount1.creatAccount())
console.log(BankAcount2.creatAccount())
BankAcount1.status="blocked";

// finding a created account
console.log(BankAcount2.findAccount(400));
 
// showing that no trasaction can take place on a blocked account.
console.log( BankAcount1.deposit(500,1000));
