import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  data: any;
  teamData:any;
  index:any;
  teamName: String='';
  managers: any[] = [];
  specifiedTeam: any = null;
  constructor(private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService) { }

    ngOnInit(): void {
      this.sharedDataService.teamData$.subscribe((test) => {
        this.teamData = test;
      });
      this.index=this.teamData.teamIndex
      console.log('This is the index')
      console.log(this.index)
      this.specifiedTeam = this.route.snapshot.paramMap.get('teamName') || '';
      console.log(this.specifiedTeam)
      // this.teamIndex = this.route.snapshot.paramMap.get(i);
      // console.log(this.teamIndex)
      this.dataService.getData().subscribe((data) => {
        this.data = data;
        // this.teams = data.teams.name;
        // console.log(this.teams)
        this.managers = data.managers
      });
    }

  viewForm(team:any){
console.log(team)
    this.router.navigate(['form'])
  }
  logout(){
        this.router.navigate(['']);
  }

  goBack(){
      this.router.navigate(['home']);
    
  }
}
