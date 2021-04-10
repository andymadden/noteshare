from flask import Flask
from flask_cors import CORS
import psycopg2 as pg
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

from app import views