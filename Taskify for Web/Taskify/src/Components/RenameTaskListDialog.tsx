import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface NewTaskListDialogProps {
  show: boolean;
  onOk?: (newTaskLisr: string) => void;
  onCancel?: () => void;
}

export default function (props: NewTaskListDialogProps): React.ReactElement {
  const [name, setName] = React.useState("");
  const { show, onOk, onCancel } = props;

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function handleOnOk() {
    onOk?.(name);
  }

  return (
    <div>
      <Dialog
        open={show}
        onClose={onCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New list</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter the name of your new list</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New list"
            type="text"
            fullWidth
            value={name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnOk} color="primary">
            Ok
          </Button>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
