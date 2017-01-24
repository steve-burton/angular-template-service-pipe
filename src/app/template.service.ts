import { Injectable } from '@angular/core';
import { Template } from './template.model';
import { TEMPLATES } from './mock-templates';

@Injectable()
export class TemplateService {
  constructor() { }
  index: number;
  getTemplates() {
    return TEMPLATES;
  }

  getTemplateById(templateId: number) {
    for(var i=0; i<TEMPLATES.length; i++) {
      if(TEMPLATES[i].id===templateId){
        return TEMPLATES[i];
      }
    }
  }

  addTemplate(newTemplate: Template) {
    TEMPLATES.push(newTemplate);
  }

  deleteTemplate(selectedTemplateId: number) {
    for(var i = 0; i < TEMPLATES.length; i++) {
      if(TEMPLATES[i].id === selectedTemplateId) {
        this.index = i;
      }
    }
    TEMPLATES.splice(this.index, 1);
  }

  editTemplate(id) {
    for(var i = 0; i < TEMPLATES.length; i++) {
      if(TEMPLATES[i].id === id) {
        this.index = i;
      }
    }
    TEMPLATES[this.index] = new Template(id);
  }
}
