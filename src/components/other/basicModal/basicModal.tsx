import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import style from './basicModal.module.sass';

const BasicModal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={style.box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Вы уверены, что хотите удалить этот способ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={style.btns}>
              <div className={style.btn + ' ' + style.btn_white} onClick={handleClose}>
                Отменить
              </div>
              <div className={style.btn} onClick={handleClose}>
                Удалить
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
