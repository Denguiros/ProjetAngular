import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';
@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit(): void {
    console.log(this.form.value);
    const memberToSave = this.form.value;
    this.memberService
      .saveMember(memberToSave)
      .then(() => this.router.navigate(['./members']));
  }
  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, []),
      type: new FormControl(null, [Validators.required]),
    });
  }
}
