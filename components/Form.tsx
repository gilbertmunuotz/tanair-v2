import { TextField, InputAdornment, Box, Typography, Button } from '@mui/material'

export default function Form() {
  return (
    <div>
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">Welcome Back.</h1>

            <form>


                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '1px solid #000', p: 4 }}>
                    <Typography id="sign-in-modal-title" variant="h6" component="h2" className='text-center'>Welcome.</Typography>
                    <TextField fullWidth
                        required
                        label="name"
                        margin="normal"
                        InputProps={{
                            endAdornment: (<InputAdornment position="end">
                                {/* <PersonIcon /> */}
                            </InputAdornment>)
                        }}
                    />

                    <TextField fullWidth
                        required
                        label="email"
                        margin="normal"
                        InputProps={{
                            endAdornment: (<InputAdornment position="end">
                                {/* <MailIcon /> */}
                            </InputAdornment>)
                        }}
                    />


                    <TextField fullWidth
                        required
                        margin="normal"
                        label="password"
                    />

                    <div className="buttons">
                        <Button variant="contained" type="submit" color="primary" sx={{ mt: 2, mb: 1, paddingX: 12 }}>
                            Update
                        </Button>
                    </div>

                    <hr className='my-3 border-y- border-black' />
                </Box>
            </form>
        </div>
    </div>
  )
}