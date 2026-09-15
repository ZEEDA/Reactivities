import { Suspense } from 'react';
import './App.css'

import ActivitiesList from '@/components/ActivitiesList';
import { Typography } from '@mui/material';

function App() {

  return (
    <>
      <Typography variant="h3" >Reactivities</Typography>
      <Suspense fallback={<div>Loading activities...</div>}>
        <ActivitiesList />
      </Suspense>
    </>
  )
}

export default App
