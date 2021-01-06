import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Client } from "../../domain/client";
import { ClientSandboxService } from "../../services/client-sandbox.service";

@Component({
  selector: "jworks-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.scss"],
})
export class EditClientComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  selectedClient$ = this.activatedRoute.data.pipe(map((data) => data.client));

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

  onDeleteClient(clientId: number) {
    this.clientSandboxService.deleteClient(clientId);
    this.navigateToOverview();
  }

  onFormSubmit(client: Client) {
    if (client.id) {
      this.clientSandboxService.updateClient(client);
    } else {
      this.clientSandboxService.addClient(client);
    }
    this.navigateToOverview();
  }

  navigateToOverview() {
    this.router.navigate(["./"], { relativeTo: this.activatedRoute.parent });
  }
}
