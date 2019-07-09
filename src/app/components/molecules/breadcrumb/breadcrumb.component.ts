import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Breadcrumb } from 'src/app/interfaces/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  @Input() sites: Breadcrumb[];

  constructor() { }

  ngOnInit() { }
}
