from flask import Flask, render_template, redirect, request, url_for
# from models import events
app = Flask(__name__)

# eventsManager = events.EventManager()

@app.route("/")
def root():
  return render_template('main.html')

@app.route("/events", methods=["POST"])
def create_event():
  body = request.form.to_dict()
  
  print(body)
  
  return redirect(url_for('root'))

@app.route("/more")
def more():
  return render_template('more.html')