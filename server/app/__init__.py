from flask_restx import Api
from flask import Blueprint

# from .main.controller.boiler_controller import api as boiler_ns

blueprint = Blueprint('api', __name__)

api = Api(blueprint,
    title='JOB TRACKER',
    version='1.0',
    description='A rest api that will work as a backend for keeping track of transactions.'
    )

# api.add_namespace(boiler_ns, path='/boiler')