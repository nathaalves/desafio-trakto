import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { HomeAnchorComponent } from './components/home-anchor/home-anchor.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HomeAnchorComponent],
  imports: [HomeRoutingModule, SharedModule],
  exports: [],
})
export class HomeModule {}
