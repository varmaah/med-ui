import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-project';

  onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
}

onDeactivate() {
  document.body.scrollTop = 0;
}
}


