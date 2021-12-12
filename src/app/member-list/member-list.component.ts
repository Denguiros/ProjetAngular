import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialog } from '../dialog-component/confirm-dialog';
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
  searchMembers(input: string) {
    const foundMemebersById = this.searchMembersById(input);
    const foundMembersByName = this.searchMemebersByName(input);
    const allFoundMembers = foundMembersByName.concat(foundMemebersById);
    if (
      (allFoundMembers === undefined || allFoundMembers.length === 0) &&
      input === ''
    )
      this.getAllMembers();
    else {
      this.datasource = allFoundMembers;
    }
  }
  searchMembersById(input: string) {
    if (input != '') {
      this.getAllMembers();
      return this.datasource.filter((member) => member.id.includes(input));
    }
    return [];
  }
  searchMemebersByName(input: string) {
    if (input != '') {
      this.getAllMembers();
      return this.datasource.filter((member) => member.name.includes(input));
    }
    return [];
  }

  openRemoveMemberDialog(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialog);

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
}
