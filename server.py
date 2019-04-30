#!/usr/bin/env python

import os
from flask import Flask, render_template, request, jsonify
import pickle
app = Flask(__name__)


def ml_predict(claim):
    logreg_noun_adj = pickle.load(open('ml/randf.sav', 'rb'))
    # nb_noun_adj = pickle.load(open('ml/nb_noun_adj.sav', 'rb'))
    # randf_noun_adj = pickle.load(open('ml/randf_noun_adj.sav', 'rb'))
    # sgd_noun_adj = pickle.load(open('ml/sgd_noun_adj.sav', 'rb'))
    # xgb_noun_adj = pickle.load(open('ml/xgb_noun_adj.sav', 'rb'))
    # result = (logreg_noun_adj.predict([claim]) +
    #         nb_noun_adj.predict([claim]) +
    #         xgb_noun_adj.predict([claim]) +
    #         sgd_noun_adj.predict([claim]) +
    #         xgb_noun_adj.predict([claim])) > 2.5 ? 1 : 0
    acceptance = logreg_noun_adj.predict_proba([claim])[0][0]
    rejection = logreg_noun_adj.predict_proba([claim])[0][1]
    #  nb_noun_adj.predict_proba([claim])[0][0] +
    #  randf_noun_adj.predict_proba([claim])[0][0] +
    #  #  sgd_noun_adj.predict_proba([claim]) +
    #  xgb_noun_adj.predict_proba([claim])[0][0]) / 4
    res = 1 if acceptance > 0.5 else 0
    return {'result': res, 'acceptance': acceptance, 'rejection': rejection}

    # if proba > 0.5:
    #     return {'result': 1, 'acceptance': proba, 'rejection': 1-proba}
    #     # return proba
    # else:
    #     return {'result': 0, 'acceptance': 1-proba, 'rejection': proba}
    #     # return proba


@app.route("/")
def index():
    return render_template('index.html')


@app.route('/test/', methods=['GET', 'POST'])
def test():
    if request.method == "POST":
        print(request.headers)
        x = ml_predict('request')
    # request
    # clicked = None
    # if request.method == "POST":
    #     clicked = request
    # return render_template('test.html', clicked=clicked)
    return jsonify(x)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True)
