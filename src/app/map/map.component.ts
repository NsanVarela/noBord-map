import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment'
import * as L from 'leaflet'
import { geoData } from '../../assets/data/geoData'
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: L.Map
  private paris: [number, number]  = [environment.gps.parisLatitude, environment.gps.parisLongitude]
  protected countryName: string
  @Output() country = new EventEmitter()

  constructor(private _snackBar: MatSnackBar) {}

  ngAfterViewInit(): void {
    this.initMap()
    this.initStatesLayer()
  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(geoData, {
      style: (feature) => ({
        color: "#f07f7f",
        weight: 3,
        opacity: 0.2,
        fillOpacity: 0.1,
        fillColor: "#2262CC"
      }),
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseover: (e) => {
            this.onDisplayInfo(e)
            return this.highlightFeature(e)
          },
          mouseout: (e) => (this.resetFeature(e)),
          click: (e) => {
            (this.zoomToFeature(e))
          }
        })
      }
    })

    this.map.addLayer(stateLayer)
    stateLayer.bringToBack()
  }

  protected highlightFeature(e)  {
    const layer = e.target
    layer.setStyle({
      weight: 3,
      opacity: 0.3,
      color: '#f07f7f',
      fillOpacity: 1.0,
      fillColor: '#f07f7f'
    })
  }

  private resetFeature(e)  {
    const layer = e.target
    layer.setStyle({
      weight: 3,
      opacity: 0.2,
      color: '#2262CC',
      fillOpacity: 0.1,
      fillColor: '#2262CC'
    })
  }

  private zoomToFeature(e) {
    this.map.fitBounds(e.target.getBounds());
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
    this.countryName = e.target.feature.properties.name
    this._snackBar.open(this.countryName)
    this.country.emit(this.countryName)
  }

}
