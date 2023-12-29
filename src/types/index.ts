export type AuditResponse = IAuditData[];

export interface IAuditData {
  client: string;
  tvl: number;
  img: string;
  loc: number;
  audits: IAudit[];
  reports: number;
}

export interface IAudit {
  private: boolean;
  audit_name: string;
  start_date: string;
  end_date: string;
  details: IAuditDetails;
  desc?: string;
  initial_commit?: string;
  conclusion?: string;
  report_link?: string;
}

export interface IAuditDetails {
  loc: number;
  critical_cnt: number;
  high_cnt: number;
  medium_cnt: number;
}

export interface IAuditFeedbackData {
  clientName?: string;
  projectName?: string;
  feedback: string;
}
