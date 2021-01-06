import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "../../domain/client";
import { ClientSandboxService } from "../../services/client-sandbox.service";

@Component({
  selector: "jworks-client-overview",
  templateUrl: "./client-overview.component.html",
  styleUrls: ["./client-overview.component.scss"],
})
export class ClientOverviewComponent implements OnInit {
  clients$ = this.clientsSandbox.clients$;
  readOnly$ = this.clientsSandbox.readOnly$;

  constructor(
    private clientsSandbox: ClientSandboxService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientsSandbox.loadClients();
  }

  onAdd() {
    this.router.navigate(["./new"], {
      relativeTo: this.activatedRoute,
    });
  }

  onEdit(client: Client) {
    this.router.navigate(["./", client.id, "edit"], {
      relativeTo: this.activatedRoute,
    });
  }

  onClientSelect(client: Client) {
    this.router.navigate(["./", client.id, "view"], {
      relativeTo: this.activatedRoute,
    });
  }

  onDelete(client: Client) {
    // Delete the selected client
    this.clientsSandbox.deleteClient(client.id);
  }
}
