import React, { Component } from 'react';
import { PyAPI } from '../../utils';
import { Transaction } from '../../components';
import './Transactions.css';

export class Transactions extends Component {
    state = {
        transactions: []
    }

    componentDidMount() {
        PyAPI.getTransactions()
            .then((res) => {
                this.setState({
                    transactions: res.data.data
                })
            })
    }

    render() {
        let transactions = this.state.transactions,
            transaction_pass = transactions.length > 0;

        return (
            <section className="Transactions-section">
                <h1 className="text-center">Transactions</h1>
                <div className="container mt-2 mb-2">
                    <p>
                        This page is for the purpose of accessing
                        stored transactions via the Python/Flask
                        API that I wrote. It's a very simple API,
                        this is just for demonstration purposes.
                        As such, this page probably won't be styled
                        too much.
                    </p>

                    <p>
                        I plan on expanding this applications functionality
                        to write to a database through Python/Flask. 
                        This is planned to happen through the Cart
                        page.
                    </p>

                    {transaction_pass && transactions.map((trans, i) => {
                        return <Transaction key={"transaction-" + i} transaction={trans} />
                    })}
                </div>
            </section>
        )
    }
}
