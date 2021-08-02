import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Title</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount (Please put a '-' sign before expense amount)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button disabled={!text || !amount} className="btn">
                    Add transaction
                </button>
            </form>
        </>
    );
};

export default AddTransactions;