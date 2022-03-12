This is a smart contract that allows one to set a price for an item and upgrade.

The focus of this project is on Access Control 
Access sol talks about using a constructor and a modifier to restrict access .This way, only the msg.sender can update a price

Access2 shows us the community vetted way of doing this i.e the standard way of restricting access. This involves importing openzeppelin ownable contract.
This is advised because it has been tested alot and is a way secured way.

The test folder contains the test scripts 
index.ts is for access.sol
index2.ts is for index2.ts
