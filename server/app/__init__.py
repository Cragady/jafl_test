from flask_restx import Api
from flask import Blueprint

from .main.controller.transaction_controller import api as transaction_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
    title='TRANSACTION TRACKER',
    version='1.0',
    description='A rest api that will work as a backend for keeping track of transactions.'
    )

api.add_namespace(transaction_ns, path='/transaction')