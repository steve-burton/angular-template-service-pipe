import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from '../template.model';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [TemplateService]
})
export class SplashComponent {
  constructor(private router: Router, private templateService: TemplateService) { }
  goToTemplateDetail(selectedTemplate: Template) {
    this.router.navigate(['templates', selectedTemplate.id]);
  };
}
