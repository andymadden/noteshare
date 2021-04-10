from app import app
from flask import Response, request
import json
import psycopg2 as pg

@app.route('/api/test')
def test():
    return "Test"

@app.route('/api/topics', methods=['GET'])
def topics_get():
    pg_conn = pg.connect(host="db", user="postgres", password="postgres", database="postgres")
    pg_cursor = pg_conn.cursor()
    topics = []
    pg_cursor.execute("SELECT id, topic, description FROM topics;")
    for row in pg_cursor.fetchall():
        topics.append({
            'id': row[0],
            'topic': row[1],
            'description': row[2],
        })

    ret = Response(json.dumps(topics))
    ret.headers['Content-Type'] = 'application/json'
    pg_conn.close()
    return ret

@app.route('/api/topics', methods=['POST'])
def topics_post():
    pg_conn = pg.connect(host="db", user="postgres", password="postgres", database="postgres")
    pg_cursor = pg_conn.cursor()
    req_obj = request.json
    pg_cursor.execute("INSERT INTO topics (topic, description) VALUES (%s, %s);", (req_obj['topic'], req_obj['description']))
    pg_conn.commit()
    ret = Response(json.dumps(request.json))
    pg_conn.close()
    return ret

@app.route('/api/topics/<topic_id>/notes', methods=['GET'])
def topic_notes_get(topic_id):
    pg_conn = pg.connect(host="db", user="postgres", password="postgres", database="postgres")
    pg_cursor = pg_conn.cursor()
    topics = []
    pg_cursor.execute("SELECT id, title, content FROM notes WHERE topic_id=%s;", (topic_id, ))
    for row in pg_cursor.fetchall():
        topics.append({
            'id': row[0],
            'title': row[1],
            'content': row[2],
        })

    ret = Response(json.dumps(topics))
    ret.headers['Content-Type'] = 'application/json'
    pg_conn.close()
    return ret

@app.route('/api/topics/<topic_id>/notes', methods=['POST'])
def topic_notes_post(topic_id):
    pg_conn = pg.connect(host="db", user="postgres", password="postgres", database="postgres")
    pg_cursor = pg_conn.cursor()
    req_obj = request.json
    pg_cursor.execute("INSERT INTO notes (topic_id, title, content) VALUES (%s, %s, %s);", (topic_id, req_obj['title'], req_obj['content']))
    pg_conn.commit()
    ret = Response(json.dumps(request.json))
    pg_conn.close()
    return ret