from flask import request
from flask_restx import Resource

from ..util.dto import TransactionDto
from app.main.service.transaction_service import save_new_transaction, get_all_transactions, get_a_transaction, delete_a_transaction, save_update
from typing import Dict, Tuple

api = TransactionDto.api
_transaction = TransactionDto.transaction

@api.route('/')
class TransactionList(Resource):
    @api.doc('list of transactions')
    @api.marshal_list_with(_transaction, envelope='data')
    def get(self):
        return get_all_transactions()

    @api.expect(_transaction, validate=True)
    @api.response(201, 'Transaction successfully created.')
    @api.doc('create a new transaction')
    def post(self) -> Tuple[Dict[str, str], int]:
        data = request.json
        return save_new_transaction(data=data)


@api.route('/<id>')
@api.param('id', 'The Transaction identifier')
@api.response(404, 'Transaction not found.')
class Transaction(Resource):
    @api.doc('get a transaction')
    @api.marshal_with(_transaction)
    def get(self, id):
        transaction = get_a_transaction(id)
        if not transaction:
            api.abort(404, 'Transaction not found.')
        else:
            return transaction

    @api.doc('delete a transaction')
    def delete(self, id):
        transaction = get_a_transaction(id)
        if not transaction:
            api.abort(404, 'Transaction not found.')
        else:
            delete_a_transaction(transaction)
            return ({
                'status': 'success',
                'message': 'Successfully deleted transaction.'
            })

    @api.expect(_transaction, validate=True)
    @api.response(201, 'Transaction successfully updated.')
    @api.doc('update a transaction')
    def post(self, id) -> Tuple[Dict[str, str], int]:
        data = request.json
        return save_update(id, data=data)



# @api.route('/<link_id>')
# @api.param('link_id', 'The foreign key.')
# @api.response(404, 'No transactions found on this company')
# class LinkedTransaction(Resource):
#     @api.doc('get the related transactions')
#     @api.marshal_with(_transaction)
#     def get(self, link_id):
#         transactions = get_related_transactions(link_id)
#         if not transactions:
#             api.abort('No transactions found on this company')
#         else:
#             return transactions