class wallet{

	constructor(){
		this.balance = 0;
	}

	getBalance(){
		return this.balance;
	}

	setBalance(balance){
		this.balance = balance;
	}

	addBalance(addBalance){
	  this.balance += addBalance;
	}

	takeBalance(takeBalance){
	  if (this.balance - takeBalance >= 0 ){
	  	this.balance -= takeBalance;	
	  }else{
		throw new Error("Not enough Balance");
	  }

	}

}

module.exports = wallet;

