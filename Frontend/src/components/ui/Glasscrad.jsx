import { Card } from "@/components/ui/card";

const GlassCard = ({ children, className = "" }) => {
  return (
    <Card
      className={`
        bg-white/10
        backdrop-blur-md
        border-white/20
        shadow-xl
        rounded-2xl
        ${className}
      `}
    >
      {children}
    </Card>
  );
};

export default GlassCard;