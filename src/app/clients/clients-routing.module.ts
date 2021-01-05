import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ClientResolverService } from "./client-resolver.service";
import { ClientsComponent } from "./clients.component";
import { ClientOverviewComponent } from "./components/client-overview/client-overview.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { NewClientComponent } from "./components/new-client/new-client.component";
import { ViewClientComponent } from "./components/view-client/view-client.component";

const routes: Route[] = [
  {
    path: "",
    component: ClientsComponent,
    children: [
      {
        path: "",
        component: ClientOverviewComponent,
      },
      {
        path: "new",
        component: NewClientComponent,
      },
      {
        path: ":clientId/edit",
        component: EditClientComponent,
        resolve: {
          client: ClientResolverService,
        },
      },
      {
        path: ":clientId/view",
        component: ViewClientComponent,
        resolve: {
          client: ClientResolverService,
        },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
