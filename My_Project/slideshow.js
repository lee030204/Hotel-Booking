import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Check For Hotels
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{width:'1000px'}}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Hotel Names
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Grid container spacing={2}>
                <Grid>
                    <img src='https://wallpapers.com/images/featured/hotel-background-sdr508awonqxixqe.jpg' width='200px' height='200px'/>
                    Gokulam Park,
                    5-Star Hotel
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='https://daahy6akrtcj2.cloudfront.net/hotelsincoimbatore.net/logos/vivanta_by_taj_surya.jpg' width='200px' height='200px'/>
                    Sivaraja Holidays ,
                    5-Star Hotel
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='https://www.lemontreehotels.com/Images/hotels/29_Jul_2023_01_32_14Lemon-Tree-Hotel,-Coimbatore-Facade.jpg' width='200px' height='200px'/>
                    Arruncahalam Park,
                    5-Star Hotel
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFDygoNESNmFrJ4y89q3GOjiBoEBmIivZ6A&usqp=CAU' width='200px' height='200px'/>
                    Orbit Hotel,
                    5-Star Hotel
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhotelcoimbatore/images/overview-landing-page/headmast/desktop/the-cotton-bar.png' width='200px' height='200px'/>
                    Lee Meridian,
                    5-Star Hotel 
                    762, Avinashi Rd, Cexus Nagar, Neelambur
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='https://cdn1.goibibo.com/voy_ing/t_srp/0bd4ed88aaba11e88a1d027e9e9fa588.jpg' width='200px' height='200px'/>
                    Taj Hotel,
                    4-Star Hotel
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='https://r1imghtlak.mmtcdn.com/eaafc282ebfc11e5af7b5ee5da2daa2a.jfif?&output-quality=75&downsize=328:180&crop=328:180;22,0&output-format=jpg' width='200px' height='200px'/>
                    Le Grand Hotel,
                    4-Star Hotel
                    <br />
                    Coimbatore
                    <br />
                </Grid>
                <Grid>
                    <img src='data:image/jpeg;base64,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' width='200px' height='200px'/>
                    Park Elanza,
                    4-Star Hotel
                    <br/>
                    Coimbatore
                    <br /> 
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Select Hotels
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}