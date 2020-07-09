from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/',methods = ['POST','GET'])
def index():
    return render_template('home.html')

if __name__ =="__main__":
    app.run(port="7002",debug=True)