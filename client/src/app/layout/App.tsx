import ActivityDashboard from '@/features/activities/Dashboard/ActivityDashboard';
import NavBr from './NavBr';
import Container from '@mui/material/Container';
import { Box, CssBaseline } from '@mui/material';
import { useState } from 'react';

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  return (
    <Box sx={{ backgroundColor: '#f2f4f8', minHeight: '100vh' }}>
      <CssBaseline/>
      <NavBr setIsOpenForm={setIsOpenForm} />
      <Container maxWidth="xl">
        <ActivityDashboard setIsOpenForm={setIsOpenForm} isOpenForm={isOpenForm} />
      </Container>
    </Box>
  )
}

export default App
