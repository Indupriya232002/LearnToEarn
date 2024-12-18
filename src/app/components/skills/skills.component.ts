import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  images = [
    { name: 'criticalthinking', videoUrl: 'https://www.youtube.com/embed/HnJ1bqXUnIM' },
    { name: 'Information', videoUrl: 'https://www.youtube.com/embed/2WB6RcY0MPc' },
    { name: 'problemsolving', videoUrl: 'https://www.youtube.com/embed/huTvW7sbK4U' },
    { name: 'profesionalism', videoUrl: 'https://www.youtube.com/embed/OuHJ7EExchY' },
    { name: 'speaking', videoUrl: 'https://www.youtube.com/embed/i5mYphUoOCs' },
    { name: 'teamcollaboration', videoUrl: 'https://www.youtube.com/embed/MwqwmLzY2vo' },
    { name: 'timemanagement', videoUrl: 'https://www.youtube.com/embed/iONDebHX9qk' },
    { name: 'EnglishLang', videoUrl: 'https://www.youtube.com/embed/CAU2zx2Ri_M' }
  ];

  showModal = false;
  currentVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  showVideo(url: string) {
    this.currentVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.currentVideoUrl = null; // Optionally clear the video URL when closing
  }
}
