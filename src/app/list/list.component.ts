import { Component,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  
  ngOnInit(): void {
    console.log('Component initialized');
    // Add your initialization logic here
  }
}
