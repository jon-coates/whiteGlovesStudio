import { twMerge } from 'tailwind-merge';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Spinner = ({ size = 'md', className }: SpinnerProps) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div
      className={twMerge(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizes[size],
        className
      )}
    />
  );
};

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={twMerge(
        'animate-pulse rounded-md bg-gray-200',
        className
      )}
    />
  );
};

export const SkeletonText = ({ className }: SkeletonProps) => {
  return <Skeleton className={twMerge('h-4 w-full', className)} />;
};

export const SkeletonTitle = ({ className }: SkeletonProps) => {
  return <Skeleton className={twMerge('h-8 w-3/4', className)} />;
};

export const SkeletonImage = ({ className }: SkeletonProps) => {
  return (
    <Skeleton
      className={twMerge('aspect-[4/3] w-full rounded-lg', className)}
    />
  );
};

export const SkeletonCard = ({ className }: SkeletonProps) => {
  return (
    <div className={twMerge('space-y-4 rounded-lg border border-gray-200 p-4', className)}>
      <SkeletonImage />
      <div className="space-y-2">
        <SkeletonTitle />
        <SkeletonText />
        <SkeletonText className="w-2/3" />
      </div>
    </div>
  );
};

export const SkeletonGallery = ({ className }: SkeletonProps) => {
  return (
    <div className={twMerge('space-y-8', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <SkeletonImage key={i} />
        ))}
      </div>
      <div className="space-y-8">
        <SkeletonTitle className="w-48" />
        <div className="grid grid-cols-1 gap-8">
          {[...Array(2)].map((_, i) => (
            <SkeletonImage key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SkeletonBlogPost = ({ className }: SkeletonProps) => {
  return (
    <article className={twMerge('space-y-6', className)}>
      <SkeletonImage className="aspect-[16/9]" />
      <div className="space-y-4">
        <SkeletonTitle />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <SkeletonText className="w-32" />
            <SkeletonText className="w-24" />
          </div>
        </div>
        <div className="space-y-2">
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
          <SkeletonText className="w-2/3" />
        </div>
      </div>
    </article>
  );
};

export const LoadingOverlay = ({ className }: SkeletonProps) => {
  return (
    <div
      className={twMerge(
        'fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm',
        className
      )}
    >
      <Spinner size="lg" />
    </div>
  );
};

export const LoadingPage = ({ className }: SkeletonProps) => {
  return (
    <div className={twMerge('min-h-screen space-y-8 p-8', className)}>
      <div className="space-y-4">
        <SkeletonTitle />
        <SkeletonText />
        <SkeletonText className="w-2/3" />
      </div>
      <SkeletonGallery />
    </div>
  );
};

interface LoadingProps {
  type?: 'page' | 'content' | 'button';
}

export const Loading = ({ type = 'content' }: LoadingProps) => {
  const styles = {
    page: 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50',
    content: 'flex items-center justify-center p-8',
    button: 'inline-flex items-center justify-center',
  };

  const sizes = {
    page: 'w-12 h-12',
    content: 'w-8 h-8',
    button: 'w-4 h-4',
  };

  return (
    <div className={styles[type]}>
      <div
        className={`${sizes[type]} animate-spin rounded-full border-4 border-gray-200 border-t-yellow-500`}
      />
    </div>
  );
}; 