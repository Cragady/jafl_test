from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from app import blueprint
from app.main import create_app, db

app = create_app()
app.register_blueprint(blueprint)
app.app_context().push()
migrate = Migrate(app, db)

lambda_app = app

manager = Manager(app)

manager.add_command('db', MigrateCommand)
        

@manager.command
def run():
    app.run(host='0.0.0.0', port=6000)

if __name__ == '__main__':
    manager.run()