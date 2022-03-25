import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ModalComponent } from './modal/modal.component';

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
      title: 'Meetup App', 
      description: 'Revisiting React, I made this simple demo app with a firebase backend.',
      codeDescription: 'React, Firebase',
      viewBrowser: 'https://meetups-app-e77c3.web.app/',
      viewCode: 'https://github.com/branthajek/meetup-app',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Record Library', 
      description: 'This project was made so I could have access to a list of all of my records I own from anywhere. I can add to it easily, remove from the list, update how it is sorted, and search through the list for keywords.',
      codeDescription: 'Angular, Bootstrap, Firebase',
      viewBrowser: 'https://record-library-90ac8.web.app/library',
      viewCode: 'https://github.com/branthajek/record-library',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Portfolio Site', 
      description: 'I wanted to learn a little bit more about how to use Material components within an Angular app, so I made this site!',
      codeDescription: 'Angular, Material Design',
      viewBrowser: 'null',
      viewCode: 'https://github.com/branthajek/branthajek.github.io',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Shopping List App', 
      description: 'This is a pretty big, full-featured Angular app. It allows you to create an account and add recipes along with ingredients, an image, and description. The ingredients for each recipe can be added to the shopping list, and your recipes can be saved to the database.',
      codeDescription: 'Angular, NgRx, Bootstrap, Firebase back-end',
      viewBrowser: 'https://shopping-list-eb81d.web.app/auth',
      viewCode: 'https://github.com/branthajek/shopping-list',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Location Info App', 
      description: 'In plain Typescript, I used RESTful APIs from Google Maps and OpenWeatherMap. This app allows you to enter a location which will be marked on a google map widget with a pin, and some current information for the entered location will display including elevation, current temperature, and weather conditions.',
      codeDescription: 'Typescript, Axios, Google Maps JS API, OpenWeatherMap API, Bootstrap, Webpack',
      viewBrowser: 'https://location-info-3c68f.web.app/',
      viewCode: 'https://github.com/branthajek/location-info',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'To-do List App', 
      description: 'This is a simple app using React with Typescript, for type-safety and better IDE support. You can create a to-do item, and delete each one individually whenever they are complete.',
      codeDescription: 'React, Typescript',
      viewBrowser: 'https://to-do-list-react-ts.web.app',
      viewCode: 'https://github.com/branthajek/todo-list-react-ts',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Drag and Drop', 
      description: 'Using only Typescript, I created validation for form inputs to create new projects that can be clicked and moved into the complete or in-progress categories.',
      codeDescription: 'Typescript, Bootstrap, Webpack',
      viewBrowser: 'https://drag-and-drop-98d15.web.app',
      viewCode: 'https://github.com/branthajek/projects-drag-n-drop',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Weather App', 
      description: 'This is a very simple weather app made with plain Javascript, using the OpenWeatherMap API. You can enter a city and get the current weather conditions for that location.',
      codeDescription: 'Javascript, OpenWeatherMap API',
      viewBrowser: 'https://js-weather-app-5cf87.web.app',
      viewCode: 'https://github.com/branthajek/weather-app',
      cols: 1, 
      rows: 1 
    }
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  openLink(url: string){
    if (url === 'null') {
      this.openDialog();
    } else {
      window.open(url)
    }
  }
}
