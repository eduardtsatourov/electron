import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ReadOnlyStateService } from "../shared/read-only-state.service";

@Component({
  selector: "jworks-read-only-button",
  templateUrl: "./read-only-button.component.html",
  styleUrls: ["./read-only-button.component.scss"],
})
export class ReadOnlyButtonComponent implements OnInit {
  readOnly$: Observable<Boolean> = this.readOnlyStateService.readOnly$;

  constructor(private readOnlyStateService: ReadOnlyStateService) {}

  ngOnInit(): void {}

  toggle() {
    this.readOnlyStateService.toggle();
  }
}
