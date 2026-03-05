interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return (
    <div className="max-w-xl mx-auto my-6 px-4">
      <div className="bg-yellow-400 border-2 border-red-600 text-black font-bold text-center p-6 rounded-2xl shadow-md animate-pulse">
        {message}
      </div>
    </div>
  );
};

export default Notification;