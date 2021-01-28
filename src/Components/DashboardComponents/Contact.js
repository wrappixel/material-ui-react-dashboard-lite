import {
    CardHeader,
    Card,
    Avatar,
    ListItemText,
    ListItemAvatar,
    List,
    ListItem,
  } from '@material-ui/core';
const Contacts = () => {
    return ( 
        <Card>
            <CardHeader titleTypographyProps={{variant:'h4' }} title="Contacts" subheader="List all contacts here"/>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{background: '#89c9f3'}}>
                            J
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Johnathan Deo" secondary="Web Designer" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{background: '#fdaeae'}}>
                            N
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Nirav Joshi" secondary="Fullstack Developer" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{background: '#f1cc65'}}>
                            G
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Genelia Desouza" secondary="Graphic Designer" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{background: '#97e8b0'}}>
                            P
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Johnathan Deo" secondary="Web Designer" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{background: '#89c9f3'}}>
                            J
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Johnathan Deo" secondary="Web Designer" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{background: '#fdaeae'}}>
                            N
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Nirav Joshi" secondary="Fullstack Developer" />
                </ListItem>
            </List>
        </Card>        
    );
}
 
export default Contacts;