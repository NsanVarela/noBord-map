import { Component, AfterViewInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import * as L from 'leaflet'
import { geoData } from '../../assets/data/geoData'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: L.Map
  private paris: [number, number]  = [environment.gps.parisLatitude, environment.gps.parisLongitude]

  ngAfterViewInit(): void {
    this.initMap()
    this.initStatesLayer()
  }

  private initStatesLayer() {
    const stateLayer = L.geoJSON(geoData, {
      style: (feature) => ({
        color: "#2262CC",
        weight: 3,
        opacity: 0.2,
        fillOpacity: 0.1,
        fillColor: "#2262CC"
      }),
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseover: (e) => {
            console.log('Country name : ', e.target.feature.properties.name)
            return this.highlightFeature(e)
          },
          mouseout: (e) => (this.resetFeature(e)),
          click: (e) => (this.zoomToFeature(e))
        })
      }
    })

    this.map.addLayer(stateLayer)
    stateLayer.bringToBack()
  }

  private highlightFeature(e)  {
    const layer = e.target
    layer.setStyle({
      weight: 3,
      opacity: 0.3,
      color: '#12d8df',
      fillOpacity: 1.0,
      fillColor: '#12d8df'
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
    // this.map = L.map('map').setView([environment.gps.parisLatitude, environment.gps.parisLongitude], 3)
    this.map = L.map('map').setView(this.paris, 2)

    const tiles = L.tileLayer(environment.tilesLayer2, {
      attribution: "Map",
      minZoom: 3,
      maxZoom: 8
    })

    tiles.addTo(this.map)
  }

}
