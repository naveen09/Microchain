pragma solidity ^0.4.18;

contract MicroBlock {
    mapping (string => Lender) nameVsLenders;
    mapping (string => Lendee) nameVsLendees;
    string[] lenderNames;
    string[] lendeeNames;
	
    struct Lender {
        string lenderAddress;
        string name;
        uint8 interestRate;
        uint16 amountPledged;
        uint16 balanceMoney;
    }
     
    struct Lendee {
        string lendeeAddress;
        string name;
        uint8 interestRate;
        uint16 amountRequested;
        uint16 amountReceived;
        string lenderName;
        uint8 rating;
        bool activeLoan;
    }
     
    function createAccount(string name, uint accountType, string _address) public returns (string){
        
          //create Lender\Lendee object with all details
        if(accountType == 1) {
            Lender memory lender = Lender(_address,name,4,0,0);
            pushLender(lender, name);
          }
          else if(accountType == 2) {
               Lendee memory lendee = Lendee(_address,name,5,0,0,"",5,false);
               nameVsLendees[name] = lendee;
               lendeeNames.push(name);
          }
        return _address;
    }
    
    function pushLender(Lender memory ldr, string name) internal{
        nameVsLenders[name] = ldr;
        lenderNames.push(name);
    }

    function lend(string name, uint16 amount) public returns (uint16){
        nameVsLenders[name].amountPledged += amount;
        nameVsLenders[name].balanceMoney += amount;
        return nameVsLenders[name].amountPledged;
    }
     
    function borrow(uint16 amount, uint8 interestRate, string name, uint8 noOfDays) public {
        nameVsLendees[name].amountRequested = amount;
        nameVsLendees[name].interestRate = interestRate;
          
          //transfer
        for(uint8 i = 0; i < lenderNames.length; i++){
            if(nameVsLenders[lenderNames[i]].balanceMoney >= amount){
                transfer(amount, nameVsLenders[lenderNames[i]].name, name);
                nameVsLendees[name].lenderName = lenderNames[i];
                nameVsLenders[lenderNames[i]].balanceMoney -= amount;
               }
        }
        nameVsLendees[name].activeLoan = true;
    } 
     
    function transfer(uint16 amount, string sender, string receiver) internal returns (bool){
        require(nameVsLendees[receiver].activeLoan == false);
          
        nameVsLenders[sender].amountPledged -= amount;
        nameVsLendees[receiver].amountRequested = 0;
        nameVsLendees[receiver].amountReceived = amount;
        return true;
    }
     
    function repay(uint16 amount, string _name) public{
          //calculate rating
          
        nameVsLendees[_name].amountRequested -= amount;
        nameVsLendees[_name].amountReceived -= amount;
        nameVsLendees[_name].activeLoan = false;
        nameVsLenders[_name].balanceMoney += amount;
    }
     

    function getLender(string _name) public returns (string lenderAddress, string name, uint8 interestRate, uint16 amountPledged, uint16 balanceMoney){
        return (nameVsLenders[_name].lenderAddress, nameVsLenders[_name].name, nameVsLenders[_name].interestRate, nameVsLenders[_name].amountPledged, nameVsLenders[_name].balanceMoney);
    }
     
    function getLendee(string _name) public  returns (string lendeeAddress, string name, uint8 interestRate, uint16 amountRequested, uint16 amountReceived, uint8 rating, bool activeLoan){
        return (nameVsLendees[_name].lendeeAddress, nameVsLendees[_name].name, nameVsLendees[name].interestRate, nameVsLendees[name].amountRequested, nameVsLendees[name].amountReceived, nameVsLendees[name].rating, nameVsLendees[name].activeLoan);
    }
     
    function getCurrentDate() public returns (uint256) {
        return now;
    }
     
     
}