import { Component, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { NavbarItem } from "src/app/_models/navbar-item";

import { environment } from "src/environments/environment";
import * as L from "leaflet";
import { geoData } from "../../../assets/data/geoData";
import { AuthenticationService } from "../../_services/authentication.service";
import { SharedService } from "src/app/shared/common/shared-service";
import { VOCABULARY } from "src/assets/data/vocabulary";
import { userInfo } from 'os';
import { UserSession } from 'src/app/_models/user-session';
import { WorkflowService } from 'src/app/_services/workflow.service';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements AfterViewInit {
  @Output() country = new EventEmitter();

  private map: L.Map;
  private paris: [number, number] = [
    environment.gps.parisLatitude,
    environment.gps.parisLongitude,
  ];
  private languageSelected: string;
  private languageChoice: string;
  private userToken: UserSession;

  public opened = false;
  public countryName: string;
  public languages = [];
  public navBarItems: NavbarItem[] = [];
  public showConfirm: boolean = false;
  public toggleBtnMsg: string;
  public toggleOpenButton: string;
  public toggleCloseButton: string;
  public submitSidenavButton: string;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    public auth: AuthenticationService,
    private sharedService: SharedService,
    private workflow: WorkflowService
  ) {
    this.setNavBar();
  }

  ngOnInit() {
    this.toggleOpenButton = VOCABULARY.find((v) => v.isoCode === 'fr').sentences.toggleOpenButton;
    this.toggleCloseButton = VOCABULARY.find((v) => v.isoCode === 'fr').sentences.toggleCloseButton;
    this.submitSidenavButton = VOCABULARY.find((v) => v.isoCode === 'fr').sentences.submitSidenavButton;
    this.toggleBtnMsg = this.toggleOpenButton.valueOf();
  }

  ngAfterContentChecked() {
    this.languageChoice = this.sharedService.languageChoice
    if (this.languageChoice !== undefined) {
    const changeWording = VOCABULARY.find((v) => v.isoCode === this.languageChoice);
      this.toggleOpenButton = changeWording.sentences.toggleOpenButton;
      this.toggleCloseButton = changeWording.sentences.toggleCloseButton;
      this.submitSidenavButton = changeWording.sentences.submitSidenavButton;
      this.toggleBtnMsg = this.toggleOpenButton.valueOf();
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.initStatesLayer();
  }

  private setNavBar(): void {
    if (!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/settings.svg`,
          // infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true,
        },
      ];
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          // infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/language.svg`,
          // infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/chat.svg`,
          // infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true,
        },
        {
          icon: `assets/icons/settings.svg`,
          // infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true,
        },
      ];
    }
  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(geoData, {
      style: (feature) => ({
        color: "#FFFFFF",
        weight: 3,
        opacity: 0.2,
        fillOpacity: 0.1,
        fillColor: "#FFFFFF",
      }),
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseover: (e) => {
            this.highlightFeature(e);
            // //   this.onDisplayInfo(e)
          },
          mouseout: (e) => {
            this.resetFeature(e);
          },
          click: (e) => {
            this.highlightFeature(e);
            this.onDisplayInfo(e);
            // this.zoomToFeature(e)
          },
        });
      },
    });
    this.map.addLayer(stateLayer);
    stateLayer.bringToBack();
  }

  public highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.3,
      color: "#FFFFFF",
      fillOpacity: 1,
      fillColor: "#f07f7f",
    });
    if (!L.Browser.ie && !L.Browser.opera) {
      layer.bringToFront();
    }
  }

  private resetFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 3,
      opacity: 0.2,
      color: "#FFFFFF",
      fillOpacity: 0.1,
      fillColor: "#FFFFFF",
    });
    this._snackBar.dismiss();
  }

  private zoomToFeature(e) {
    this.map.fitBounds(e.target.getBounds());
  }

  private initMap(): void {
    this.map = L.map("map").setView(this.paris, 2);

    const tiles = L.tileLayer(environment.tilesLayer1, {
      attribution: "Map",
      minZoom: 3,
      maxZoom: 8,
    });

    tiles.addTo(this.map);
  }

  private onDisplayInfo(e) {
    this.languages = [];
    this.countryName = e.target.feature.properties.name;
    this._snackBar.open(this.countryName);
    this.country.emit(this.countryName);
    e.target.feature.properties.language.forEach((element) => {
      this.languages.push(element.frenchName);
    });
  }

  protected log(state) {
    if (state == `Opened`) this.toggleBtnMsg = this.toggleCloseButton.valueOf();
    else if (state == `Closed`)
      this.toggleBtnMsg = this.toggleOpenButton.valueOf();
  }

  public onChangeItem(value) {
    this.languageSelected = value;
    this.showConfirm = !this.showConfirm;
  }

  public confirm() {
    if (this.languageSelected !== undefined && this.languageSelected !== null) {
      const feat = geoData.features;
      const isoCodeFiltered = feat.filter((language) => {
        return ( language.properties.language[0].frenchName == this.languageSelected.trim() );
      });
      const isoCode = isoCodeFiltered[0].properties.language[0].code;
      const userType = 'Candidat';
      console.log('userType Map : ', userType)
      this.userToken = {
        userTypeSession: userType,
        userLanguageSession: isoCode
      }
      this.workflow.setUser(this.userToken);
      this.router.navigateByUrl(`auth`);
    }
  }
}
