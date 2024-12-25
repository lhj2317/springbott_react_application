import './App.css';
import { AppBar, Container, List, ListItemText, Stack, Typography } from '@mui/material';
import AddItem from './AddItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([item, ...items]);
  }
  
  return (
    <Container>
      <AppBar position='static'>
        <toolbar>
          <Typography variant='h6'>
            Shopping List
          </Typography>
        </toolbar>
      </AppBar>
      <Stack alignItems= "center">
          <AddItem addItem={addItem} />
          <List>
            {
            items.map((item, index) => 
            <listItem key={index} divider>
              <ListItemText 
                  primary={item.product}
                  secondary={item.amount} />
              </listItem>)
            }
          </List>
      </Stack>
    </Container>
  );
}

export default App;
