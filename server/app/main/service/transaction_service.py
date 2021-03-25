import datetime

from app.main import db
from app.main.model.transaction import Transaction
from typing import Dict, Tuple

def save_new_transaction(data: Dict[str, str,]) -> Tuple[Dict[str, str], int]:
    transaction = Transaction.query.filter_by(id=data['id']).first()
    response_object = {
        'status': 'fail',
        'message': 'Transaction already exists'
    }
    response_code = 409

    if not transaction:
        new_transaction = Transaction(
            date=data['date'],
            items=data['items'],
            total=data['total'],
            updated_at=datetime.now(datetime.timezone.utc)
        )
        save_changes(new_transaction)
        response_object = {
            'status': 'success',
            'message': 'Transaction successfully saved.'
        }
        response_code = 201

    return response_object, response_code


def save_update(id, data: Dict[str, str]) -> None:
    transaction = db.session.query(Transaction).filter(Transaction.id == id)
    response_object = {
        'status': 'fail',
        'message': 'Transaction doesn\'t exist.'
    }
    response_code = 404
    if transaction:
        response_object = {
            'status': 'success',
            'message': 'Transaction successfully updated.'
        }
        response_code = 201
        transaction.update(data)
        # new_transaction = db.session.query(Transaction).filter(Transaction.id == id)
        # new_transaction.update(data)
        db.session.commit()

    return response_object, response_code

def get_all_transactions():
    return Transaction.query.all()

def get_an_transaction(id):
    return Transaction.query.filter_by(id=id).first()

def save_changes(data: Transaction) -> None:
    db.session.add(data)
    db.session.commit()

def delete_an_transaction(data: Transaction) -> None:
    db.session.delete(data)
    db.session.commit()