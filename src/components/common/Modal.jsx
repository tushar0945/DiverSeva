const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        {children}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="text-sm text-muted hover:text-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
