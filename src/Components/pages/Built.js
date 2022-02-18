import React from 'react'
import '../../App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Built() {
  return (
    <div>

<h1 style={{display:'flex',alignItems:'center',marginTop:'100px',justifyContent:'center',fontSize:64,fontFamily:'poppins',fontWeight:400}} >How it works?</h1>

      <div class="grid-container-built ">
          
        <div class="grid-item">
          <img id="img-built1" src = "/images/rectangle.png"></img>
        </div>


        <div class="grid-item">
          <img id="img-arrow" src = "/images/arrow.png"></img>
        </div>

        
        <div class="grid-item">
          <img id="img-built1" src = "/images/rectangle.png"></img>
        </div>

      </div>

      <img style={{width:'auto',paddingLeft:'1154px',marginTop:'60px'}} src = "/images/arrow2.png"></img>

      <div class="grid-container-built ">
          
          <div class="grid-item">
            <img id="img-built1" src = "/images/rectangle.png"></img>
          </div>
  
  
          <div class="grid-item">
            <img id="img-arrow" src = "/images/arrow3.png"></img>
          </div>
  
          
          <div class="grid-item">
            <img id="img-built1" src = "/images/rectangle.png"></img>
          </div>
  
        </div>

        <div className='bg-built-nextpro'>

        
<h1 style={{display:"flex",justifyContent:"center",fontSize:50,paddingTop:'150px,',fontFamily:'Poppins',fontStyle:'normal',fontWeight:500}} >Find your Next Project</h1>

  <div class="grid-container-built-project">


  <div class="grid-item">

  <div className="home-card-container">
      <Card 
        className="built-card"

        sx={{
          overflow:"inherit",
          filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
          border: "2px solid #1978A5",
        }}

      >
        <CardContent>

          <Typography
            style={{
              fontSize: "36px",
              color: "black",
              marginTop:"50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "justify",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
            color="#fff"
            gutterBottom
          >
            Beginner
          </Typography>

          <Typography
            style={{
              justifyContent:"center",
              fontSize: "18px",
              marginTop:"20px",
              color: "black",
              display: "flex",
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Morbi cras est nisl enim,<br></br> pellentesque 
            em dolor est <br></br>
            habitant. Vitae nunc, dolor<br></br> gravida duis. At et, quam est <br></br>donec. Consectetur morbi et<br></br> dignissim 
            sed amet erat<br></br> augue quis.  
          </Typography>

          <h3 style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:40,fontSize:20,fontFamily:'poppins',fontWeight:400}} >Learn more 
        <img style={{marginLeft:'15px'}} src="/images/smallarrow.png"></img></h3>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      
    </div>

  </div>

  
  <div class="grid-item">

  <div className="home-card-container">
      <Card 
        className="built-card"

        sx={{
          overflow:"inherit",
          filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
          border: "2px solid #1978A5",
        }}

      >
        <CardContent>

          <Typography
            style={{
              fontSize: "36px",
              color: "black",
              marginTop:"50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "justify",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
            color="#fff"
            gutterBottom
          >
            Intermediate
          </Typography>

          <Typography
            style={{
              justifyContent:"center",
              fontSize: "18px",
              marginTop:"20px",
              color: "black",
              display: "flex",
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Morbi cras est nisl enim,<br></br> pellentesque 
            em dolor est <br></br>
            habitant. Vitae nunc, dolor<br></br> gravida duis. At et, quam est <br></br>donec. Consectetur morbi et<br></br> dignissim 
            sed amet erat<br></br> augue quis.  
          </Typography>

          <h3 style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:40,fontSize:20,fontFamily:'poppins',fontWeight:400}} >Learn more 
        <img style={{marginLeft:'15px'}} src="/images/smallarrow.png"></img></h3>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      
    </div>

  </div>

  
  <div class="grid-item">

  <div className="home-card-container">
      <Card 
        className="built-card"

        sx={{
          overflow:"inherit",
          filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
          border: "2px solid #1978A5",
        }}

      >
        <CardContent>

          <Typography
            style={{
              fontSize: "36px",
              color: "black",
              marginTop:"50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "justify",
              fontFamily: "Poppins",
              fontWeight: "400",
            }}
            color="#fff"
            gutterBottom
          >
            Advanced
          </Typography>

          <Typography
            style={{
              justifyContent:"center",
              fontSize: "18px",
              marginTop:"20px",
              color: "black",
              display: "flex",
              textAlign: "justify",
              fontFamily: "Poppins",
            }}
          >
            Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Morbi cras est nisl enim,<br></br> pellentesque 
            em dolor est <br></br>
            habitant. Vitae nunc, dolor<br></br> gravida duis. At et, quam est <br></br>donec. Consectetur morbi et<br></br> dignissim 
            sed amet erat<br></br> augue quis.  
          </Typography>

          <h3 style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:40,fontSize:20,fontFamily:'poppins',fontWeight:400}} >Learn more 
        <img style={{marginLeft:'15px'}} src="/images/smallarrow.png"></img></h3>
        </CardContent>
        <CardActions></CardActions>
      </Card>

      
    </div>

  </div>

  

  </div>

</div>

{/*Code8 Library */}

<div style={{marginTop:50}} >

<h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontFamily: "poppins",
            fontWeight: 400,
          }}
        >
          <img id="icon" src="/images/Logo.png"></img>
          Library
        </h1>

        <div>


  <div class="grid-container-built-lib">


  <div class="grid-item">

  <div className="built-card-lib-container">
      <Card 
        className="code8-lib-card"

        sx={{
          overflow:"inherit",
          filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
          border: "2px solid #1978A5",
        }}

      >
        <CardContent>
        
        <img style={{marginLeft:-50}} id="img-abs-lib" src = "/images/codingpic.png"></img>

        
  <div class="grid-container-built-project">



<div class="grid-item">

  <div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/wordpress.png"></img>
<p>Wordpress</p>

</div>

  </div>


  <div class="grid-item">

  <div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/angular.png"></img>
<p>Angular</p>

</div>

  </div>



  <div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/react-js.png"></img>
<p>React</p>

</div>

</div>


  
  
  

  </div>



        </CardContent>
        <CardActions></CardActions>
      </Card>

      
    </div>

  </div>

  <div class="grid-item">

<div className="built-card-lib-container">
    <Card 
      className="code8-lib-card"

      sx={{
        overflow:"inherit",
        filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
        border: "2px solid #1978A5",
      }}

    >
      <CardContent>
      
      <img style={{marginLeft:-50}} id="img-abs-lib" src = "/images/app-dev.png"></img>

      
<div class="grid-container-built-project">



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/android.png"></img>
<p>Wordpress</p>

</div>

</div>


<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/kotlin.png"></img>
<p>Angular</p>

</div>

</div>



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/Flutter.png"></img>
<p>React</p>

</div>

</div>






</div>



      </CardContent>
      <CardActions></CardActions>
    </Card>

    
  </div>

</div>

<div class="grid-item">

<div className="built-card-lib-container">
    <Card 
      className="code8-lib-card"

      sx={{
        overflow:"inherit",
        filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
        border: "2px solid #1978A5",
      }}

    >
      <CardContent>
      
      <img style={{marginLeft:-50}} id="img-abs-lib" src = "/images/cloud.png"></img>

      
<div class="grid-container-built-project">

<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/aws.png"></img>
<p>Wordpress</p>

</div>

</div>


<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/azure.png"></img>
<p>Angular</p>

</div>

</div>



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/gcloud.png"></img>
<p>React</p>

</div>

</div>






</div>



      </CardContent>
      <CardActions></CardActions>
    </Card>

    
  </div>

</div>

<div class="grid-item">

<div className="built-card-lib-container">
    <Card 
      className="code8-lib-card"

      sx={{
        overflow:"inherit",
        filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
        border: "2px solid #1978A5",
      }}

    >
      <CardContent>
      
      
      <img style={{marginLeft:-50}} id="img-abs-lib" src = "/images/database.png"></img>

      
<div class="grid-container-built-project">



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/ethereum.png"></img>
<p>Wordpress</p>

</div>

</div>


<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/bitcoin.png"></img>
<p>Angular</p>

</div>

</div>



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/Hyperledger.png"></img>
<p>React</p>

</div>

</div>


</div>



      </CardContent>
      <CardActions></CardActions>
    </Card>

    
  </div>

</div>


<div class="grid-item">

<div className="built-card-lib-container">
    <Card 
      className="code8-lib-card"

      sx={{
        overflow:"inherit",
        filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
        border: "2px solid #1978A5",
      }}

    >
      <CardContent>
      
      
      <img style={{marginLeft:-50}} id="img-abs-lib" src = "/images/database.png"></img>

      
<div class="grid-container-built-project">



<div class="grid-item">
<h1 style={{display:'flex',marginTop:-50,fontSize:30}} >Blockchain</h1>

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/ethereum.png"></img>
<p>Wordpress</p>

</div>

</div>


<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/bitcoin.png"></img>
<p>Angular</p>

</div>

</div>



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/Hyperledger.png"></img>
<p>React</p>

</div>

</div>


</div>



      </CardContent>
      <CardActions></CardActions>
    </Card>

    
  </div>

</div>  

<div class="grid-item">

<div className="built-card-lib-container">
    <Card 
      className="code8-lib-card"

      sx={{
        overflow:"inherit",
        filter: "drop-shadow(6px 12px 4px rgba(0, 0, 0, 0.25))",
        border: "2px solid #1978A5",
      }}

    >
      <CardContent>
      
      <img style={{marginLeft:-50}} id="img-abs-lib" src = "/images/database.png"></img>

      
<div class="grid-container-built-project">

<div class="grid-item">

<h1 style={{display:'flex',marginTop:-50,fontSize:30}} >AI/ML</h1>

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/ethereum.png"></img>
<p>Wordpress</p>

</div>

</div>


<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/bitcoin.png"></img>
<p>Angular</p>

</div>

</div>



<div class="grid-item">

<div style={{marginLeft:50}}>

<img style={{display:"flex"}} id="img" src = "/images/Hyperledger.png"></img>
<p>React</p>

</div>

</div>


</div>



      </CardContent>
      <CardActions></CardActions>
    </Card>

    
  </div>

</div>


  

  </div>

  
</div>





</div>

{/*Features*/}

<div style={{marginTop:50}} >

        
<h1 style={{display:"flex",justifyContent:"center",fontSize:50}} >FEATURES</h1>
<p style={{display:"flex",justifyContent:"center",fontSize:30,padding:30}} >What makes our courses special?</p>

  <div class="grid-container-home">


  <div class="grid-item">

<div className='features-class'>

  <img style={{display:"flex",}}src = "/images/brain.png"></img>

    </div>

    
    <h1 style={{display:'flex',justifyContent:'center',marginTop:22}} >Structured Learning
</h1>

<p style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'-webkit-center',marginTop:15,fontSize:18}}>Learning made easy. Complete <br></br> syllabus is covered while never<br></br>
 compromising on quality.</p>


  </div>

  <div class="grid-item">

