import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

function Modal({open, handleClose, title="", children=null, actions=null, onSubmit}) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={(e) => {e.preventDefault(); if(onSubmit)onSubmit(e);}}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    {actions}
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default Modal
