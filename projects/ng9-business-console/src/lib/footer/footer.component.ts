import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng9-business-console-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title = 'footer component works!';
  constructor() { }

  ngOnInit(): void {
  }

}
