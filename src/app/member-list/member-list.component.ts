import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';
import { RemoveMemberDialog } from './remove-member-dialog';
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
  fetchedName = {
    name: '',
  };
  getAllMembers() {
    this.datasource = this.memberService.tab;
  }
  onRemove(id: string) {
    this.memberService.deleteMemberById(id).then(() => {
      this.getAllMembers();
    });
  }
  searchMemebersByName(name: string) {
    if (name != '') {
      this.getAllMembers();
      this.datasource = this.datasource.filter((member) =>
        member.name.includes(name)
      );
    } else {
      this.getAllMembers();
    }
  }
  openRemoveMemberDialog(id: string) {
    const dialogRef = this.dialog.open(RemoveMemberDialog);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.onRemove(id);
      }
    });
  }
  constructor(
    private memberService: MemberService,
    private dialog: MatDialog
  ) {}
  //TODO: Filter lists by name
}
