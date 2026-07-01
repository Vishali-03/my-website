from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/memories")
def memories():
    return render_template("memories.html")

@app.route("/funny")
def funny():
    return render_template("funny.html")
@app.route("/letter")
def letter():
    return render_template("letter.html")
@app.route("/musicbox")
def musicbox():
    return render_template("musicbox.html")
@app.route("/butterfly")
def butterfly():
    return render_template("butterfly.html")
@app.route("/star")
def star():
    return render_template("star.html")
@app.route("/heart")
def heart():
    return render_template("heart.html")
@app.route("/gift")
def gift():
    return render_template("gift.html")
@app.route("/dairy")
def dairy():
    return render_template("dairy.html")
@app.route("/moon")
def moon():
    return render_template("moon.html")
if __name__ == "__main__":
    app.run(debug=True)