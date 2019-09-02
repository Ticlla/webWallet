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

  it("Should take money from Balance", function() {
      wallet_test = new wallet();
      expectedBalance = 0;
      expect(wallet_test.getBalance()).toBe(expectedBalance);
      
      expectedBalance = 100;
      wallet_test.takeBalance(expectedBalance);
      expect(wallet_test.getBalance()).toBe(expectedBalance);
  });

  it("Should add money to Balance", function() {
      wallet_test = new wallet();
      expectedBalance = 0;
      expect(wallet_test.getBalance()).toBe(expectedBalance);
      
      expectedBalance = 100;
      wallet_test.addBalance(expectedBalance);
      expect(wallet_test.getBalance()).toBe(expectedBalance);
  });

  it("Should take money from Balance when 0 in place", function() {
        pending("Not Yet Implemented")

  });

});
