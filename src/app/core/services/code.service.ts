import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import structures from '../structures/structure.json';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  structures: any = structures;

  constructor(private http: HttpClient) { }

  getStructure = (): any => this.structures;

  retrieve = async (section: string, filename: string): Promise<string> => {
    const folder: string = this.structures[section].folder;
    const file: string = await firstValueFrom(this.http.get(`/assets/code/${ folder }/${ filename }`, { responseType: 'text' }));
    return file;
  };

}
