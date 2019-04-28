#!/usr/bin/env python

import os
from flask import Flask, render_template, request, jsonify
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/test/', methods=['POST'])
def test():
    # clicked = None
    # if request.method == "POST":
    #     clicked = request
    # return render_template('test.html', clicked=clicked)
    return jsonify('fewweffewfewfewfwe')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
