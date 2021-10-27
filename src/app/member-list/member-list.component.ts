import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  datasource: Member[] = [];
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
  getAllMembers() {
    this.datasource = this.memberService.tab;
  }
  onRemove(id: string) {
    this.memberService.deleteMemberById(id).then(() => {
      this.getAllMembers();
    });
  }
  constructor(private memberService: MemberService) {}
  //TODO: Filter lists by name
}
