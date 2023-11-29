import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    data: any;  
    constructor(private router: Router,
      private dataService: DataService) {}


    ngOnInit(): void {
      this.dataService.getData().subscribe((data) => {
        this.data = data;
        console.log("test")
        console.log(this.data)
      });
      console.log(this.data)
    }

  viewTeam(){
    this.router.navigate(['roles'])
  }
  logout(){
        this.router.navigate(['']);
  }

      }
