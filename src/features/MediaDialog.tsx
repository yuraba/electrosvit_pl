'use client';

import Image from 'next/image';
import clsx from 'clsx';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import '@/css/media-dialog.scss';

interface MediaDialogProps {
    alt: string;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    className?: string;
    isOpen?: boolean;
}

const MediaDialog = ({
    alt,
    isOpen,
    imageUrl,
    imageWidth,
    imageHeight,
    className,
}: MediaDialogProps) => {
    
    return (
        <Dialog open={isOpen}>
            <DialogTrigger asChild>
                <Image
                    className={className}
                    src={imageUrl}
                    width={imageWidth}
                    height={imageHeight}
                    alt={alt}
                />
            </DialogTrigger>
            <DialogHeader>
                <DialogTitle></DialogTitle>
            </DialogHeader>
            <DialogContent className="media-dialog">
                <Image src={imageUrl} width={1124} height={1124} alt={alt} />
            </DialogContent>
        </Dialog>
    );
};

export default MediaDialog;
