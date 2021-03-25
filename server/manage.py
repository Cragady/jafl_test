import unittest

from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from app import blueprint
from app.main import create_app, db

app = create_app()
app.register_blueprint(blueprint)
app.app_context().push()
migrate = Migrate(app, db)

lambda_app = app

engineDB = db.create_engine(app.config['DATABASE_SERVER'], {})
DBName = app.config['DB_NAME']
manager = Manager(app)

manager.add_command('db', MigrateCommand)
        

@manager.command
def create_db():
    engineDB.execute("CREATE DATABASE IF NOT EXISTS " + DBName)
    print("Database successfully created.")

@manager.command
def drop_database():    
    engineDB.execute("DROP DATABASE " + DBName)
    print("Database successfully deleted.")
        
@manager.command
def test():
    """ Runs tests """
    tests = unittest.TestLoader().discover('app/test', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1

@manager.command
def run():
    app.run(host='0.0.0.0', port=8080)

if __name__ == '__main__':
    manager.run()