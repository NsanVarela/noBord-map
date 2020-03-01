import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatIconModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatCardModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatIconModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatCardModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
