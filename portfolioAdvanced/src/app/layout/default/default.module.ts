import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, ProfileComponent],
  imports: [CommonModule, RouterModule],
})
export class DefaultModule {}
