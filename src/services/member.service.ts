import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { member } from 'src/models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  public tab: member[] = GLOBAL._DB.members;
  constructor() {}
}
