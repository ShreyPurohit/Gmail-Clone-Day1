import { useState } from "react";
import { Dialog, Box, Typography, styled, InputBase, TextField, Button} from "@mui/material";
import { Close, DeleteOutline} from "@mui/icons-material";

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: "100%",
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
     '& > p': {
        fontSize: 14,
        fontWeight: 500
     }
})

const RecipientWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '18px',
    width: '100px'
})

const ComposeMail = ({openDialog, setOpenDialog}) =>{
    const [data, setData] = useState({});

    const config = {
        Host : "smtp.elasticemail.com",
        Username : "shreypurohit123@yopmail.com",
        Password : "A4B060C02D15301A3BD914CE2AE0BEE756A1",
        Port : 2525,
    }

    const closeComposeMail = (e) =>{
        e.preventDefault();
        setOpenDialog(false);
    }

const sendMail = (e) =>{
    e.preventDefault();
    if(window.Email){
        window.Email.send({
            ...config,
            To :   data.to,
            From : "purohitshrey9@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
    }
    setOpenDialog(false);
}

const onValueChange = (e) =>{
    setData({...data, [e.target.name]: e.target.value});
}
    return(
        <Dialog
            open = {openDialog}
            PaperProps={{sx: dialogStyle}}>
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e)=> closeComposeMail(e)}/>
            </Header>

            <RecipientWrapper>
                <InputBase placeholder="Recipient" name="to" onChange={(e)=> onValueChange(e)}></InputBase>
                <InputBase placeholder="Subject" name="subject" onChange={(e)=> onValueChange(e)}></InputBase>
            </RecipientWrapper>

            <TextField 
                multiline = {true}
                rows = {15}
                sx = {{'& .MuiOutlinedInput-notchedOutline':{
                    border: 'none'
                }
                }}
                name="body"
                onChange={(e)=> onValueChange(e)}
            />
            <Footer>
                <SendButton onClick ={(e)=> sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick ={()=> setOpenDialog(false)}/>
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;