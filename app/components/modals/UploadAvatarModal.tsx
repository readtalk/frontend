import { useState } from 'react';
import { Loader } from '~/components/loader/Loader';

type UploadAvatarModalProps = {
  onClose: () => void;
  onSuccess: (url: string) => void;
};

export const UploadAvatarModal = ({ onClose, onSuccess }: UploadAvatarModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = () => {
    setIsLoading(true);
    setError(null);

    
    const popup = window.open(
      'https://upload-readtalk.vercel.app?mode=popup',
      'Upload Avatar',
      'width=500,height=600,resizable=yes,scrollbars=yes'
    );

    if (!popup) {
      setError('Popup blocked. Please allow popups for this site.');
      setIsLoading(false);
      return;
    }

    
    const handleMessage = (event: MessageEvent) => {
      
      if (event.origin !== 'https://upload-readtalk.vercel.app') return;

      const { avatarUrl } = event.data;
      if (avatarUrl) {
        onSuccess(avatarUrl);
        popup.close();
        onClose();
      }
    };

    window.addEventListener('message', handleMessage);

    
    const checkClosed = setInterval(() => {
      if (popup.closed) {
        clearInterval(checkClosed);
        window.removeEventListener('message', handleMessage);
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-900">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Upload Avatar
        </h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Choose an image for your profile. Max file size: 2MB.
        </p>

        {error && (
          <div className="mt-3 rounded-md bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className="flex-1 rounded-md bg-[#FF0000] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#CC0000] disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader size={16} />
                Opening...
              </span>
            ) : (
              'Choose Image'
            )}
          </button>
          <button
            onClick={onClose}
            className="flex-1 rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
