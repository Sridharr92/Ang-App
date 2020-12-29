import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ContactusPageRoutingModule } from './contactus-page-routing.module';
import { ContactusPageComponent } from './contactus-page.component';


@NgModule({
  declarations: [ContactusPageComponent],
  imports: [
    CommonModule,
    ContactusPageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  exports:[ContactusPageComponent],
})
export class ContactusPageModule { }
