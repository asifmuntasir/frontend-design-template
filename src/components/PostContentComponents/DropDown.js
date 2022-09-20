import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <i className="ri-arrow-down-s-line"></i>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><i className="ri-save-2-line me-2"></i> Save Post</MenuItem>
        <MenuItem onClick={handleClose}><i className="ri-flag-line me-2"></i> Report Post</MenuItem>
        <MenuItem onClick={handleClose}><i className="ri-pencil-line me-2"></i> Edit Post</MenuItem>
        <MenuItem onClick={handleClose}><i className="ri-delete-bin-2-line me-2"></i> Delete Post</MenuItem>
        <MenuItem onClick={handleClose} className='border-top'><i className="ri-pages-line me-2"></i> Open post in new tab</MenuItem>
      </Menu>
    </div>
  );
}
