from flask_restx import Namespace, fields

class Boiler:
    api = Namespace('boiler', description='boiler elated operations')
    boiler = api.model('boiler', {
        'id': fields.String(description='boiler id'),
        'field1': fields.String(description='field description'),
        'field2': fields.String(description='field description'),
        'field3': fields.String(description='field description'),
        'field4': fields.String(description='field description'),
        'field5': fields.String(description='field description'),
        'field6': fields.String(description='field description')
    })