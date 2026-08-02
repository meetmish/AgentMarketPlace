import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentService } from '../../../core/services/agent.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  agentService = inject(AgentService);

  pendingAgents = signal(
    this.agentService.agents().filter(a => !a.isApproved)
  );

  // Sync the local signal when the service update happens
  // In a real app, this would be a computed signal from the service
}
