"""empty message

Revision ID: ab559f727f30
Revises: cc59ed2227ba
Create Date: 2021-03-25 11:33:12.691326

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'ab559f727f30'
down_revision = 'cc59ed2227ba'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('transactions',
    sa.Column('transaction_id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('transaction_date', mysql.DATETIME(), nullable=True),
    sa.Column('items_purchased', mysql.TEXT(), nullable=True),
    sa.Column('transaction_total', mysql.DECIMAL(), nullable=True),
    sa.Column('created_at', mysql.DATETIME(), nullable=True),
    sa.Column('updated_at', mysql.DATETIME(), nullable=True),
    sa.PrimaryKeyConstraint('transaction_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('transactions')
    # ### end Alembic commands ###
