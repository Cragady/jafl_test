from flask_restx import Namespace, fields

class TransactionDto:
    api = Namespace('transaction', description='transaction related operations')
    transaction = api.model('transaction', {
        'id': fields.String(description='transaction id'),
        'date': fields.String(description='date transaction took place'),
        'items': fields.String(description='Items and Quantity of each item, array of objects'),
        'total': fields.String(description='total of items purchased'),
        'updated_at': fields.String(description='time of update')
    })