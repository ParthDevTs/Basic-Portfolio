import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WeatherComponent } from 'src/app/modules/weather/weather.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ThreeComponent } from 'src/app/modules/three/three.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ProfileComponent,
    WeatherComponent,
    ThreeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    NgbCarouselModule,
    NgbModule,
  ],
})
export class DefaultModule {}
