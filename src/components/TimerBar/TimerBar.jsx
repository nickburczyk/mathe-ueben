import LinearProgress from '@mui/material/LinearProgress'
import styles from './TimerBar.module.scss'
import { useTimer } from '../../hooks'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TIMED_DURATION_IN_MS } from '../../util';

const theme = createTheme({
  palette: {
    yellowgreen: {
      main: '#9acd32',
    },
  },
});

export const TimerBar = () => {
  const { timedSession } = useTimer()
  
  if (!timedSession) return null

  const remaining = timedSession.timeRemaining || 0
  const elapsed = TIMED_DURATION_IN_MS - remaining
  const value = elapsed/TIMED_DURATION_IN_MS * 100

  return (
    <ThemeProvider theme={theme}>
      <LinearProgress 
        sx={{height: 15, backgroundColor: '#9acd3244'}}
        className={styles.progress} 
        variant="determinate" 
        value={value} 
        color='yellowgreen'
      />
    </ThemeProvider>
  )
}