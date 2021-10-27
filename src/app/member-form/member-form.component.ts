import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/member.model';
import { MemberService } from 'src/services/member.service';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  form: any;
  currentId: string = '';
  memberReceivedByService: any;
  constructor(
    private memberService: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentId);
    if (!!this.currentId) {
      this.memberService.getMemeberById(this.currentId).then((member) => {
        this.memberReceivedByService = member;
        this.initForm(member);
      });
    } else {
      this.initForm(null);
    }
  }
  onSubmit(): void {
    console.log(this.form.value);
    const memberToSave: Member = {
      ...this.memberReceivedByService,
      ...this.form.value,
    };
    this.memberService
      .saveMember(memberToSave)
      .then(() => this.router.navigate(['./members']));
  }
  initForm(member: Member | null): void {
    this.form = new FormGroup({
      cin: new FormControl(member?.cin, [Validators.required]),
      name: new FormControl(member?.name, [Validators.required]),
      cv: new FormControl(member?.cv, []),
      type: new FormControl(member?.type, [Validators.required]),
    });
  }
}
