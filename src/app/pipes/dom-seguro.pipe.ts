import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
  constructor(
    private donSamitizer: DomSanitizer
  ) {}
  transform(uriValue: string): any {
    const url = 'https://open.spotify.com/embed?uri=';
    return this.donSamitizer.bypassSecurityTrustResourceUrl(url + uriValue);
  }

}
