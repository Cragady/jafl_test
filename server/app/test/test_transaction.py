from manage import test
import unittest

from app.main import db
import json
from app.test.base import BaseTestCase

test_transaction = {
    'id': '',
    'date': '2021-03-03 05:05:05',
    'items': '[{figure: 2}, {therapy1: 1}, {therapy8: 23}, {game: 8}]',
    'total': '999.99000',
    'updated_at': '2021-03-03 05:05:05'
}

def add_a_transaction(self):
    return self.client.post(
        '/transaction/',
        data=json.dumps(
            test_transaction
        ),
        content_type='application/json'
    )

def update_a_transaction(self, id, transaction):
    return self.client.post(
        '/transaction/' + id,
        data=json.dumps(
            transaction
        ),
        content_type='application/json'
    )

def get_a_transaction(self, id):
    return self.client.get(
        '/transaction/' + id
    )

def delete_a_transaction(self, id):
    return self.client.delete(
        '/transaction/' + id
    )

class TestTransactionBlueprint(BaseTestCase):
    # def test_print_json(self):
    #    """ This is a sanity check operation """
    #         with self.client:
    #             test_json = json.dumps(test_transaction)
    #             test_decode = json.loads(test_json)
    #             # print('\n\n***************\n\n')
    #             # print('encoded')
    #             # print(test_json)
    #             # print('\n\n***************\n\n')
    #             # print('\n\n***************\n\n')
    #             # print('decoded')
    #             # print(test_decode)
    #             # print('\n\n***************\n\n')
    #             self.assertEqual(test_transaction, test_decode)

    def test_submit_transaction(self):
        """ Tests new transaction submission """
        with self.client:
            response = add_a_transaction(self)
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertTrue(data['message'] == 'Transaction successfully saved.')
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 201)

    def test_find_a_transaction(self):
        """ Tests finding a transaction submission """
        add_a_transaction(self)
        with self.client:
            transaction = get_a_transaction(self, '1')

            comparrison_transaction = test_transaction
            comparrison_transaction['id'] = '1'
            
            data = json.loads(transaction.data.decode())
            
            self.assertEqual(data, comparrison_transaction)

    def test_deleting_a_transaction(self):
        """ Tests deleting a transaction submission """
        add_a_transaction(self)
        with self.client:
            response = delete_a_transaction(self, '1')
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertTrue(response.content_type == 'application/json')
            self.assertTrue(response.status_code, 201)

    def test_updating_a_transaction(self):
        """ Tests updating a transaction submission """
        add_a_transaction(self)
        with self.client:
            comparrison_transaction = test_transaction
            comparrison_transaction['id'] = '1'
            comparrison_transaction['total'] = '100.00000'
            update_a_transaction(self, '1', comparrison_transaction)
            response = get_a_transaction(self, '1')
            data = json.loads(response.data.decode())
            self.assertEqual(comparrison_transaction, data)

    def test_failed_update_of_transaction(self):
        """ Tests failed update of submission """
        with self.client:
            update_a_transaction(self, '1', test_transaction)
            response = get_a_transaction(self, '1')
            self.assertTrue(response.status_code, 404)


if __name__ == '__main__':
    unittest.main()