import { Component } from '@angular/core';
import {FamilyService} from "../../core/services/family.service";
import {Observable} from "rxjs";
import {Family} from "../../core/models/family";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  title = "Başlık"
  $families: Observable<Family[]>;
  families: Family[] = []
  constructor(private familyService: FamilyService) {
    // iki çeşit yükleme yöntemi var.
    this.$families = this.familyService.getFamilies(); // rxjs araştırılmalı.
    this.familyService.getFamilies().subscribe(families => {
      this.families = families;
    })
  }
}
