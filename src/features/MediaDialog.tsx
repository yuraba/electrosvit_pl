'use client';
import '@/css/media-dialog.scss';

import Image from 'next/image';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

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
                <Image src={imageUrl} fill alt={alt} />
            </DialogContent>
        </Dialog>
    );
};

export default MediaDialog;
