import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "jworks-view-client",
  templateUrl: "./view-client.component.html",
  styleUrls: ["./view-client.component.scss"],
})
export class ViewClientComponent implements OnInit {
  selectedClient$ = this.activatedRoute.data.pipe(map((data) => data.client));

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
}
