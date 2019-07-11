import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 
import { Player } from '../player';
import { Block } from '../block';
@Injectable()
export class PaisesService {


	constructor(public miHttp: MiHttpService) { 
	
	}

	
}
