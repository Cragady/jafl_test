from .. import db
from sqlalchemy.dialects.mysql import TEXT, TINYTEXT, DATETIME, DECIMAL

class Transaction(db.Model):
    """  Transaction Model for storing transactions """
    __tablename__ = "transactions"

    id = db.Column('transaction_id', db.Integer, primary_key=True, autoincrement=True)
    date = db.Column('transaction_date', DATETIME)
    items = db.Column('items_purchased', TEXT)
    total = db.Column('transaction_total', DECIMAL(precision=20, scale=5))
    created_at = db.Column(DATETIME)
    updated_at = db.Column(DATETIME)
    