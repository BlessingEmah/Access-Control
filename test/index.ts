import { expect } from "chai";
import { ethers } from "hardhat";

describe("Access Control", async() => {
 let deployer:any,attacker:any,user:any;

 beforeEach(async function () {
   [deployer, attacker, user] = await ethers.getSigners();

  const AgreedPrice = await ethers.getContractFactory("AgreedPrice2", deployer);
  this.agreedPrice = await AgreedPrice.deploy(1000); 
 });


 describe("AgreedPrice", async () => {
   it("should set price at deployment", async function () {
     expect(await this.agreedPrice.price()).to.eq(1000);
   });

   it("Should be possible for the owner to change price", async function () {
    await this.agreedPrice.updatePrice(2000);
    expect(await this.agreedPrice.price()).to.eq(2000);
  });

  it("Should NOT be possible for the owner to change price", async function () {});
    //@ts-ignore
   await expect(this.agreedPrice.connect(attacker).updatePrice(2000)).revertedWith("Restricted Access");
  });

   it("should be possible for the owner to transfer ownership", async function () {
     await this.agreedPrice.changeOwner(user.address);
     expect(await this.agreedPrice.owner()).to.eq(user.address);
   }); 
  
    it("should be possible for a new owner to call upatePrice", async function () {
      await this.agreedPrice.changeOwner(user.address);
      await this.agreedPrice.connect(user).updatePrice(2000);
      expect(await this.agreedPrice.price()).to.eq(2000);
    });

    it("should not be possible for other than the owner to transfer ownership", async function () {
      await expect(this.agreedPrice.connect(attacker).changeOwner(attacker.address)).to.be.revertedWith("Restricted Access");
    }); 
});