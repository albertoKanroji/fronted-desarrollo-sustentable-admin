import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tags-crear',
  templateUrl: './tags-crear.component.html',
  styleUrls: ['./tags-crear.component.scss']
})
export class TagsCrearComponent implements OnInit {
  width: number = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
