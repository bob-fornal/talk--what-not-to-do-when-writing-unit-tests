import { Component } from '@angular/core';
import { CodeService } from './core/services/code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  structure: any = {
    ORDER: []
  };

  constructor(private code: CodeService) {
    this.init();
  }

  init = async (): Promise<void> => {
    this.structure = this.code.getStructure();
    console.log(this.structure);
    const file = await this.code.retrieve('in-the-test', 'manager.js');
    console.log(file);
  };
}
