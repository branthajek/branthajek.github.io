import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  codeDescription: string;
  viewBrowser: string;
  viewCode: string;
  cols: number;
  rows: number;
} 

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})

export class ProjectCardsComponent {
  cards: Project[] = [
    { 
      title: 'Shopping List App', 
      description: 'This is a pretty big, full-featured Angular app in all of its glory. It allows you to create an account and add recipes along with ingredients and images, description, etc. The ingredients can be added to the shopping list, and your recipes can be saved to the database.',
      codeDescription: 'Angular, NgRx, Bootstrap, Firebase back-end',
      viewBrowser: 'https://shopping-list-eb81d.web.app/auth',
      viewCode: 'https://github.com/branthajek/shopping-list',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Location Info App', 
      description: 'I explore Typescript on its own and experiment with some RESTful API calls from Google Maps, as well as OpenWeather. This allows you to enter a location which will be marked on a google map widget with a pin, and some current information for the entered location will display including elevation, current temperature, and weather conditions.',
      codeDescription: 'Typescript, Axios, Google Maps JS API, OpenWeatherMap API, Bootstrap',
      viewBrowser: 'https://location-info-3c68f.web.app/',
      viewCode: 'https://github.com/branthajek/location-info',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'To-do List App', 
      description: 'This is a simple app that explores the possibility of using React with Typescript, for type-safety and better IDE support. You can create a to-do item, and delete each one individually whenever they are complete.',
      codeDescription: 'React, Typescript',
      viewBrowser: 'https://to-do-list-react-ts.web.app',
      viewCode: 'https://github.com/branthajek/todo-list-react-ts',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Drag and Drop', 
      description: 'Using only Typescript, I created validation for form inputs to create new projects that can be clicked and moved into the complete or in-progress categories.',
      codeDescription: 'Typescript, Bootstrap',
      viewBrowser: 'https://drag-and-drop-98d15.web.app',
      viewCode: 'https://github.com/branthajek/projects-drag-n-drop',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Weather App', 
      description: 'Using plain ES6 Javascript, I created simple weather app using the OpenWeatherMap API. You can enter a city and get the current weather conditions for that location.',
      codeDescription: 'Javascript, OpenWeatherMap API',
      viewBrowser: 'https://js-weather-app-5cf87.web.app',
      viewCode: 'https://github.com/branthajek/weather-app',
      cols: 1, 
      rows: 1 
    }
  ];

  constructor() {}


  openLink(url: string){
    window.open(url)
  }

}
