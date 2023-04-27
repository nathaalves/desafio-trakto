import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, SharedModule, LoginRoutingModule],
})
export class LoginModule {}
