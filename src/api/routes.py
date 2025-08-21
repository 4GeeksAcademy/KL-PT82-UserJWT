"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, JWTManager
from werkzeug.security import generate_password_hash, check_password_hash


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['POST'])
def handle_signup():
    data = request.get_json()
    data['password'] = generate_password_hash(data['password'])
    user = User(email=data['email'], password=data['password'], is_active=True)
    db.session.add(user)
    db.session.commit()
    response_body = {'message': 'User Successfuly Created'}
    return jsonify(response_body), 201


@api.route('/login', methods=['POST'])
def handle_login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity= str(user.id))
        return jsonify({'token': access_token}), 200
    return jsonify({'error': 'Invalid credentials'}), 401


@api.route('/private', methods=['POST'])
# @jwt_required()
def handle_authorized():
    pass
