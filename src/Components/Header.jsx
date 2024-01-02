import {AppBar, Toolbar, styled, InputBase, Box} from '@mui/material';
import { Menu as MenuIcon, Search, Tune, HelpOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined} from '@mui/icons-material';
import { gmailLogo } from '../Constants/constant';

const StyledAppBar = styled(AppBar)({
    background: '#F5F5F5',
    boxShadow: 'none'
});

const SearchWrapper = styled(Box)({
    background: '#EAF1Fb',
    marginLeft: 80,
    borderRadius: 8,
    minWidth: 690,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div':{
        width: '100%',
        padding: '0 10px'
    }
});

const OptionsWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg':{
        marginLeft: '20px'
    }
});

const Header = ({toggleDrawer}) =>{
    return(
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color='action' onClick={toggleDrawer}/>
                <img src={gmailLogo} alt="Gmail Logo" style={{width: 110, marginLeft: 15}}/>
                <SearchWrapper>
                    <Search color='action' />
                    <InputBase placeholder='Search Mail'/>
                    <Tune color='action'/>
                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutlined color='action'/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color='action'/>
                    <AccountCircleOutlined color='action' />
                </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;