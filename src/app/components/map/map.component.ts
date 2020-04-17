import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material'
import { NavbarItem } from 'src/app/_models/navbar-item';

import { environment } from 'src/environments/environment'
import * as L from 'leaflet'
import { geoData } from '../../../assets/data/geoData'
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  protected toggleBtnMsg: string = `OUVRIR LE MENU`
  protected opened = false
  private map: L.Map
  private paris: [number, number]  = [environment.gps.parisLatitude, environment.gps.parisLongitude]
  protected countryName: string
  protected languages = []
  public navBarItems: NavbarItem[] = []

  @Output() country = new EventEmitter()

  constructor(
    private _snackBar: MatSnackBar,
    public auth: AuthenticationService
  ) {
    this.setNavBar()
  }

  ngAfterViewInit(): void {
    this.initMap()
    this.initStatesLayer()
  }

  public setNavBar(): void {
    if(!this.auth.isLoggedIn()) {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/settings.svg`,
          infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true
        }
      ]
    } else {
      this.navBarItems = [
        {
          icon: `assets/icons/home_app.svg`,
          infoTitle: `HOME`,
          link: `home`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/language.svg`,
          infoTitle: `MAP`,
          link: `map`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/translate.svg`,
          infoTitle: `CHAT`,
          link: `chat`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/settings.svg`,
          infoTitle: `PARAMÈTRES`,
          link: `profile`,
          isDisplayed: true
        },
        {
          icon: `assets/icons/exit_app.svg`,
          infoTitle: `DECONNEXION`,
          link: `logout`,
          isDisplayed: true
        }
      ]
    }
  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(geoData, {
      style: (feature) => ({
        color: "#FFFFFF",
        weight: 3,
        opacity: 0.2,
        fillOpacity: 0.1,
        fillColor: "#FFFFFF"
      }),
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseover: (e) => {
            this.highlightFeature(e)
            this.onDisplayInfo(e)
          },
          mouseout: (e) => {
            this.resetFeature(e)
          },
          click: (e) => {
            this.highlightFeature(e)
            this.onDisplayInfo(e)
            // this.zoomToFeature(e)
          }
        })
      }
    })
    this.map.addLayer(stateLayer)
    stateLayer.bringToBack()
  }

  protected highlightFeature(e)  {
    // console.log('e', e)
    const layer = e.target
    layer.setStyle({
      weight: 3,
      opacity: 0.3,
      color: '#FFFFFF',
      fillOpacity: 1.0,
      fillColor: '#f07f7f'
    })
    if (!L.Browser.ie && !L.Browser.opera) {
      layer.bringToFront();
    }
  }

  private resetFeature(e)  {
    const layer = e.target
    layer.setStyle({
      weight: 3,
      opacity: 0.2,
      color: '#FFFFFF',
      fillOpacity: 0.1,
      fillColor: '#FFFFFF'
    })
    this._snackBar.dismiss()
  }

  private zoomToFeature(e) {
    this.map.fitBounds(e.target.getBounds())
  }

  private initMap(): void {
    this.map = L.map('map').setView(this.paris, 2)

    const tiles = L.tileLayer(environment.tilesLayer2, {
      attribution: "Map",
      minZoom: 3,
      maxZoom: 8
    })

    tiles.addTo(this.map)
  }

  private onDisplayInfo(e) {
    this.languages = []
    this.countryName = e.target.feature.properties.name
    this._snackBar.open(this.countryName)
    this.country.emit(this.countryName)
    e.target.feature.properties.language.forEach(element => {
      this.languages.push(element.frenchName)
    })
  }

  protected log(state) {
    if(state == `Opened`)
      this.toggleBtnMsg = `FERMER LE MENU`
    else if(state == `Closed`)
      this.toggleBtnMsg = `OUVRIR LE MENU`
  }

}
