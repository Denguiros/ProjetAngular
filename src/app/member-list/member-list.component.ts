import { Component, OnInit } from '@angular/core';
import { member } from 'src/models/member.model';
import { GLOBAL } from '../app-config';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  datasource: member[] = GLOBAL._DB.members;
  displayedColumns = [
    'id',
    'cin',
    'name',
    'type',
    'cv',
    'createdDate',
    'actions',
  ];
}
