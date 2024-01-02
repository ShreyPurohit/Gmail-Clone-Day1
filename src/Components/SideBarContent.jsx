import { Box, Button, List, ListItem, styled } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../Config/sidebar.config";

const ComposedButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    padding: 15,
    borderRadius: 16,
    minWidth: 140,
    textTransform: 'none'
});

const Container = styled(Box)({
    padding: 8,
    '& > ul': {
        padding: '10px 0 0 5px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer'
    },
    '& > ul > li > svg': {
        marginRight: 20
    }
});

const SideBarContent = () =>{
    return (       
        <Container>
            <ComposedButton><CreateOutlined />Compose</ComposedButton>
            <List>
                {
                    SIDEBAR_DATA.map(data =>(
                        <ListItem>
                            <data.icon fontSize="small"/>{data.title}
                        </ListItem>
                    ))
                }
            </List>
        </Container>
    );
}

export default SideBarContent;