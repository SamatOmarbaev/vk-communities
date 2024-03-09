import { CSSProperties } from 'react';
import './Skeleton.css';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const { border, height, width } = props
    
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div 
            className='skeleton' 
            style={styles}
        />
    )

}
