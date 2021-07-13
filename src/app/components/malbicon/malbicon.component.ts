import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { icons } from './icons_file';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'malb-icon',
  templateUrl: './malbicon.component.html',
  styleUrls: ['./malbicon.component.scss'],
})
export class MalbiconComponent implements OnInit {
  @Input() icon = 'solid_industry';
  @Input() width = '50px';
  @Input() height = '50px';
  @Input() color = '#000000';
  @ViewChild('imagefile') imagefile: ElementRef;

  public image;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 100);
  }

  init() {
    console.log(this.imagefile);
    let el: HTMLElement = this.imagefile.nativeElement;
    this.image = icons[this.icon];

    var encoded = this.image.substring(26);
    var decoded = atob(encoded);

    // Create an HTML element from decoded SVG
    var wrapper = document.createElement('div');
    wrapper.innerHTML = decoded;
    var newSvg = <HTMLElement> wrapper.firstChild;

    // Lookup the <path> and get a ref
    var innerPath = newSvg.getElementsByTagName('path')[0];

    // Set up new color
    innerPath.setAttribute('fill', this.color);
    newSvg.style.width = this.width;
    newSvg.style.height = this.height;
    // Show modified image
    el.appendChild(newSvg);
  }
}
