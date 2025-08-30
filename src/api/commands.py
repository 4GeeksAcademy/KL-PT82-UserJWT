from flask.cli import with_appcontext
from api.models import db, User
import click

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""


def setup_commands(app):
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count", type=int)  # argument of out command
    @with_appcontext
    def insert_test_users(count):
        print("Creating test users")
        for i in range(1, count + 1):
            email = f"test_user{i}@test.com"
            user = User(email=email, password="testpassword", is_active=True)
            db.session.add(user)
            print(f"{email} created.")
        db.session.commit()
        print("Users created successfully!")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        pass
