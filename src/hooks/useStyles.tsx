import { makeStyles } from '@mui/styles'


export const useStyles = makeStyles((theme: any) => ({
  xlBox: {
    background: theme.palette.background.paper,
    padding: '15px',
    maxWidth: '90vw',
    minHeight: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto',
    borderRadius: '5px',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  smBox: {
    boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.3)',
    borderRadius: 2,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 24,
    marginTop: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.background.paper,
  },
  chat: {
    background: theme.palette.background.paper,
    padding: '5px',
    height: '80vh',
    overflowY: 'auto',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
    
  },
  blur: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.2)', 
    backdropFilter: 'blur(5px)', 
    zIndex:9999
  },
  loading: {
    textAlign: 'center',
  },
  
}))
