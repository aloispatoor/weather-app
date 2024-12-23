import React, {FC} from "react";

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: FC<AlertProps> = ({message, onClose}) => {
    return(
        <article className="modal" aria-modal>
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-header">
                    <p>{message}</p>
                </header>
                <footer className="modal-card-footer">
                    <button onClick={onClose}>Fermer</button>
                </footer>
            </div>
        </article>
    );
}

export default Alert;