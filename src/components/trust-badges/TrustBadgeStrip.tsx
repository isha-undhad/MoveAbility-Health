import TrustBadgeItem, { type TrustBadgeItemProps } from "./TrustBadgeItem";

const badges: TrustBadgeItemProps[] = [
  { label: "NDIS", subtitle: "Registered Provider" },
  { label: "AHPRA", subtitle: "Accredited Clinicians" },
  { label: "Evidence", subtitle: "Based Rehabilitation" },
  { label: "HICAPS / WorkCover", subtitle: "Private Health Rebates" },
];

export default function TrustBadgeStrip() {
  return (
    <section className="py-6 md:py-10 bg-secondary/[0.03] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {badges.map((badge) => (
          <TrustBadgeItem key={badge.label} {...badge} />
        ))}
      </div>
    </section>
  );
}
