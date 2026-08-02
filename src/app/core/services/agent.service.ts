import { Injectable, signal, computed } from '@angular/core';
import { Agent } from '../models/agenthub.models';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private _agents = signal<Agent[]>([
    {
      id: '1', name: 'CodeAssist Pro', description: 'Advanced coding companion',
      price: 49, category: 'Technical', features: ['Refactoring', 'Unit Tests'],
      publisherId: 'pub1', rating: 4.8, revenue: 1250, isApproved: true
    },
    {
      id: '2', name: 'ContentGenie', description: 'AI Marketing Assistant',
      price: 29, category: 'Creative', features: ['Social Media', 'Blog Posts'],
      publisherId: 'pub2', rating: 4.5, revenue: 840, isApproved: true
    }
  ]);

  readonly agents = this._agents.asReadonly();

  // 1. Publisher Report Service Logic (Computed)
  getPublisherStats(publisherId: string) {
    return computed(() => {
      const myAgents = this._agents().filter(a => a.publisherId === publisherId);
      const totalRevenue = myAgents.reduce((sum, a) => sum + (a.revenue || 0), 0);
      return { count: myAgents.length, revenue: totalRevenue, myAgents };
    });
  }

  // 2. Add New Agent (Publisher Feature)
  addAgent(agent: Omit<Agent, 'id' | 'rating' | 'revenue' | 'isApproved'>) {
    const newAgent: Agent = {
      ...agent,
      id: Math.random().toString(36).substring(7),
      rating: 0, revenue: 0, isApproved: false
    };
    this._agents.update(list => [newAgent, ...list]);
  }

  // 3. Admin: Approve Agent
  approveAgent(id: string) {
    this._agents.update(list => list.map(a => a.id === id ? { ...a, isApproved: true } : a));
  }
}
