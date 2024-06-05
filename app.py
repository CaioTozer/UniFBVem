from flask import Flask, render_template, redirect, request, url_for
from models.events import EventManager, Event
app = Flask(__name__)

eventsManager = EventManager()

@app.route("/")
def root():
  return render_template('main.html', events=eventsManager.list_events())

@app.route("/events", methods=["POST"])
def create_event():
  body = request.form.to_dict()
  
  event = Event(
    imageUrl=body['event-thumb'],
    title=body['event-name'],
    obs=body['event-obs'],
    time=body['event-time'],
    date=body['event-date'],
    local=body['event-address']
  )
  
  eventsManager.add_event(event)
  
  return redirect(url_for('root'))

@app.route("/more")
def more():
  return render_template('more.html')