import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Client } from "../../domain/client";
import { ClientSandboxService } from "../../services/client-sandbox.service";

@Component({
  selector: "jworks-new-client",
  templateUrl: "./new-client.component.html",
  styleUrls: ["./new-client.component.scss"],
})
export class NewClientComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();

  constructor(
    private clientSandboxService: ClientSandboxService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientSandboxService.readOnly$
      .pipe(takeUntil(this._destroy$))
      .subscribe((readOnly) => {
        if (readOnly) {
          this.router.navigate(["./clients"]);
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  onFormSubmit(client: Client) {
    this.clientSandboxService.addClient(client);
    this.router.navigate(["./"], { relativeTo: this.activatedRoute.parent });
  }
}
