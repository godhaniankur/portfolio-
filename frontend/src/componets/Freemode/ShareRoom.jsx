import { QRCodeCanvas } from 'qrcode.react';

const ShareRoom = ({ roomId }) => {
  const joinUrl = `${window.location.origin}/join/${roomId}`;

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl">
      <h3 className="text-black font-bold">Invite a Friend</h3>
      <QRCodeCanvas value={joinUrl} size={150} />
      <button 
        onClick={() => navigator.clipboard.writeText(joinUrl)}
        className="bg-green-500 text-white px-4 py-2 rounded shadow-lg"
      >
        Copy Link
      </button>
    </div>
  );
};