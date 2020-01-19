import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;

  fakeTeam = [{
    name: 'A',
    isRequire: true
  }, {
    name: 'B',
    isRequire: false
  },
  {
    name: 'C',
    isRequire: true
  }];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  get userGroup() {
    return this.myForm.get('userGroup') as FormGroup;
  }
  get recommandationGroup() {
    return this.myForm.get('recommandationGroup') as FormGroup;
  }
  get team() {
    return this.myForm.get('team') as FormArray;
  }
  get recommandationEmail() {
    return this.recommandationGroup.get('recommandationEmail') as FormControl;
  }

  ngOnInit() {
    this.initForm();
  }

  /**
   * 送交表單
   */
  onSubmit() {
    const result = {
      ...this.myForm.value,
      recommandationGroup: {
        ...this.myForm.value.recommandationGroup,
      }
    };
    console.log(result);
    this.recommandationGroup.reset();
  }

  /**
   * 表單初始化流程
   */
  private initForm() {
    this.myForm = this.fb.group({
      userGroup: this.fb.group({
        userName: ['', Validators.required],
        userPWD: ['', [Validators.required, Validators.minLength(10)]],
      }),
      recommandationGroup: this.fb.group({
        recommandationEmail: ['', Validators.email],
        team: this.fb.array(
          this.fakeTeam.map((member: any) =>
            this.fb.control(member.name)
          )
        )
      })
    });
  }
}
