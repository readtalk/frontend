import { Upload } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';
import type { MessageAsset } from '~/types/chat';

interface ChatInputProps {
  message: string;
  onChange: (message: string) => void;
  onSubmit: (e: React.FormEvent, assets: string[]) => void;
  isSending?: boolean;
  channelId: string;
  sessionId: string;
}

// Standard emoji list
const emojis = [
  '😀','😃','😄','😁','😆','😅','😂','🤣','😭','😉','😗','😙','😚','😘','🥰','😍','🤩','🥳','🫠','🙃','🙂','🥲','🥹','😊','☺️','😌','🙂‍↕️','🙂‍↔️','😏','🤤','😋','😛','😝','😜','🤪','🫪','😔','🥺','😬','😑','😐','😶','😶‍🌫️','🫥','🤐','🫡','🤔','🤫','🫢','🤭','🥱','🤗','🫣','😱','🤨','🧐','😒','🙄','😮‍💨','😤','😠','😡','🤬','😞','😓','😟','😥','😢','☹️','🙁','🫤','😕','😰','😨','😧','😦','😮','😯','😲','😳','🤯','😖','😣','😩','😫','😵','😵‍💫','🫨','🥴','🥵','🥶','🤢','🤮','🫩','😴','😪','🤧','🤒','🤕','😷','🤥','😇','🤠','🤑','🤓','😎','🥸','🤡','💩','😈','👿','👻','💀','☠️','🤖','👹','👺','☃️','⛄','👽','👾','🌚','🌝','🌞','🌛','🌜','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','💫','⭐','🌟','✨','⚡','💥','🫯','💢','💨','💤','🕳️','🔥','💯','🎉','🎊','❤️','🧡','💛','💚','🩵','💙','💜','🤎','🖤','🩶','🤍','🩷','💘','💝','💖','💗','💓','💞','💕','💌','💟','♥️','❣️','❤️‍🩹','💔','❤️‍🔥','💋','🫂','👥','👤','🗣️','👣','🫆','💦','🧠','🫀','🫁','🩸','🦠','🦷','🦴','👀','👁️','👄','🫦','👅','👃','👂','🦻','🦶','🦵','🦿','🦾','💪','👏','👍','👎','🫶','🙌','👐','🤲','🤜','🤛','✊','👊','🫳','🫴','🫱','🫲','🫸','🫷','👋','🤚','🖐️','✋','🖖','🤟','🤘','✌️','🤞','🫰','🤙','🤌','🤏','👌','🫵','👉','👈','☝️','👆','👇','🖕','✍️','🤳','🙏','💅','🤝'
];

export function ChatInput({ 
  message, 
  onChange, 
  onSubmit, 
  isSending = false,
  channelId,
  sessionId 
}: ChatInputProps) {
  const [pendingAssets, setPendingAssets] = useState<MessageAsset[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  const handleFileSelect = async (files: FileList) => {
    const uploads = Array.from(files).map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('https://backend.readtalk.workers.dev/channel/upload', {
        method: 'POST',
        headers: {
          'X-Channel-Id': channelId,
          'X-Session-Id': sessionId,
        },
        body: formData
      });
      
      const data = await response.json();
      if (!data.success) {
        throw new Error('Upload failed');
      }
      
      return {
        url: data.url,
        filename: file.name,
        contentType: file.type,
        size: file.size
      };
    });

    try {
      const assets = await Promise.all(uploads);
      setPendingAssets([...pendingAssets, ...assets]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const files = e.clipboardData.files;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.closest('form');
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handleEmojiClick = (emoji: string) => {
    onChange(message + emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div 
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="relative"
    >
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e, pendingAssets.map(asset => asset.url));
        setPendingAssets([]);
      }} className="p-2 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="flex items-end gap-2">
          {/* Tombol Emoji */}
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full flex-shrink-0 text-xl"
          >
            😊
          </button>

          {/* Tombol Upload */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full flex-shrink-0"
          >
            <Upload size={20} />
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files!)}
          />

          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message #channel-name"
            className="flex-1 resize-none bg-neutral-100 dark:bg-neutral-800 rounded-lg px-3 py-2 focus:outline-none min-h-[40px] max-h-[120px] text-base"
            rows={1}
            disabled={isSending}
          />

          <button
            type="submit"
            disabled={isSending || !message.trim()}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 w-10 h-10 flex items-center justify-center"
          >
            ➤
          </button>
        </div>

        {pendingAssets.length > 0 && (
          <div className="flex gap-2 mt-2">
            {pendingAssets.map((asset) => (
              <div 
                key={asset.url} 
                className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-200 dark:bg-neutral-800 text-sm"
              >
                <span>{asset.filename}</span>
                <button
                  onClick={() => setPendingAssets(
                    pendingAssets.filter(a => a.url !== asset.url)
                  )}
                  className="hover:text-neutral-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </form>

      {/* Emoji Picker Modal */}
      {showEmojiPicker && (
        <div className="absolute bottom-full left-0 mb-2 z-50 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 p-3 max-w-[320px] max-h-[300px] overflow-y-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Emoji</span>
            <button
              onClick={() => setShowEmojiPicker(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-8 gap-1">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="text-2xl hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded p-1 transition-colors"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
