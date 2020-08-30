import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export enum TaskDialogContext {
  NONE = "NONE",
  NEW = "NEW",
  RENAME = "RENAME",
  DUPLICATE = "DUPLICATE",
}

interface TaskListDialogProps {
  context: TaskDialogContext;
  show: boolean;
  onOk?: (context: TaskDialogContext, name: string) => void;
  onCancel?: () => void;
}

export default function (props: TaskListDialogProps): React.ReactElement {
  const [name, setName] = React.useState("");
  const { show, context, onOk, onCancel } = props;

  function handleChange(event: any) {
    setName(event.target.value);
  }

  function handleOnOk() {
    onOk?.(context, name);
  }

  function getText(ctx: TaskDialogContext): { hint; title; labelTitle } {
    switch (ctx) {
      case TaskDialogContext.NEW:
        return {
          hint: "New list",
          labelTitle: "Enter the name name of you new list",
          title: "New list",
        };
      case TaskDialogContext.RENAME:
        return {
          hint: "Rename list",
          labelTitle: "Enter the new name for your new list",
          title: "Rename list",
        };
      case TaskDialogContext.DUPLICATE:
        return {
          hint: "Duplicate list",
          labelTitle: "Enter the new name for your new list",
          title: "Duplicate list",
        };
      default:
        break;
    }
    return { hint: "", title: "", labelTitle: "" };
  }

  const text = getText(context);

  return (
    <div>
      <Dialog
        open={show}
        onClose={onCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{text.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{text.labelTitle}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={text.hint}
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
