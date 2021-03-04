import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotosComponent } from './fotos/fotos.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [FotosComponent],
  exports: [FotosComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
