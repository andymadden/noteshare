from app import app
import flask
from flask import render_template
from .api import views

@app.route('/')
def home():
    resp = flask.Response(render_template('index.html'))
    resp.headers['Content-Type'] = 'text/html'
    return resp