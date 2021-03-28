import './Transaction.css';

export const Transaction = function(props) {
    const { id, items, total } = props.transaction;

    return (
        <section className="Transaction-section rounded">
            <p>id: {id}</p>
            <p>number_of_items: {items}</p>
            <p>total: {total}</p>
        </section>
    )
}
