import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatIconModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatCardModule
} from "@angular/material";

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatIconModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatCardModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
