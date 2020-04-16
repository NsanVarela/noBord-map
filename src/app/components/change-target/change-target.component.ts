import { Component, OnInit, Input } from "@angular/core";
import { LanguageService } from '../../_services/language.service';
import { Languages } from "../../_models/languages";

@Component({
  selector: "app-changeTarget",
  templateUrl: "./change-target.component.html",
  styleUrls: ["./change-target.component.scss"]
})
export class ChangeTargetComponent implements OnInit {
  public targets;
  public selectOption: string = `Sélectionnez une langue`;
  public changeTrad: string;
  protected languages: Languages;
  protected selectedLanguage: string;
  protected newLanguage: string;

  @Input("title") title: string;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.getLanguages().subscribe({
      next: data => {
        this.targets = data;
      }
    });
  }

  getTranslation(e, provider) {
    this.selectedLanguage =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.substring(1).toLowerCase();
    this.targets.map(el => {
      if (el.name.includes(this.selectedLanguage)) {
        this.newLanguage = el.code;
      }
      console.log(`Language not supported`);
    });
    this.languageService
      .getTranslation(this.title, this.newLanguage, "ALL")
      .subscribe({
        next: data => {
          this.changeTrad = data.data.translate[0].text;
        }
      });
  }
}
