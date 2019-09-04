var Wallet = import('../src/wallet.js');


describe("Wallet", function() {

  it("Should Check Class Wallet", function() {
      wallet_test = new wallet();
      expect(true).toBe(wallet_test instanceof wallet);
  });

  it("Should Check Wallet Balance property", function() {
      wallet_test = new wallet();
      expectedBalance = 0;
      expect(wallet_test.getBalance()).toBe(expectedBalance);

  });

  it("Should take money from Balance - Exact Ammount to withdraw", function() {
      wallet_test = new wallet();
      expectedBalance = 0;
      expect(wallet_test.getBalance()).toBe(expectedBalance);
      
      expectedBalance1 = 100;
      wallet_test.addBalance(expectedBalance1);
      expect(wallet_test.getBalance()).toBe(expectedBalance1);

      expectedBalance2 = 0;
      takeBalance = 100;
      wallet_test.takeBalance(takeBalance);
      expect(wallet_test.getBalance()).toBe(expectedBalance2);
  });

  it("Should add money to Balance", function() {
      wallet_test = new wallet();
      expectedBalance = 0;
      expect(wallet_test.getBalance()).toBe(expectedBalance);
      
      expectedBalance1 = 100;
      wallet_test.addBalance(expectedBalance1);
      expect(wallet_test.getBalance()).toBe(expectedBalance1);

      expectedBalance2 = 500;
      wallet_test.addBalance(expectedBalance2);
      expect(wallet_test.getBalance()).toBe(expectedBalance2 + expectedBalance1);
  });

  it("Should take money from Balance when 0 in place", function() {
    pending('pending to find how to assert Exception')
      wallet_test = new wallet();
      expectedBalance = 0;
      expect(wallet_test.getBalance()).toBe(expectedBalance);

      expectedBalance2 = 0;
      takeBalance = 100;
      expect(wallet_test.takeBalance(takeBalance)).toThrow(new Error("Not enough Balance"));

      

  });

 

});
