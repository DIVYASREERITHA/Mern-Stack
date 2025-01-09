import React, { useState } from 'react';

// Child 1
function Child1({ setTransaction }) {
  const handleTransaction = () => {
    setTransaction("Deposit: $1000");
  };

  return (
    <div>
      <button onClick={handleTransaction}>Make Transaction</button>
    </div>
  );
}

// Child 2
function Child2({ setTransaction }) {
  const handleTransaction = () => {
    setTransaction("Withdraw: $500");
  };

  return (
    <div>
      <button onClick={handleTransaction}>Make Transaction</button>
    </div>
  );
}

// Child 3
function Child3({ setTransaction }) {
  const handleTransaction = () => {
    setTransaction("Deposit: $200");
  };

  return (
    <div>
      <button onClick={handleTransaction}>Make Transaction</button>
    </div>
  );
}

// Child 4
function Child4({ setTransaction }) {
  const handleTransaction = () => {
    setTransaction("Withdraw: $100");
  };

  return (
    <div>
      <button onClick={handleTransaction}>Make Transaction</button>
    </div>
  );
}

// Child 5
function Child5({ transaction }) {
  return (
    <div>
      <h2>Transaction Data:</h2>
      <p>{transaction}</p>
    </div>
  );
}

// Parent Component
function Parent() {
  const [transaction, setTransaction] = useState("");

  return (
    <div>
      <h1>Bank Transaction</h1>
      <Child1 setTransaction={setTransaction} />
      <Child2 setTransaction={setTransaction} />
      <Child3 setTransaction={setTransaction} />
      <Child4 setTransaction={setTransaction} />
      <Child5 transaction={transaction} />
    </div>
  );
}

export default Parent;