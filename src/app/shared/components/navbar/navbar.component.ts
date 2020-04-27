import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { NavbarItem } from 'src/app/_models/navbar-item';
import { AuthenticationService } from 'src/app/_services/authentication.service';

import { LogoutComponent } from '../logout/logout.component';
import { LanguageComponent } from '../language/language.component';
import { SharedService } from 'src/app/shared/common/shared-service';
import { VOCABULARY } from 'src/assets/data/vocabulary';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() items: NavbarItem[]
  @Output() perform: EventEmitter<any> = new EventEmitter<any>()

  private isMobile: boolean = false
  private languageChoice: string

  public title: string
  // private languageNav: string

  constructor( private route: ActivatedRoute, private breakpointObserver: BreakpointObserver,
    public router: Router, public dialog: MatDialog, public auth: AuthenticationService, private sharedService: SharedService ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.title = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.appNameNav
    // this.languageNav = VOCABULARY.find( (v) => v.isoCode === `fr-FR` ).sentences.languageNav
  }

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if (this.languageChoice !== undefined) {
      const changeWording = VOCABULARY.find( (v) => v.isoCode === this.languageChoice )
      this.title = changeWording.sentences.appNameNav
      // this.languageNav = changeWording.sentences.languageNav
    }
  }

  ngAfterContentInit() {
    if(this.auth.isLoggedIn()) {
      this.items.push({
        icon: `assets/icons/exit_app.svg`,
        // infoTitle: `DECONNEXION`,
        link: `logout`,
        isDisplayed: true
      })
    } else {
      this.items.push({
        icon: `assets/icons/translate.svg`,
        // infoTitle: this.languageNav,
        link: `translate`,
        isDisplayed: true
      })
    }
  }

  public onClick(item: NavbarItem): void {
    if (item.link !== undefined) {
      if (item.link === `logout`) {
        this.dialog.open(LogoutComponent, {
          width: this.isMobile ? `90%` : `800px`,
          height: this.isMobile ? `100%` : `300px`,
          panelClass: `customDialog`,
        })
      } else if (item.link === `translate`) {
        this.dialog.open(LanguageComponent, {
          width: this.isMobile ? `90%` : `800px`,
          height: this.isMobile ? `100%` : `300px`,
          panelClass: `customDialog`,
        })
      } else if (item.link === `profile`) {
        // console.log('details profile : ', this.auth.getUserDetails().username)
      } else {
        this.goTo(item.link);
      }
    } else {
      this.perform.emit(item.action);
    }
  }

  public goTo(where: string): void {
    if (where === `return`) {
      this.route.params.subscribe((params) => {
        this.router.navigate([params.from]);
      });
    } else {
      this.router.navigate([where]);
    }
  }

}