<div className='features-class'>

  <img style={{display:"flex",}}src = "/images/Notes.png"></img>

    </div>

    
    <h1 style={{display:'flex',justifyContent:'center',marginTop:22}} >Notes
</h1>


<p style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'-webkit-center',marginTop:15,fontSize:18}}>Get complete notes for all<br></br>
  lectures so that you can focus on<br></br>learning and practising..</p>


  </div>
  

  <div class="grid-item">

<div className='features-class'>

  <img style={{display:"flex",}}src = "/images/Projects.png"></img>

    </div>

    
    <h1 style={{display:'flex',justifyContent:'center',marginTop:22}} >Projects

</h1>

<p style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'-webkit-center',marginTop:15,fontSize:18}}>Learn by doing and apply your<br></br>
knowledge via projects and open<br></br>source contributions.</p>


  </div>

  </div>


  <div class="grid-container-home">


<div class="grid-item">


</div>

<div class="grid-item">

<div className='features-class'>

<img style={{display:"flex",}}src = "/images/completion.png"></img>

  </div>

  
  <h1 style={{display:'flex',justifyContent:'center',marginTop:22}} >Certificate of completion

</h1>


<p style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'-webkit-center',marginTop:15,fontSize:18}}>Get Certificate on the successful<br></br>completion of a course</p>


</div>


<div class="grid-item">


</div>

</div>

  
</div>




    </div>
  );
}
