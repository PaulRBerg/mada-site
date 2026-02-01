import { tv } from "tailwind-variants";

import type { ConservationStatus } from "@/lib/squirrels/squirrel.types";

type StatusBadgeProps = {
  status: ConservationStatus;
};

const statusBadge = tv({
  base: "inline-flex items-center rounded-full px-2 py-0.5 font-medium text-xs",
  variants: {
    status: {
      "least-concern": "bg-green-100 text-green-800",
      "near-threatened": "bg-yellow-100 text-yellow-800",
      vulnerable: "bg-orange-100 text-orange-800",
      endangered: "bg-red-100 text-red-800",
      "critically-endangered": "bg-red-200 text-red-900",
    },
  },
});

const statusLabels: Record<ConservationStatus, { abbr: string; full: string }> = {
  "least-concern": { abbr: "LC", full: "Least Concern" },
  "near-threatened": { abbr: "NT", full: "Near Threatened" },
  vulnerable: { abbr: "VU", full: "Vulnerable" },
  endangered: { abbr: "EN", full: "Endangered" },
  "critically-endangered": { abbr: "CE", full: "Critically Endangered" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { abbr, full } = statusLabels[status];

  return (
    <span className={statusBadge({ status })} title={full}>
      {abbr}
    </span>
  );
}
