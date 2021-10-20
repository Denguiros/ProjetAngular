import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  public tab: Member[] = GLOBAL._DB.members;
  constructor(private httpClient: HttpClient) {}
  saveMember(member: Member): Promise<Member> {
    // return this.httpClient.post<Member>('LinkToRestAPI', member).toPromise();
    const memberToSave = { ...member };
    memberToSave.id = member.id ?? Math.ceil(Math.random() * 10000);
    memberToSave.createdDate = new Date().toISOString();

    this.tab = [
      memberToSave,
      ...this.tab.filter((item) => item.id !== memberToSave.id),
    ];
    return new Promise((resolve) => resolve(memberToSave));
  }
}
