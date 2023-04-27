import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [HeaderComponent, ErrorMessageComponent],
  imports: [HttpClientModule, CommonModule],
  exports: [HeaderComponent, ErrorMessageComponent, CommonModule],
})
export class SharedModule {}
