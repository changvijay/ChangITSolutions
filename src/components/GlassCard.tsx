import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false 
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card',
        hover && 'hover:scale-[1.02] hover:bg-white/50',
        glow && 'glow-primary',
        className
      )}
    >
      {children}
    </div>
  );
};