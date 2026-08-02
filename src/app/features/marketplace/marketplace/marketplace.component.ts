import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentService } from '../../../core/services/agent.service';

@Component({
  selector: 'app-agenthub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class AgentHubComponent {
  agentService = inject(AgentService);

  buy(name: string) {
    alert(`Thank you for purchasing ${name}! Redirecting to checkout...`);
  }
}
