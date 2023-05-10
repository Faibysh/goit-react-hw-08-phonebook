import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Box
      sx={{
        padding: 1,
        mt: 14,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(48,48,79,1) 35%, rgba(10,177,217,1) 86%, rgba(0,212,255,1) 100%)',
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{
          mt: 5,
          fontFamily: 'Roboto',
          fontWeight: 700,
          color: '#eff4f8',
          textDecoration: 'none',
          cursor: 'default',
        }}
      >
        Log In and save your contacts EASY!
      </Typography>
    </Box>
  );
};

export default Home;
