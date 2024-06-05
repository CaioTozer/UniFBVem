from dataclasses import dataclass
from datetime import datetime
from typing import List

@dataclass
class Event:
  imageUrl: str
  title: str
  obs: str
  time: str
  date: str
  local: str

class EventManager:
    events: List[Event]
  
    def __init__(self):
        self.events = []

    def add_event(self, event: Event):
      if not event.obs:
        event.obs = ""
      
      self.events.append(event)
      
      return event

    def remove_event(self, title: str):
        for event in self.events:
            if event.title == title:
                self.events.remove(event)
                
                return event
        return None

    def list_events(self):
        return self.events

    def update_event(self, newEvent: Event):
        for index, event in enumerate(self.events):
            if event.title == newEvent.title:
                self.events[index] = newEvent
              
                return newEvent
        return None