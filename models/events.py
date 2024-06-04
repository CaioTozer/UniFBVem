from dataclasses import dataclass
from datetime import datetime
from typing import List

@dataclass
class Event:
    imageUrl: str
    title: str
    obs: str = ""
    date: str
    local: str

class EventManager:
    events: List[Event]
  
    def __init__(self):
        self.events = [
          {
            "image": "../Assets/Palestra T.i.png",
            "title": "Palestra semana da T.I",
            "local": "Local: Auditório do mestrado",
            "time": "19:00",
            "date": "2024-02-01",
            "obs": "Obs: Palestra para aresentação da área, sobre seus benefícios, desvantagens e desafios para concientização dos alunos.",
          },
          {
            "image": "path/to/image1.jpg",
            "title": "Evento 1",
            "local": "Local 1",
            "time": "12:00",
            "date": "2024-02-01",
            "obs": "Observações do Evento 1",
          },
          {
            "image": "path/to/image2.jpg",
            "title": "Evento 2",
            "local": "Local 2",
            "time": "15:00",
            "date": "2024-02-01",
            "obs": "Observações do Evento 2",
          },
        ]

    def add_event(self, event: Event):
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