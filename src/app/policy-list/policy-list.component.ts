import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';
import { Policy } from '../policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss'],
})
export class PolicyListComponent implements OnInit {
  constructor(private policyService: PolicyService) {}

  policies: Policy[];

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data) => {
      this.policies = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data,
        } as Policy;
      });
    });
  }

  create(policy: Policy) {
    this.policyService.createPolicy(policy);
  }

  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
}
