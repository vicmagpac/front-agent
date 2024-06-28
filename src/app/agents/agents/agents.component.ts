import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Agent } from '../model/agent';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent {

  agents: Agent[] = [
    { _id: '1', name: 'Agent 1', type: 'Tipo 1' }
  ];
  displayedColumns = ['name', 'type'];

  constructor() {
    // this.agents = [];
  }
}
