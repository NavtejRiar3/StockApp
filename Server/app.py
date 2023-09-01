from flask import Flask, jsonify
from stock_data_retrieval import get_stock_data
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/get_data/*": {"origins": "http://localhost:8080"}})

@app.route('/get_data/<symbol>/<period>', methods=['GET'])
def get_data(symbol, period):
    data = get_stock_data(symbol=symbol, period=period)
    
    return data

app.run()