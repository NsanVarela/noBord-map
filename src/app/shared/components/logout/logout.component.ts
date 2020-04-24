import { Component, OnInit } from '@angular/core'
import { MatDialogRef } from '@angular/material'
import { Router } from '@angular/router'

import { AuthenticationService } from '../../../_services/authentication.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private dialogRef: MatDialogRef<LogoutComponent>,
    private auth: AuthenticationService,
    public router: Router
  ) { }

  public confirm() {
    this.dialogRef.close()
    this.auth.logout()
    this.router.navigateByUrl(`home`)
  }

  public cancel() {
    this.dialogRef.close()
  }

}
