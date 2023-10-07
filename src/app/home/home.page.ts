import { Component } from '@angular/core';
import { CatsApiService } from '../service/api-cats.service';
import { CatsInformation } from '../interface/cat-interface';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataCompleteds :CatsInformation[] = [];
  imagenAlternativaUrl = 'assets/images/image_no_found.jpg';

  constructor(
    private apiCatsService: CatsApiService,
  ) {}

  ngOnInit(){
    this.Apicats();
  }

 
GetImageError(event: Event) {
  console.log(event);
  if (event instanceof Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.imagenAlternativaUrl;
  }
}



   Apicats() {

    let result = this.apiCatsService.getCatIndormation();
    result.subscribe((data: CatsInformation[]) => {
      this.dataCompleteds = data
    })
  }
  
  


 
}
