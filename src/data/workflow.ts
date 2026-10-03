export interface WorkflowStep {
  step: string;
  name: string;
  stage: string;
  description: string;
  metrics: string;
  icon: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    name: "Customer",
    stage: "Inbound Engagement",
    description: "Prospective customer visits the digital storefront or submits an inquiry.",
    metrics: "Omnichannel Acquisition",
    icon: "user",
  },
  {
    step: "02",
    name: "Lead",
    stage: "Opportunity Qualification",
    description: "Lead is scored, assigned to team reps, and tracked in the real-time CRM pipeline.",
    metrics: "CRM Pipeline Sync",
    icon: "target",
  },
  {
    step: "03",
    name: "Quotation",
    stage: "Commercial Proposal",
    description: "Automated price estimates and custom quotations generated from live price books.",
    metrics: "Automated Estimates",
    icon: "file-text",
  },
  {
    step: "04",
    name: "Sales",
    stage: "Order Conversion",
    description: "Quotation is approved, converting seamlessly to an authorized sales order and invoice.",
    metrics: "Instant Invoicing",
    icon: "check-circle",
  },
  {
    step: "05",
    name: "Inventory",
    stage: "Fulfillment & Stock",
    description: "Warehouse stock is deducted in real time with auto-reorder threshold alerts.",
    metrics: "Real-Time Stock Audit",
    icon: "package",
  },
  {
    step: "06",
    name: "Accounting",
    stage: "Financial Ledger",
    description: "Transaction automatically reflects in double-entry accounts, cash, and bank balances.",
    metrics: "Balanced Books",
    icon: "dollar-sign",
  },
  {
    step: "07",
    name: "Reports",
    stage: "Business Intelligence",
    description: "Executive dashboards update live with revenue margins, velocity, and audit trails.",
    metrics: "Actionable Insights",
    icon: "bar-chart",
  },
];
