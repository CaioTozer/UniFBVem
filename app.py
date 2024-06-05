from flask import Flask, render_template, redirect, request, url_for
from models.events import EventManager, Event
app = Flask(__name__)

eventsManager = EventManager()

@app.route("/")
def root():
  return render_template('main.html', events=eventsManager.list_events())

@app.route("/events", methods=["POST", "PUT", "DELETE"])
def create_event():
  body = request.json
  
  print(body)
  
  if request.method == "DELETE":
    eventsManager.remove_event(body['title'])
    return redirect(url_for('root'))
  
  event = Event(
    imageUrl='',
    title=body['name'],
    obs=body['description'],
    time=body['time'],
    date=body['date'],
    local=body['address']
  )
  
  if request.method == "POST":
    eventsManager.add_event(event)
  elif request.method == "PUT":
    eventsManager.update_event(event)
  
  return redirect(url_for('root'))

@app.route("/send-buy-mail", methods=["POST"])
def sendBuyEmail():
  body = request.form.to_dict()
  
  print(f"Sending email to {body['name']}({body['email']}) buying a ticket with value {body['ticket-price']}")
  
  return redirect(url_for('root'))

@app.route("/more")
def more():
  return render_template('more.html')