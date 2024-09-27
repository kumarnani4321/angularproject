import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastorService } from '../pastor.service'; // Adjust the path as needed
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  userId!: string;
  christudasEntries$!: Observable<any>; // Use definite assignment assertion
  jashuvaEntries$!: Observable<any>; // Use definite assignment assertion

  constructor(private route: ActivatedRoute, public pastorService: PastorService) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('UserId')!;
    console.log('User ID:', this.userId);

    // Fetch entries from the service
    this.christudasEntries$ = this.pastorService.getEntries().pipe(
      map(entries => entries.filter(entry => entry.pastorName === 'Christudas Pastor'))
    );

    this.jashuvaEntries$ = this.pastorService.getEntries().pipe(
      map(entries => entries.filter(entry => entry.pastorName === 'Jashuva Pastor'))
    );
  }
}
