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
  MatInputModule,
  MatSelectModule
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
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
