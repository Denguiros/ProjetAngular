import { Component, OnInit } from '@angular/core';
import { member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  datasource: member[] = [];
  ngOnInit(): void {
    this.fetchDataSource();
  }
  fetchDataSource(): void {
    this.datasource = this.memberService.tab;
  }
  displayedColumns = [
    'id',
    'cin',
    'name',
    'type',
    'cv',
    'createdDate',
    'actions',
  ];
  constructor(private memberService: MemberService) {}
}
