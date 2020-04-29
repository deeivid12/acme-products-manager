import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ //exporto todos los modulos que considero van a ser compartidos.
    StarComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ] //exporto Common y Forms module para no tener que importarlos en los módulos
    //que usaran el Shared module. A fines prácticos.
})
export class SharedModule { }
