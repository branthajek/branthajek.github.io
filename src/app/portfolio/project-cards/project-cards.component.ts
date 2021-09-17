import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
      codeDescription: 'Angular, NgRx, Bootstrap, Firebase backend',
      viewBrowser: 'https://shopping-list-eb81d.web.app/auth',
      viewCode: 'https://github.com/branthajek/shopping-list',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Location Info App', 
      description: 'I explore Typescript on its own and experiment with some RESTful API calls from Google Maps, as well as OpenWeather. This allows you to enter a location which will be marked on a google map widget with a pin, and some current information for the entered location will display including elevation, current temperature, and weather conditions. There is another feature I was messing with where you can choose a state, and then a county, and it will list all trailheads for that county below. I intend on recreating and improving this app in Angular soon.',
      codeDescription: 'Typescript',
      viewBrowser: 'https://location-info-3c68f.web.app/',
      viewCode: 'https://github.com/branthajek/location-info',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Simple to-do App', 
      description: 'This is a simple app that explores the possibility of using React with Typescript, for type-safety and better IDE support. You can create a to-do item, and delete each one individually whenever they are complete.',
      codeDescription: 'ReactJs, Typescript, Bootstrap',
      viewBrowser: '',
      viewCode: 'https://github.com/branthajek/todo-list-react-ts',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Drag and Drop', 
      description: 'Using Typescript, I created validation for form inputs to create new projects that can be clicked and moved into the complete or in-progress categories.',
      codeDescription: 'Typescript',
      viewBrowser: '',
      viewCode: 'https://github.com/branthajek/projects-drag-n-drop',
      cols: 1, 
      rows: 1 
    },
    { 
      title: 'Weather App', 
      description: 'Using plain ES6 Javascript, I created simple weather app using the OpenWeather API. You can enter a location and get some current weather conditions for that place.',
      codeDescription: 'Javascript',
      viewBrowser: '',
      viewCode: 'https://github.com/branthajek/weather-app',
      cols: 1, 
      rows: 1 
    }
  ];

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { 
  //           title: 'Shopping List App', 
  //           description: 'This is a pretty big, full-featured Angular app in all of its glory. It allows you to create an account and add recipes along with ingredients and images, description, etc. The ingredients can be added to the shopping list, and your recipes can be saved to the database.',
  //           codeDescription: 'Angular, NgRx, Bootstrap, Firebase backend',
  //           viewBrowser: 'https://shopping-list-eb81d.web.app/auth',
  //           viewCode: 'https://github.com/branthajek/shopping-list',
  //           cols: 1, 
  //           rows: 1 
  //         },
  //         { 
  //           title: 'Location Info App', 
  //           description: 'I explore Typescript on its own and experiment with some RESTful API calls from Google Maps, as well as OpenWeather. This allows you to enter a location which will be marked on a google map widget with a pin, and some current information for the entered location will display including elevation, current temperature, and weather conditions. There is another feature I was messing with where you can choose a state, and then a county, and it will list all trailheads for that county below. I intend on recreating and improving this app in Angular soon.',
  //           codeDescription: 'Typescript',
  //           viewBrowser: 'https://location-info-3c68f.web.app/',
  //           viewCode: 'https://github.com/branthajek/location-info',
  //           cols: 1, 
  //           rows: 1 
  //         },
  //         { 
  //           title: 'Simple to-do App', 
  //           description: 'This is a simple app that explores the possibility of using React with Typescript, for type-safety and better IDE support. You can create a to-do item, and delete each one individually whenever they are complete.',
  //           codeDescription: 'ReactJs, Typescript, Bootstrap',
  //           cols: 1, 
  //           rows: 1 
  //         },
  //         { 
  //           title: 'Drag and Drop', 
  //           description: 'Using Typescript, I created validation for form inputs to create new projects that can be clicked and moved into the complete or in-progress categories.',
  //           codeDescription: 'Typescript',
  //           cols: 1, 
  //           rows: 1 
  //         },
  //         { 
  //           title: 'Weather App', 
  //           description: 'Using plain ES6 Javascript, I created simple weather app using the OpenWeather API. You can enter a location and get some current weather conditions for that place.',
  //           codeDescription: 'Javascript',
  //           cols: 1, 
  //           rows: 1 
  //         }
  //       ];
  //     }

  //     return [
  //       { 
  //         title: 'Shopping List App', 
  //         cols: 2, 
  //         rows: 1 
  //       },
  //       { 
  //         title: 'Code Project 2', 
  //         cols: 1, 
  //         rows: 1 
  //       },
  //       { 
  //         title: 'Code Project 2', 
  //         cols: 1, 
  //         rows: 2 
  //       },
  //       { 
  //         title: 'Code Project 2', 
  //         cols: 1, 
  //         rows: 1 
  //       },
  //       { 
  //         title: 'Code Project 4', 
  //         cols: 1, 
  //         rows: 1 
  //       }
  //     ];
  //   })
  // );

  constructor(private breakpointObserver: BreakpointObserver) {}


  openLink(url: string){
    window.open(url)
  }

}
