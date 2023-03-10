import { Component, Inject, OnInit } from '@angular/core';
import { DialogConfig } from '@angular/cdk/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ManageService } from '../manage.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-edit-area',
  templateUrl: './add-edit-area.component.html',
  styleUrls: ['./add-edit-area.component.css']
})
export class AddEditAreaComponent implements OnInit {
  actionBtn: string = 'add'
  admin_id = 1;
  areaForm !: FormGroup;

  constructor(
    private popup: NgToastService,
    private fb: FormBuilder,
    private router: Router,
    private manageService: ManageService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private matref: MatDialogRef<AddEditAreaComponent>
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }


  ngOnInit(): void {
    this.areaForm = this.fb.group({
      area_id: [''],
      area_name: ['', Validators.required],
      area_desc: ['', Validators.required],
      area_distance: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })


    //////////////////// for edit data /////////////////////

    if (this.editData) {
      this.actionBtn = "Update";
      this.areaForm.controls['area_id'].setValue(Number(this.editData.area_id));
      this.areaForm.controls['area_name'].setValue(this.editData.area_name);
      this.areaForm.controls['area_desc'].setValue(this.editData.area_desc);
      this.areaForm.controls['area_distance'].setValue(this.editData.area_distance);
      this.areaForm.controls['admin_id_fk'].setValue(this.editData.admin_id_fk);
    }
  }
  onSubmit() {
    console.log(this.areaForm.value)
    if (!this.editData) {
      this.manageService.postArea(this.areaForm.value).subscribe(
        (result: any) => {
          this.router.navigate(['/home/area']);
          this.matref.close();
          this.popup.success({detail:'Success',summary:'Area Add Successfully...',sticky:true,position:'tr'})

        },
        (error: any) => {
          this.popup.error({detail:'Error',summary:'Area Not Add',sticky:true,position:'tr'})

        }
      )
    }
    else {
      this.updateArea()
    }
  }

  updateArea() {
    console.log(this.areaForm.value)
    this.manageService.putArea(this.areaForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/home/area']);
        console.log(res)
        this.matref.close();
        this.popup.success({detail:'Success',summary:'Area Update Successfully...',sticky:true,position:'tr'})
      },
      error: () => {
        alert("Student not update");
        this.popup.error({detail:'Error',summary:'Area Not Update',sticky:true,position:'tr'})

      }

    })
  }
  resetArea() {
    this.areaForm.reset()
  }

}