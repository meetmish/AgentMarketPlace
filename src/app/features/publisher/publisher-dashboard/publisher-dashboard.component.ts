import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentService } from '../../../core/services/agent.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-publisher-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publisher-dashboard.component.html',
  styleUrl: './publisher-dashboard.component.scss'
})
export class PublisherDashboardComponent {
  agentService = inject(AgentService);
  auth = inject(AuthService);

  stats = this.agentService.getPublisherStats(this.auth.currentUser()?.id || '');

  publish(name: string, price: number) {
    if (!name || !price) return;
    this.agentService.addAgent({
      name, price,
      description: 'Newly published agent pending detailed description.',
      category: 'General',
      features: ['Basic AI Processing'],
      publisherId: this.auth.currentUser()?.id || ''
    });
    alert('Agent submitted for review!');
  }
}
