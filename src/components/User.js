import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';



export default function User() {
    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    const[name, setName] = useState('')
    const[id, setId] = React.useState('')
    const[link, setLink] = useState('')
    const[comment, setComment] = useState('')
    const[users, setUsers] = useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const user = {name, id, link, comment}
        console.log(user)
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
    }).then(()=>{
        console.log("new user added")
    })
}

useEffect(()=>{
    fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setUsers(result);
    }
)
},[])
  return (
    <Container>
        <Paper elevation = {3}   style={{
            padding: '50px 20px', width:600, margin:"20px auto",
    backgroundColor: "lightgrey",border: "1px solid black"
  }}>
            <h1>Create a Post</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth
    value={name} onChange={(e)=>setName(e.target.value)}
    />
    <TextField id="outlined-basic" label="User link" variant="outlined" fullWidth
    value={link} onChange={(e)=>setLink(e.target.value)}
    />
  <TextareaAutosize
  aria-label="maximum height"
  minRows={3}
  placeholder="What's on your mind?"
  style={{ width: 500, height: 200 }}
    value={comment} onChange={(e)=>setComment(e.target.value)}
    /><br/>
    <Button variant="contained" onClick={handleClick}>Submit</Button>

    
    </Box>
    </Paper>
  
    <Paper elevation = {3}   style={{
            padding: '50px 20px', width:600, margin:"20px auto",
    backgroundColor: "lightgrey",border: "1px solid black"
  }}>
    <h1>Posts</h1>
        {users.map(user=>(
            <Paper elevation={6} style ={{margin:"10px",padding:"15px",textAlign:"left"}} key={user.id}>
                <a href={user.link}>{user.link}</a><br/>
                Name:{user.name}<br/>
                Comment:{user.comment}<br/>
            </Paper>
        ))
}
    </Paper>
    </Container>
  );
}
