import * as React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className = "",
}) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
