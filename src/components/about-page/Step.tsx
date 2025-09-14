import { Zap } from 'lucide-react';
import clsx from 'clsx';

interface StepProps {
    title: string;
    t: string;
    className?: string;
}

const Step = ({ title, t, className = '' }: StepProps) => (
    <div className={clsx('about__step', className)}>
        <h2 className="subtitle">{title}</h2>
        <p className="mt-2">{t}</p>
        <Zap
            width={24}
            height={37}
            preserveAspectRatio="none"
            fill="var(--green-color)"
            className="text-white about__step-lightning"
            strokeWidth={0.5}
        />
    </div>
);

export default Step;
