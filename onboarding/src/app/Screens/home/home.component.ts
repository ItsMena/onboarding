import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    data: any;
    // teams:any[]=[];  
    managers: any[] = [];
    constructor(
      private router: Router,
      private dataService: DataService,
      private sharedDataService: SharedDataService) {}
    

    ngOnInit(): void {
      this.dataService.getData().subscribe((data) => {
        this.data = data;
        // this.teams = data.teams.name;
        // console.log(this.teams)
        this.managers = data.managers
      });
    }

  viewTeam(team:any, i:number){
this.router.navigate(['roles'])
this.sharedDataService.setTeamData({ teamName: team, teamIndex: i });
  }
  logout(){
        this.router.navigate(['']);
  }

      }
